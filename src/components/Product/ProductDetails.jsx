// pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import productImg from "../../assets/product.jpeg";

// Dummy product data
const productList = [
  {
    id: "1",
    title: "Elegant Beauty Salon",
    image: productImg,
    category: "Beauty Salon",
    location: "Mumbai, India",
    description:
      "Experience the ultimate in hair styling, skincare, and relaxation at our elegant beauty salon.",
  },
  {
    id: "2",
    title: "Relaxing Thai Spa",
    image: productImg,
    category: "Spa & Wellness",
    location: "Delhi, India",
    description:
      "Unwind with traditional Thai therapies, soothing massages, and holistic wellness at our spa.",
  },
  {
    id: "3",
    title: "Chic Nail Studio",
    image: productImg,
    category: "Nail Studio",
    location: "Bangalore, India",
    description:
      "Modern nail art, acrylic extensions, and relaxing manicures in a chic and hygienic setting.",
  },
];

// Styled components
const Container = styled(Box)`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const ProductImage = styled("img")`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const CategoryLocation = styled(Typography)`
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled(Typography)`
  margin-bottom: 1.5rem;
  color: #444;
  line-height: 1.6;
`;

const ActionButton = styled(Button)`
  background-color: #4b0082;
  color: #fff;
  font-weight: 600;
  &:hover {
    background-color: #37006b;
  }
`;

export const ProductDetails = () => {
  const { id } = useParams();
  const product = productList.find((p) => p.id === id);

  if (!product) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          Product not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <ProductImage src={product.image} alt={product.title} />
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <CategoryLocation>
        {product.category} | {product.location}
      </CategoryLocation>
      <Description>{product.description}</Description>
      <ActionButton variant="contained">Contact / Book Now</ActionButton>
    </Container>
  );
};
