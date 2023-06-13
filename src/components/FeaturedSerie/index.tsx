import { Box, Toolbar, Typography, InputBase, AppBar } from "@mui/material/";
import stranger from "../../assets/strangerrr.jpg";
import DataSerie from "./DataSerie";
const FeatureSerie = () => {
  return (
    <>
      <Box
        maxWidth="2000px"
        sx={{
          backgroundImage: `linear-gradient(to right, rgba(0.9,0.9,0.9,0.9), rgba(0.9,0.9,0.9,0)), url('${stranger}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
          margin: " 0 auto 0 auto",
        }}
      >
        <DataSerie />
      </Box>
    </>
  );
};
export default FeatureSerie;
