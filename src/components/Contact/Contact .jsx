import { useForm } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";

export const Contact = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset();
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "3rem 2rem",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "16px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ textAlign: "center", color: "#4b0082" }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#666", mb: 3, textAlign: "center" }}
        >
          Got a question or want to list your brand? Fill out the form and we’ll
          get back to you!
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            error={!!errors.message}
            helperText={errors.message?.message}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#4b0082",
              color: "#fff",
              fontWeight: 600,
              padding: "10px",
              "&:hover": {
                backgroundColor: "#37006b",
              },
            }}
          >
            Send Message
          </Button>

          {isSubmitSuccessful && (
            <Typography sx={{ mt: 2, color: "green", textAlign: "center" }}>
              Message sent successfully!
            </Typography>
          )}
        </form>
      </Paper>
    </Box>
  );
};
