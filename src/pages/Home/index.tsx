import React, { useEffect, useState } from "react";
import { SearchSeries } from "../../api";
import { useSerie } from "../../hooks";
import Menu from "../../components/Menu";
import FeatureSerie from "../../components/FeaturedSerie";
import PopularSeries from "../../components/PopularSeries";
type HomeProps = {
  name: string;
  sobrenome: string;
};
type Serie = {
  id: number;
  name: string;
  imageUrl: string;
};
const Home = ({ name, sobrenome }: HomeProps) => {
  // const { data } = useSerie();
  // const result = SearchSeries("natureza");

  return (
    <>
      <Menu />
      <FeatureSerie />
      <PopularSeries />
    </>
  );
};

export default Home;
