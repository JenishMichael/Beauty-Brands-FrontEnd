import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductCard } from "./ProductCard";
import productImg from "../../assets/product.jpeg";
import { useEffect, useState } from "react";
import { Loading } from "../DataCollectionFromClient/Loading";

const ProductGrid = styled(Box)`
  margin: 0 auto;
  max-width: 1700px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const [listings, setListings] = useState([]);

useEffect(() => {
  axios
    .get(`http://localhost:8080/api/v1/subCategories/active`)
    .then((res) => setSubCategories(res.data))
    .catch((err) => console.log("Error fetching subCategories:", err));
}, []);

export function ListingList() {
  if (!listings) {
    <Loading />;
  }
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
