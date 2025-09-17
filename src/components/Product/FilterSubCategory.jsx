// FilterSubCategory.jsx
import { useState } from "react";
import { styled } from "@mui/material";

const SubCategoryContainer = styled("div")`
  padding: 20px;
  background-color: #f2f2f2;
`;

const SubCategoryTitle = styled("h3")`
  font-size: 20px;
  color: #4b0082;
  margin-bottom: 10px;
`;

const SubCategoryButton = styled("button")`
  padding: 6px 14px;
  margin: 5px;
  border-radius: 6px;
  border: 1px solid #4b0082;
  background-color: ${(props) => (props.active ? "#4b0082" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#4b0082")};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #4b0082;
    color: white;
  }
`;

const ClearButton = styled("button")`
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #4b0082;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #37006b;
  }
`;

export function FilteredSubCategory({ subCategories, selectedCategory }) {
  if (!selectedCategory) return null; // hide if no category selected

  return (
    <SubCategoryContainer>
      <SubCategoryTitle>
        {selectedCategory.categoryName} Services
      </SubCategoryTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {subCategories.map((sub) => (
          <SubCategoryButton key={sub.subCategoryId}>
            {sub.subCategoryName}
          </SubCategoryButton>
        ))}
      </div>
      {/* {selectedSubCategory && (
        <ClearButton onClick={onClearSubCategory}>
          Clear SubCategory
        </ClearButton>
      )} */}
    </SubCategoryContainer>
  );
}
