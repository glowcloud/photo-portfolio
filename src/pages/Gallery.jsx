import { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Modal,
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";

const Gallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpen = (index) => {
    setOpen(true);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(null);
  };

  const getNavigationIndexes = () => {
    return [
      currentIndex - 2 < 0
        ? currentIndex - 2 + images.length
        : currentIndex - 2,
      currentIndex - 1 < 0
        ? currentIndex - 1 + images.length
        : currentIndex - 1,
      currentIndex,
      currentIndex + 1 >= images.length
        ? currentIndex + 1 - images.length
        : currentIndex + 1,
      currentIndex + 2 >= images.length
        ? currentIndex + 2 - images.length
        : currentIndex + 2,
    ];
  };

  getNavigationIndexes();

  return (
    <>
      <ImageList variant="masonry" cols={3} gap={10}>
        {images.map((image, index) => (
          <ImageListItem
            key={index}
            onClick={() => {
              handleOpen(index);
            }}
            sx={{
              "&:hover": {
                cursor: "pointer",
                opacity: 0.75,
                transition: "opacity 300ms ",
              },
            }}
          >
            <img src={image} alt={`Image ${index}`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Box
            width="1200px"
            display="flex"
            justifyContent="space-between"
            alignItems="end"
          >
            <Typography
              fontSize="large"
              sx={{ color: "#eee", pl: 2, pb: "12px" }}
            >
              {`${currentIndex + 1}/${images.length}`}
            </Typography>
            <IconButton size="large" onClick={handleClose}>
              <CloseIcon fontSize="inherit" sx={{ color: "#eee" }} />
            </IconButton>
          </Box>
          <Box display="flex" width="100%" flexGrow={1}>
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="right"
              alignItems="center"
              pr={3}
              onClick={() =>
                setCurrentIndex((prevIndex) => {
                  let newIndex = prevIndex - 1;
                  if (newIndex < 0) newIndex = images.length - 1;
                  return newIndex;
                })
              }
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  opacity: 0.75,
                  transition: "opacity 300ms",
                },
              }}
            >
              <NavigateBeforeIcon fontSize="large" sx={{ color: "#eee" }} />
            </Box>
            <Box width={1200} height={800}>
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex}`}
                loading="lazy"
                style={{
                  width: 1200,
                  height: 800,
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="left"
              alignItems="center"
              pl={3}
              onClick={() =>
                setCurrentIndex((prevIndex) => {
                  let newIndex = prevIndex + 1;
                  if (newIndex === images.length) newIndex = 0;
                  return newIndex;
                })
              }
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  opacity: 0.75,
                  transition: "opacity 300ms",
                },
              }}
            >
              <NavigateNextIcon fontSize="large" sx={{ color: "#eee" }} />
            </Box>
          </Box>
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="1200px"
            height="100%"
          >
            {getNavigationIndexes().map((index) => (
              <Grid
                item
                md={2}
                mx={0.5}
                key={index}
                component="img"
                src={images[index]}
                alt={`Image ${index}`}
                loading="lazy"
                maxWidth={400}
                maxHeight={100}
                sx={{
                  objectFit: "contain",
                  opacity: index === currentIndex ? 1 : 0.5,
                  // border: index === currentIndex ? "1px solid white" : "none",
                  "&:hover": {
                    // border: "1px solid white",
                    opacity: 1,
                    transition: "opacity 300ms",
                    cursor: "pointer",
                  },
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Gallery;
