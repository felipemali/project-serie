import { styled, alpha } from "@mui/material/styles";
import { Box, Toolbar, Typography, InputBase, AppBar } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../style";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StylesTypography = {
  flexGrow: 1,
  display: { xs: "none", sm: "block" },
  fontSize: styles.fontSize.default,
  fontFamily: "sans-serif",
  fontWeight: styles.typography.fontWeight.default,
  "&:hover": {
    cursor: "pointer",
    color: styles.color.gray,
  },
};

const Menu = () => {
  return (
    <Box
      margin="auto"
      display="flex"
      justifyContent="space-between"
      sx={{ flexGrow: 1, mb: 0.5 }}
      maxWidth="2000px"
    >
      <Box
        minWidth="1000px"
        position="static"
        sx={{
          bgcolor: styles.bgColor.dark,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: styles.fontSize.max,
              fontFamily: "inherit",
              fontWeight: styles.typography.fontWeight.default,
              //   border: `${styles.border.min} solid red`,
            }}
            color={styles.color.red}
          >
            SHOWFLIX
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={StylesTypography}
            color={styles.color.default}
          >
            TV Shows
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={StylesTypography}
            color={styles.color.default}
          >
            Movies
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={StylesTypography}
            color={styles.color.default}
          >
            Recently Added
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={StylesTypography}
            color={styles.color.default}
          >
            My List
          </Typography>
        </Toolbar>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mr: 5,
        }}
      >
        <Search sx={{ backgroundColor: "#0c0c0c" }}>
          <SearchIconWrapper>
            <SearchIcon
              fontSize="large"
              sx={{
                color: styles.color.default,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </Box>
  );
};

export default Menu;
