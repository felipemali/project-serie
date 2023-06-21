type showProps = {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
};
export type DataSerieProps = {
  id: number;
  name: string;
  imageUrl: string;
  imageOriginal: string;
  show: showProps;
  sumary: string;
};

export type SerieProps = {
  serie: DataSerieProps;
};
export type NewEpisodesDayProps = {
  episodes: DataSerieProps[];
  length?: any;
  map: () => any;
};
export type resultNewEpisodesProps = {
  _embedded: {
    show: showProps;
  };
};
