import { createContext, useContext, useEffect, useState } from "react";
import { fetchHomeContent } from "../network/apis";
import { THomeContentResponse } from "../types/apis";
import { TAppContext } from "../types/contexts";

const appContext = createContext<TAppContext>({ homeData: {} });

export const AppContextProvider = ({ children }: { children: any }) => {
  const [homeData, setHomeData] = useState<THomeContentResponse>();

  const fetchHomeData = async () => {
    const data = await fetchHomeContent();
    setHomeData(data);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <appContext.Provider
      value={{
        homeData,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const { homeData } = useContext<TAppContext>(appContext);
  return {
    homeData,
  };
};
