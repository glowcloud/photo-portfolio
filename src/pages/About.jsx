import { Box, Typography, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import profileImg from "../assets/images/profile-image.png";

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={5}
      mx={{ md: 10, sm: 0 }}
      id="contact"
    >
      <Box
        component="img"
        src={profileImg}
        alt="Profile Picture"
        background="transparent"
        sx={{ width: "300px" }}
      />
      <Box p={3}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "500",
            color: "#8d5185",
            backgroundImage: "linear-gradient(315deg, #8d5185 0%, #a1bafe 74%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hello, I'm Jane Doe
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" m={2}>
          <IconButton size="large">
            <TwitterIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="large">
            <InstagramIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="large">
            <FacebookIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Typography
          gutterBottom
          sx={{
            textAlign: "justify",
            px: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies
          tristique nunc sit amet maximus. Vestibulum tincidunt, mauris
          tristique fermentum dictum, eros diam auctor sem, at semper libero
          nunc ac erat. Fusce sit amet elit risus. Morbi orci odio, porta in
          mollis sed, euismod sed nunc. Sed tincidunt ipsum egestas elit mattis,
          non laoreet libero fermentum. Nulla blandit imperdiet orci nec
          tincidunt. Sed tortor nunc, bibendum sit amet quam quis, consectetur
          ultrices est. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc et porttitor risus. Sed scelerisque auctor leo sit amet
          vulputate. Mauris rhoncus consectetur est.
        </Typography>
        <Typography
          gutterBottom
          sx={{
            textAlign: "justify",
            px: 20,
          }}
        >
          Nulla convallis mattis nulla sed cursus. Praesent feugiat tellus
          nulla, vitae feugiat velit dictum a. Ut commodo pellentesque est vitae
          condimentum. Quisque elit quam, tincidunt eu est at, facilisis
          interdum nisi. Nullam sagittis, neque vel tincidunt aliquet, felis
          magna laoreet nulla, nec hendrerit lorem turpis ut ex. Ut quis
          scelerisque tortor. Sed accumsan ac nulla et hendrerit.
        </Typography>
        <Typography
          gutterBottom
          sx={{
            textAlign: "justify",
            px: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consequat elementum tellus vel feugiat. Suspendisse semper mi cursus
          accumsan condimentum. Donec erat dolor, dapibus maximus bibendum nec,
          ornare sit amet odio. Phasellus fermentum enim id justo hendrerit
          lobortis. Quisque congue et risus vitae pellentesque. Vivamus ac
          interdum urna. Pellentesque ut ante accumsan, condimentum magna ut,
          auctor ligula. Curabitur porta sollicitudin ultricies. Nunc urna diam,
          fringilla id est id, auctor vulputate augue. Integer efficitur orci
          non elit aliquam, quis varius augue tincidunt. Phasellus sed finibus
          eros. Duis mauris tellus, molestie in tristique sit amet, elementum
          eget metus. Donec egestas commodo metus sit amet venenatis. Nullam
          vehicula ornare leo, vel porta libero venenatis interdum. Aliquam
          condimentum elit eget nibh molestie maximus.
        </Typography>
        <Typography
          gutterBottom
          sx={{
            textAlign: "justify",
            px: 20,
          }}
        >
          Donec felis lectus, vehicula vel est at, pharetra ornare dolor. Nunc
          in elit sed orci commodo blandit. Donec leo mi, tincidunt id diam ut,
          aliquam pulvinar lacus. Donec consequat quam faucibus nisi efficitur
          dictum. Nullam sodales felis dui, ut dapibus diam ullamcorper et.
          Etiam fermentum tellus metus, quis accumsan lectus hendrerit congue.
          Nunc gravida condimentum tempus. Maecenas nec vestibulum ante. Duis
          eleifend eros sed porttitor tempor.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
