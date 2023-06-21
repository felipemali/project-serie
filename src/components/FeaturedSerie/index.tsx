import { Box, Toolbar, Typography, InputBase, AppBar } from "@mui/material/";
import stranger from "../../assets/strangerrr.jpg";
import DataSerie from "./DataSerie";
import { NewEpisodesDay, SearchSeries } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { DataSerieProps } from "../../api/types";
import { useEffect, useState } from "react";

type FeatureSerieProps = {
  searchInput: string;
};
const FeatureSerie = ({ searchInput }: FeatureSerieProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const series = SearchSeries(searchInput);
  const newEpisodes = NewEpisodesDay();
  console.log(newEpisodes);

  const stylesSwiperSlide = (data: DataSerieProps) => {
    return {
      backgroundImage: `linear-gradient(to right, rgba(0.9,0.9,0.9,0.9), rgba(0.9,0.9,0.9,0)), url('${data.imageOriginal}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "600px",
      margin: " 0 auto 0 auto",
    };
  };

  return (
    <>
      {newEpisodes.length > 0 && (
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          initialSlide={1}
          spaceBetween={0}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {newEpisodes.map((data: DataSerieProps, index: number) => (
            <SwiperSlide key={`${data.name}-${index}`}>
              <Box sx={{ width: "100%" }}>
                <Box maxWidth="2000px" sx={stylesSwiperSlide(data)}>
                  <DataSerie data={data} />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
export default FeatureSerie;
