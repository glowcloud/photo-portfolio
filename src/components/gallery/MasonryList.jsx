import { useEffect, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";

const MasonryList = ({ images, handleOpen, handleClose }) => {
  const [columns, setColumns] = useState(
    window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3
  );

  useEffect(() => {
    const getColumns = () => {
      if (window.innerWidth < 600) {
        setColumns(1);
        handleClose();
      } else if (window.innerWidth < 900) setColumns(2);
      else setColumns(3);
    };

    window.addEventListener("resize", getColumns);
    return () => window.removeEventListener("resize", getColumns);
  }, []);

  return (
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
  );
};

export default MasonryList;
