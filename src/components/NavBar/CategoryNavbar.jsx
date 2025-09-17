// CategoryNavbar.jsx
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HairDryerIcon from "@mui/icons-material/DryCleaning";
import BrushIcon from "@mui/icons-material/Brush";
import HealingIcon from "@mui/icons-material/Healing";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import axios from "axios";
import { FilteredSubCategory } from "../Product/FilterSubCategory";

const ScrollContainer = styled("div")`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 10px 30px;
  background-color: black;
  justify-content: flex-start;
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const ItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: black;
  cursor: pointer;
  width: 250px;
`;

const Circle = styled("div")`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 85px;
    height: 85px;
  }
`;

const Title = styled("div")`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  text-align: center;
  word-wrap: break-word; /* wraps long titles to next line */
`;

const SubCategoryContainer = styled("div")`
  padding: 20px 30px;
  background-color: #f2f2f2;
`;

const SubCategoryTitle = styled("h3")`
  font-size: 20px;
  color: #4b0082;
`;

const SubCategoryList = styled("ul")`
  list-style: none;
  padding: 0;
`;

const SubCategoryItem = styled("li")`
  font-size: 16px;
  margin-bottom: 6px;
  color: #444;
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

export function CategoryNavbar() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/categories/active`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/subCategories/active`)
      .then((res) => setSubCategories(res.data))
      .catch((err) => console.log("Error fetching subCategories:", err));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredSubCategories(
        subCategories.filter(
          (sub) => sub.categoryId === selectedCategory.categoryId
        )
      );
    } else {
      setFilteredSubCategories([]);
    }
  }, [selectedCategory, subCategories]);

  const categoryIcons = {
    "Beauty Salon": (
      <FaceRetouchingNaturalIcon sx={{ fontSize: 36, color: "#4b0082" }} />
    ),
    "Spa & Wellness": <SpaIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    "Nail Studio": <ContentCutIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    "Skin Clinic": <HealingIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    "Tattoo Studio": <NightlifeIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    "Hair Styling": <HairDryerIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    "Makeup Artist": <BrushIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    "Henna Design": (
      <LocalFloristIcon sx={{ fontSize: 36, color: "#4b0082" }} />
    ),
    "Wellness Coach": (
      <EmojiEmotionsIcon sx={{ fontSize: 36, color: "#4b0082" }} />
    ),
    "Personal Grooming": (
      <EmojiPeopleIcon sx={{ fontSize: 36, color: "#4b0082" }} />
    ),
  };

  const handleCategoryClick = (item) => {
    setSelectedCategory((prev) =>
      prev?.categoryId === item.categoryId ? null : item
    );
  };

  return (
    <>
      <ScrollContainer>
        {categories.map((item) => (
          <ItemContainer
            key={item.categoryId}
            onClick={() => handleCategoryClick(item)}
          >
            <Circle>
              {categoryIcons[item.categoryName] || (
                <FaceRetouchingNaturalIcon
                  sx={{ fontSize: 36, color: "#4b0082" }}
                />
              )}
            </Circle>
            <Title>{item.categoryName}</Title>
          </ItemContainer>
        ))}
      </ScrollContainer>

      {/* Pass filteredSubCategories to FilterComponent */}
      <FilteredSubCategory
        subCategories={filteredSubCategories}
        selectedCategory={selectedCategory}
      />
    </>
  );
}
