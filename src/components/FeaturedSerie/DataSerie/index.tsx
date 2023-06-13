import { Box, Button, Typography } from "@mui/material/";
import styles from "../../../style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const DataSerie = () => {
  const stylesButtom = (color: string) => {
    return {
      backgroundColor: styles.bgColor[color as keyof typeof styles.bgColor],
      color: styles.color.dark,
      width: 130,
      fontFamily: "sans-serif",
      fontWeight: styles.typography.fontWeight.default,
      ml: 3,
      "&:hover": {
        backgroundColor: styles.color.gray,
        cursor: "pointer",
      },
    };
  };
  return (
    <>
      <Box maxWidth="500px" paddingLeft={5}>
        <Box sx={{ display: "flex", alignItems: "center", pt: 3 }}>
          <Typography component="span" variant="h3" color="error">
            S
          </Typography>
          <Typography
            component="span"
            variant="body1"
            color="#fff"
            marginLeft="5px"
          >
            S E R I E S
          </Typography>
        </Box>

        {/* title da série */}
        <Typography
          component="p"
          variant="h1"
          color="#fff"
          paddingLeft={5}
          sx={{ fontFamily: "fantasy" }}
        >
          Stranger
        </Typography>
        <Typography
          component="p"
          variant="h1"
          color="#fff"
          marginLeft={10}
          sx={{ fontFamily: "fantasy" }}
        >
          Things
        </Typography>

        <Typography
          component="p"
          color="#fff"
          marginTop={2}
          sx={{
            fontFamily: "inherit",
            fontWeight: styles.typography.fontWeight.min,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et erat
          et justo tristique elementum. Vivamus ut quam euismod lorem euismod
          posuere non ut turpis. Quisque facilisis suscipit tortor vulputate
          aliquet. Phasellus vitae felis augue. Quisque ac nisi porttitor,
          finibus libero scelerisque, rhoncus magna.
        </Typography>

        <Box display="flex" marginTop={3}>
          <Button sx={stylesButtom("default")}>
            <PlayArrowIcon /> Play
          </Button>
          <Button sx={stylesButtom("gray")}>+ My List</Button>
        </Box>
      </Box>
    </>
  );
};

export default DataSerie;
