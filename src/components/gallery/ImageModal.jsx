import { Modal, Box } from "@mui/material";
import ImageModalPreview from "./ImageModalPreview";
import ImageModalTop from "./ImageModalTop";
import ImageModalNext from "./ImageModalNext";
import ImageModalPrev from "./ImageModalPrev";

const ImageModal = ({
  images,
  currentIndex,
  setCurrentIndex,
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <Box height="100vh">
        {/* IMAGE COUNT + CLOSE */}
        <ImageModalTop
          text={`${currentIndex + 1}/${images.length}`}
          handleClose={handleClose}
        />

        {/* IMAGE + NAV  */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* PREV NAV */}
          <ImageModalPrev
            imagesLength={images.length}
            setCurrentIndex={setCurrentIndex}
          />

          {/* IMAGE */}
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              component="img"
              src={images[currentIndex]}
              alt={`Image ${currentIndex}`}
              loading="lazy"
              width={{ xs: "80vw", md: "85vw" }}
              height={{ xs: "90vh", md: "75vh" }}
              sx={{
                objectFit: "contain",
              }}
            />
          </Box>

          {/* NEXT NAV */}
          <ImageModalNext
            imagesLength={images.length}
            setCurrentIndex={setCurrentIndex}
          />
        </Box>

        {/* PREVIEW */}
        <ImageModalPreview
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </Box>
    </Modal>
  );
};

export default ImageModal;
