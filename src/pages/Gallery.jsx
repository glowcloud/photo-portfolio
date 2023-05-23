import { useEffect, useState } from "react";
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
  const [columns, setColumns] = useState(
    window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3
  );

  useEffect(() => {
    const getColumns = () => {
      if (window.innerWidth < 600) {
        setColumns(1);
        setOpen(false);
      } else if (window.innerWidth < 900) setColumns(2);
      else setColumns(3);
    };

    window.addEventListener("resize", getColumns);
    return () => window.removeEventListener("resize", getColumns);
  }, []);

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

  return (
    <>
      <ImageList variant="masonry" cols={columns} gap={10}>
        {images.map((image, index) => (
          <ImageListItem
            key={index}
            onClick={() => {
              handleOpen(index);
            }}
            sx={{
              pointerEvents: { xs: "none", sm: "auto" },
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
          {/* IMAGE COUNT + EXIT */}
          <Box
            width={{ sm: 480, md: 800, lg: 900, xl: 1200 }}
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

          {/* PREV NAV  */}
          <Box display="flex" width="100%">
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

            {/* IMAGE */}
            <Box
              width={{ sm: 480, md: 800, lg: 900, xl: 1200 }}
              height={{ sm: 500, md: 550, xl: 700 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                src={images[currentIndex]}
                alt={`Image ${currentIndex}`}
                loading="lazy"
                width={{ sm: 480, md: 800, lg: 900, xl: 1200 }}
                height={{ sm: 500, md: 550, xl: 700 }}
                sx={{
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* NEXT NAV */}
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

          {/* PREVIEW */}
          <Grid
            container
            display={{ sm: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            width={{ md: 900, xl: 1200 }}
            my={2}
          >
            {getNavigationIndexes().map((index) => (
              <Grid
                item
                md={2}
                mx={0.5}
                key={index}
                onClick={() => setCurrentIndex(index)}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  component="img"
                  src={images[index]}
                  alt={`Image ${index}`}
                  loading="lazy"
                  width={{ md: 150, xl: 200 }}
                  height={100}
                  sx={{
                    objectFit: "cover",
                    opacity: index === currentIndex ? 1 : 0.5,
                    "&:hover": {
                      opacity: 1,
                      transition: "opacity 300ms",
                      cursor: "pointer",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Gallery;
