import React, { createContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type Teste = {
  name: string;
  age: number;
};
type ToMakeProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type dataSeriesContextProps = {
  data: Teste;
};

export const dataSeriesContext = createContext<dataSeriesContextProps | null>(
  null
);

const SeriesProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<Teste>({
    name: "felipe",
    age: 21,
  });

  const values: dataSeriesContextProps = {
    data,
  };

  return (
    <dataSeriesContext.Provider value={values}>
      {children}
    </dataSeriesContext.Provider>
  );
};
export default SeriesProvider;
