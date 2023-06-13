import { useContext } from "react";
import { dataSeriesContext } from "../provider/dataSeries";

export const useSerie = () => {
  const context = useContext(dataSeriesContext);

  if (context) {
    return context;
  }
  throw new Error("Contect is not defined");
};
