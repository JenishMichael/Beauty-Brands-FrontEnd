import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductCard } from "./ProductCard";
import productImg from "../../assets/product.jpeg";

const ProductGrid = styled(Box)`
  margin: 0 auto;
  max-width: 1700px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const productList = [
  {
    id: 1,
    title: "Swiss Beauty Lip GlossSwiss Beauty Lip GlossSwiss Beauty Lip Gloss",
    category: "Cosmetics",
    location: "Delhi, India",
    image: productImg,
  },
  {
    id: 2,
    title: "Lakme 9to5 Foundation",
    category: "Makeup",
    location: "Mumbai, India",
    image: productImg,
  },
  {
    id: 3,
    title: "VLCC Herbal Face Wash",
    category: "Skincare",
    location: "Bangalore, India",
    image: productImg,
  },
  {
    id: 4,
    title: "Bodycraft Lavender Oil",
    category: "Wellness",
    location: "Chennai, India",
    image: productImg,
  },
  {
    id: 5,
    title: "Mamaearth Vitamin C Serum",
    category: "Skincare",
    location: "Gurgaon, India",
    image: productImg,
  },
  {
    id: 6,
    title: "Plum Kajal Pencil",
    category: "Makeup",
    location: "Pune, India",
    image: productImg,
  },
  {
    id: 7,
    title: "MCaffeine Coffee Scrub",
    category: "Body Care",
    location: "Ahmedabad, India",
    image: productImg,
  },
  {
    id: 8,
    title: "Nykaa Matte Lipstick",
    category: "Cosmetics",
    location: "Jaipur, India",
    image: productImg,
  },
  {
    id: 9,
    title: "Forest Essentials Shampoo",
    category: "Hair Care",
    location: "Kolkata, India",
    image: productImg,
  },
  {
    id: 10,
    title: "Biotique Morning  Cream",
    category: "Moisturizer",
    location: "Hyderabad, India",
    image: productImg,
  },
  {
    id: 11,
    title: "Maybelline Mascara",
    category: "Eye Makeup",
    location: "Nagpur, India",
    image: productImg,
  },
  {
    id: 12,
    title: "Sunscreen SPF 50",
    category: "Skincare",
    location: "Noida, India",
    image: productImg,
  },
];

export function ProductList() {
  return (
    <ProductGrid>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          location={product.location}
          image={product.image}
        />
      ))}
    </ProductGrid>
  );
}
