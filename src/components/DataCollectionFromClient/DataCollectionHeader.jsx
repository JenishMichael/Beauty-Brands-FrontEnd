import { styled } from "@mui/material";
import BBLogo from "../../assets/BBLogo.jpg";

const NavbarDiv = styled("div")`
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;

  width: 100%;
  padding: 10px 30px;
`;

const Logo = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandImg = styled("img")`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 10px;
`;

const BrandName = styled("span")`
  color: white;
  font-size: 22px;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, sans-serif;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export function DataCollectionHeader() {
  return (
    <NavbarDiv>
      <Logo>
        <BrandImg src={BBLogo} alt="Logo" />
        <BrandName>Beauty Brands</BrandName>
      </Logo>
    </NavbarDiv>
  );
}
