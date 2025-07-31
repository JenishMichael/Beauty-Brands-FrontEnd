import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CardContainer = styled(Box)`
  width: 300px;
  height: 360px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled("img")`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled(Box)`
  padding: 16px;
  text-align: center;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export function ProductCard({ id, image, title, category, location }) {
  return (
    <CardLink to={`/product/${id}`}>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardContent>
          <Typography
            fontWeight="bold"
            fontSize="1.1rem"
            color="#333"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
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
}
