//import { useCountdown } from "hook/useCountdown";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext({
  payload: null,
  client: null,
  publish: () => {},
  send: () => {},
  subscribe: () => {},
  unsubscribe: () => {},
  connected: false,
  //order
  preOrder: null,
  setPreOrder: () => {},
});

AppContext.displayName = "AppContext";

export function AppProvider({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [payload, setPayload] = useState(null);
  const [connected, setConnected] = useState(false);
  const [client, setClient] = useState(null);
  //const [days, hours, minutes, seconds] = useCountdown(2728341062 * 1000);
  const [preOrder, setPreOrder] = useState({});
  useEffect(() => {
    setLoaded(true);
  }, []); 

  const connectMQTT = () => {
    try {
      let mqttHost = process.env.REACT_APP_DOMAIN_MQTT;
      let _client = new window.Paho.MQTT.Client(
        mqttHost,
        +process.env.REACT_APP_PORT_MQTT,
        "myclientid_" + parseInt(Math.random() * 100, 10)
      );
      
      _client.onConnectionLost = onConnectionLost;
      _client.onMessageArrived = onMessageArrived;
      _client.connect({
        // userName: process.env.REACT_APP_USER,
        // password: process.env.REACT_APP_PASSWORD,
        // useSSL: true,
        onSuccess: onConnect,
        timeout: 30 * 1000,
        keepAliveInterval: 60,
        // invocationContext: {},
        // reconnect: true
      });
      setClient(_client);
    } catch (error) {
      console.error("MQTT Connection Error:", error);
    }
  };

  // useEffect(() => {
  //   if (loaded) {
  //     connectMQTT();
  //   }
  // }, [loaded]);

  const onConnect = () => {
    console.log('MQTT connected success! ');
    setConnected(true);
  };

  const onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  };

  const onMessageArrived = (message) => {
    setPayload({
      topic: message.destinationName,
      message: message.payloadString,
    });
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
        client,
        publish,
        send,
        subscribe,
        unsubscribe,
        connected,
        //days,
        //hours,
        //minutes,
        //seconds,
        preOrder,
        setPreOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
