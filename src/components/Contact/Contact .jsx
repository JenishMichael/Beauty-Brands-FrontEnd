import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 3rem 2rem;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  background-color: #fff;
`;

const FormTitle = styled(Typography)`
  text-align: center;
  color: #4b0082;
  font-weight: 700;
`;

const FormDescription = styled(Typography)`
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SubmitButton = styled(Button)`
  background-color: #4b0082;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  &:hover {
    background-color: #37006b;
  }
`;

export function Contact() {
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
    <Container>
      <StyledPaper elevation={6}>
        <FormTitle variant="h4" gutterBottom>
          Contact Us
        </FormTitle>

        <FormDescription variant="body2">
          Got a question or want to list your brand? Fill out the form and we’ll
          get back to you!
        </FormDescription>

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

          <SubmitButton type="submit" variant="contained" fullWidth>
            Send Message
          </SubmitButton>

          {isSubmitSuccessful && (
            <Typography sx={{ mt: 2, color: "green", textAlign: "center" }}>
              Message sent successfully!
            </Typography>
          )}
        </form>
      </StyledPaper>
    </Container>
  );
}
