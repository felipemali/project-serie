import { useContext, useState } from "react";
import { dataSeriesContext } from "../provider/dataSeries";
import { useEffect, useRef } from "react";
type KeyProps = {
  key: string;
  fun: (arg: any) => void;
};
export const useSerie = () => {
  const context = useContext(dataSeriesContext);

  if (context) {
    return context;
  }
  throw new Error("Contect is not defined");
};

export const useKey = (key: any, callback: any) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export const GetCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(() => {
    const storedDate = localStorage.getItem("currentDate");
    return storedDate ? new Date(storedDate) : new Date();
  });

  useEffect(() => {
    const storedDate = localStorage.getItem("currentDate");
    const storedDateObj = storedDate ? new Date(storedDate) : null;
    const currentDateObj = new Date();

    if (
      !storedDateObj ||
      storedDateObj.getDate() !== currentDateObj.getDate() ||
      storedDateObj.getMonth() !== currentDateObj.getMonth() ||
      storedDateObj.getFullYear() !== currentDateObj.getFullYear()
    ) {
      setCurrentDate(currentDateObj);
      localStorage.setItem("currentDate", currentDateObj.toISOString());
    }
  }, []);

  const formattedDate = currentDate.toISOString().split("T")[0];

  return formattedDate;
};
