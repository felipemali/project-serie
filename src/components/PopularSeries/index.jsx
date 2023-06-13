import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { SearchSeries } from "../../api";
import { Box, Typography } from "@mui/material";
import styles from "../../style";
const PopularSeries = () => {
  const series = SearchSeries("natureza");
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
        Popular On Netflix
      </Typography>
      <Swiper
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        initialSlide={2}
        spaceBetween={-1200}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {series?.map((data) => (
          <SwiperSlide style={stylesSwiperSlide(data)}></SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default PopularSeries;
