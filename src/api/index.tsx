import axios from "axios";
import { useEffect, useState } from "react";
import { SerieProps, DataSerieProps } from "./types";
const API_URL = "https://api.tvmaze.com/search/shows?";

export const SearchSeries = (name: string) => {
  const [serie, setSerie] = useState<SerieProps[]>([]);
  useEffect(() => {
    if (name) {
      axios
        .get(API_URL, {
          params: {
            q: name,
          },
        })
        .then((response) => {
          const result = response.data.map((d: DataSerieProps) => ({
            id: d.show.id,
            name: d.show.name,
            imageUrl: d.show.image?.medium,
          }));
          setSerie(result);
        });
    }
  }, [name]);
  return serie;
};
