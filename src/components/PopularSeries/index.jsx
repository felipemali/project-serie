import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { NewEpisodesDay, SearchSeries } from "../../api";
import { Box, Typography } from "@mui/material";
import styles from "../../style";
const PopularSeries = () => {
  const series = SearchSeries("natureza");
  const newEpisodes = NewEpisodesDay();

  SwiperCore.use([Autoplay]);

  const stylesSwiperSlide = (data) => {
    return {
      color: "#fff",
      background: `url('${data.imageUrl}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "400px",
    };
  };

  return (
    <Box
      maxWidth={2000}
      margin="0 auto"
      sx={{
        background:
          "#000 linear-gradient(180deg, rgba(0.9,0.9,0.9,0.9), rgba(0.9,0.9,0.9,0.9))",
      }}
      padding={0}
    >
      <Typography
        padding={0}
        color="#fff"
        marginLeft={12}
        fontSize={styles.fontSize.max}
        marginTop={3}
      >
        Popular On Showflix
      </Typography>
      <Swiper
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: true,
        // }}
        initialSlide={2}
        spaceBetween={window.innerWidth <= 1860 ? 50 : -1200}
        slidesPerView={window.innerWidth <= 1860 ? 6 : 3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {series?.map((data) => (
          <SwiperSlide
            key={data.id}
            style={stylesSwiperSlide(data)}
          ></SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default PopularSeries;
