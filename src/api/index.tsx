import axios from "axios";
import { useEffect, useState } from "react";
import {
  SerieProps,
  DataSerieProps,
  NewEpisodesDayProps,
  resultNewEpisodesProps,
} from "./types";
import { GetCurrentDate } from "../hooks";
const API_URL = "https://api.tvmaze.com/search/shows?";
const API_URL_NEW_EPISODES = "https://api.tvmaze.com/schedule/web?date=";

export const SearchSeries = (name: string) => {
  const [serie, setSerie] = useState<DataSerieProps[]>([]);

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
            imageOriginal: d.show.image?.original,
          }));
          setSerie(result);
        });
    }
  }, [name]);
  return serie;
};

export const NewEpisodesDay = () => {
  const [episodes, setEpisodes] = useState<NewEpisodesDayProps | []>([]);
  const date = GetCurrentDate();
  useEffect(() => {
    if (date) {
      axios
        .get(API_URL_NEW_EPISODES, {
          params: {
            q: `${date}"&country="`,
          },
        })
        .then((response) => {
          const cut_array = response.data.slice(0, 50);
          console.log(cut_array);

          const result = cut_array.map((d: resultNewEpisodesProps) => ({
            id: d._embedded.show.id,
            name: d._embedded.show.name,
            imageUrl: d._embedded.show.image?.medium,
            imageOriginal: d._embedded.show.image?.original,
            sumary: d._embedded.show.summary,
          }));

          setEpisodes(result);
        });
    }
  }, [date]);
  return episodes;
};
