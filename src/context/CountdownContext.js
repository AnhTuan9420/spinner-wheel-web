import { useCountdown } from "hook/useCountdown";
import { createContext, useContext } from "react";

const CountdownContext = createContext({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

CountdownContext.displayName = "CountdownContext";

export function CountdownProvider({ children }) {
  const [days, hours, minutes, seconds] = useCountdown(
    +(process.env.REACT_APP_COUNTDOWN_TIME ?? new Date(20320000000)) * 1000
  );
  return (
    <CountdownContext.Provider
      value={{
        days,
        hours,
        minutes,
        seconds,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export const useCountdownApp = () => useContext(CountdownContext);
