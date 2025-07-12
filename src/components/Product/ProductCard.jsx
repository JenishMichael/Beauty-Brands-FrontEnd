import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const CardLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));

const CardContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "300px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const CardImage = styled("img")(() => ({
  width: "100%",
  height: "180px",
  objectFit: "cover",
}));

const CardContent = styled(Box)(() => ({
  padding: "16px",
}));

export const ProductCard = ({ id, image, title, category, location }) => {
  return (
    <CardLink to={`/product/${id}`}>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardContent>
          <Typography fontWeight="bold" fontSize="1.1rem" color="#333">
            {title}
          </Typography>
          <Typography fontSize="0.9rem" color="#888">
            {category}
          </Typography>
          <Typography fontSize="0.85rem" color="#555" mt={1}>
            {location}
          </Typography>
        </CardContent>
      </CardContainer>
    </CardLink>
  );
};
