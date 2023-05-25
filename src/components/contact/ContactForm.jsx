import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const ContactForm = ({ setIsSnackbar }) => {
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const isEmail = (email) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  };

  const onSubmit = async () => {
    if (
      !formState.user_name ||
      !formState.user_email ||
      !formState.message ||
      !isEmail(formState.user_email)
    ) {
      setError(true);
    } else {
      setError(false);
      setIsSnackbar(true);
      setFormState({ user_name: "", user_email: "", message: "" });
    }
  };

  return (
    <form autoComplete="off">
      <TextField
        label="Name"
        sx={{ label: { color: "text.primary" }, my: 1 }}
        fullWidth
        required
        type="text"
        name="user_name"
        error={error && !formState.user_name}
        onChange={(e) =>
          setFormState((prevForm) => {
            return { ...prevForm, user_name: e.target.value };
          })
        }
        helperText={error && !formState.user_name && "Name field required."}
        value={formState.user_name || ""}
      />
      <TextField
        label="Email"
        sx={{ label: { color: "text.primary" }, my: 1 }}
        fullWidth
        required
        type="email"
        name="user_email"
        error={
          error && (!formState.user_email || !isEmail(formState.user_email))
        }
        onChange={(e) =>
          setFormState((prevForm) => {
            return { ...prevForm, user_email: e.target.value };
          })
        }
        helperText={
          error &&
          ((!formState.user_email && "Email field required.") ||
            (!isEmail(formState.user_email) && "Incorrect email."))
        }
        value={formState.user_email || ""}
      />
      <TextField
        label="Message"
        sx={{ label: { color: "text.primary" }, my: 1 }}
        fullWidth
        required
        type="text"
        multiline
        rows={10}
        name="message"
        error={error && !formState.message}
        onChange={(e) =>
          setFormState((prevForm) => {
            return { ...prevForm, message: e.target.value };
          })
        }
        helperText={error && !formState.message && "Name field required."}
        value={formState.message || ""}
      />
      <Box textAlign="center">
        <Button
          onClick={onSubmit}
          variant="outlined"
          size="large"
          sx={{ my: 1 }}
        >
          Send
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
