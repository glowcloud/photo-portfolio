import { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  const [isSnackbar, setIsSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbar(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="90vh"
      mx={{ xs: 1, sm: 5, md: 10 }}
      id="contact"
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "500" }}
      >
        Get in Touch
      </Typography>

      {/* FORM */}
      <ContactForm setIsSnackbar={setIsSnackbar} />

      {/* ALERT */}
      <Snackbar open={isSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message sent.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
