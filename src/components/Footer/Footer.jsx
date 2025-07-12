import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Box)(() => ({
  backgroundColor: "#000",
  color: "#fff",
  padding: "2rem 1rem",
  textAlign: "center",
}));

const BrandTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#fdd835",
  marginBottom: "0.5rem",
}));

export const Footer = () => {
  return (
    <FooterContainer>
      <BrandTitle>Beauty Brands</BrandTitle>

      <Typography
        variant="body2"
        sx={{ color: "#ccc", maxWidth: "600px", margin: "0 auto" }}
      >
        Discover top-rated salons, spas, and wellness studios in your city.
        Empowering beauty professionals through technology.
      </Typography>

      <Box mt={3}>
        <Typography variant="body2" sx={{ color: "#aaa" }}>
          © {new Date().getFullYear()} Beauty Brands. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};
