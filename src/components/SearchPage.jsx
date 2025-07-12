import { useState } from "react";
import { styled } from "@mui/material";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
`;

const SearchSection = styled("div")`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const Input = styled("input")`
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 250px;
`;

const Select = styled("select")`
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled("button")`
  padding: 10px 20px;
  background-color: #4b0082;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #37006b;
  }
`;

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
    console.log("Category:", selectedCategory);
  };

  return (
    <Container>
      <h1>Find Your Beauty Products</h1>

      <SearchSection>
        <Input
          type="text"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Hair">Hair</option>
          <option value="Skincare">Skincare</option>
          <option value="Makeup">Makeup</option>
          <option value="Fragrance">Fragrance</option>
        </Select>

        <Button onClick={handleSearch}>Search</Button>
      </SearchSection>
    </Container>
  );
}
