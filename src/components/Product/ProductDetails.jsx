import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export const ProductDetails = () => {
  const { id } = useParams();

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Product Details for ID: {id}
      </Typography>
      {/* Fetch more data using ID or show static details */}
    </Box>
  );
};
