import MQTT from "paho-mqtt";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const AppContext = createContext({
  payload: null,
  clientMQTT: null,
  publish: () => {},
  send: () => {},
  subscribe: () => {},
  unsubscribe: () => {},
  connected: false,
});

AppContext.displayName = "AppContext";

export function AppProvider({ children }) {
  const [client, setClient] = useState(null);
  const [payload, setPayload] = useState(null);
  const [connected, setConnected] = useState(false);
  const loaded = useRef(null);
  useEffect(() => {
    loaded.current = true;
    return () => (loaded.current = false);
  }, []);

  const connectMQTT = useCallback(() => {
    try {
      let _client = new MQTT.Client(
        process.env.REACT_APP_DOMAIN,
        +process.env.REACT_APP_PORT_MQTT,
        "myclientid_" + parseInt(Math.random() * 100, 10)
      );
      _client.onConnectionLost = onConnectionLost;
      _client.onMessageArrived = onMessageArrived;
      // connect the client
      _client.connect({
        userName: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD,
        useSSL: true,
        onSuccess: onConnect,
      });
      setClient(_client);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (loaded.current) {
      connectMQTT();
    }
  }, [connectMQTT, loaded]);

  const onConnect = () => {
    setConnected(true);
    console.log("onConnected");
  };

  const onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  };

  const onMessageArrived = (message) => {
    console.log("onMessageArrived:" + message.payloadString);
    setPayload(message.payloadString);
  };

  const publish = (topic, payload, qos, retained) => {
    if (client) {
      client.publish(topic, payload, qos, retained);
    }
  };

  const send = (topic, payload, qos, retained) => {
    if (client) {
      client.send(topic, payload, qos, retained);
    }
  };

  const subscribe = (filter, subscribeOptions) => {
    if (client) {
      client.subscribe(filter, subscribeOptions);
    }
  };

  const unsubscribe = (filter, subscribeOptions) => {
    if (client) {
      client.unsubscribe(filter, subscribeOptions);
    }
  };

  return (
    <AppContext.Provider
      value={{
        payload,
        setClient,
        publish,
        send,
        subscribe,
        unsubscribe,
        connected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
