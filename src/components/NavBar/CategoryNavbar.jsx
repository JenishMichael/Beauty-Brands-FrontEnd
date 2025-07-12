import { styled } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HairDryerIcon from "@mui/icons-material/DryCleaning"; // For hair styling
import BrushIcon from "@mui/icons-material/Brush"; // For makeup
import HealingIcon from "@mui/icons-material/Healing"; // For skin clinic
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"; // For wellness
import NightlifeIcon from "@mui/icons-material/Nightlife"; // For tattoo

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
  justify-content: center;
  background-color: black;
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
`;

export function CategoryNavbar() {
  const items = [
    {
      id: 1,
      title: "Beauty Salon",
      icon: (
        <FaceRetouchingNaturalIcon sx={{ fontSize: 36, color: "#4b0082" }} />
      ),
    },
    {
      id: 2,
      title: "Spa & Wellness",
      icon: <SpaIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 3,
      title: "Nail Studio",
      icon: <ContentCutIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 4,
      title: "Skin Clinic",
      icon: <HealingIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 5,
      title: "Tattoo Studio",
      icon: <NightlifeIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 6,
      title: "Hair Styling",
      icon: <HairDryerIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 7,
      title: "Makeup Artist",
      icon: <BrushIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 8,
      title: "Henna Design",
      icon: <LocalFloristIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 9,
      title: "Wellness Coach",
      icon: <EmojiEmotionsIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
    {
      id: 10,
      title: "Personal Grooming",
      icon: <EmojiPeopleIcon sx={{ fontSize: 36, color: "#4b0082" }} />,
    },
  ];

  return (
    <ScrollContainer>
      {items.map((item) => (
        <ItemContainer key={item.id}>
          <Circle>{item.icon}</Circle>
          <Title>{item.title}</Title>
        </ItemContainer>
      ))}
    </ScrollContainer>
  );
}
