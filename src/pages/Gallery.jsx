import { useState } from "react";
import MasonryList from "../components/gallery/MasonryList";
import ImageModal from "../components/gallery/ImageModal";

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

  return (
    <>
      <MasonryList
        images={images}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Gallery;
