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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        {/* IMAGE COUNT + CLOSE */}
        <ImageModalTop
          text={`${currentIndex + 1}/${images.length}`}
          handleClose={handleClose}
        />

        {/* IMAGE + NAV  */}
        <Box display="flex" width="100%">
          {/* PREV NAV */}
          <ImageModalPrev
            imagesLength={images.length}
            setCurrentIndex={setCurrentIndex}
          />

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
