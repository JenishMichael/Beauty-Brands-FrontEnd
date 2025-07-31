import { styled } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Cancel, Phone, PhoneAndroidOutlined } from "@mui/icons-material";
import BBLogo from "../../assets/BBLogo.jpg";
import { SearchBar } from "./SearchBar";
import { CategoryNavbar } from "./CategoryNavbar";
import { useNavigate } from "react-router-dom";

// const DesktopView = styled("div")`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

const DesktopView = styled("div")`
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileView = styled("div")`
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavbarDiv = styled("div")`
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
  }
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

const SearchBarAndContact = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

const ContactButton = styled("button")`
  background-color: #4b0082;
  color: white;
  box-shadow: 0 4px 8px rgba(75, 0, 130, 0.4);
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #37006b;
    transform: scale(1.05);
  }
`;

// const MobileView = styled("div")`
//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

const FirstRow = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondRow = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 2px;
`;

const MobileMenuDrawer = styled("div")`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background-color: #121212; /* Dark blackish background */
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  z-index: 1100;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.7);
  overflow-y: auto;

  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }

  .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: white;
  }
`;

const DrawerBtn = styled("button")`
  color: white;
  background-color: transparent;
  border: 2px solid white;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: white;
    color: #121212;
    transform: scale(1.05);
  }
`;

export function Navbar({ searchQuery, setSearchQuery }) {
  const navigate = useNavigate();
  const handleClickForContact = () => navigate("/contact");

  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen((prev) => !prev);

  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Desktop */}
      <DesktopView>
        <NavbarDiv>
          <Logo>
            <BrandImg src={BBLogo} alt="Logo" />
            <BrandName>Beauty Brands</BrandName>
          </Logo>
          <SearchBarAndContact>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <ContactButton onClick={handleClickForContact}>
              Contact Us
            </ContactButton>
          </SearchBarAndContact>
        </NavbarDiv>
      </DesktopView>

      {/* Mobile */}
      <MobileView>
        <NavbarDiv ref={menuRef}>
          <FirstRow>
            <Logo>
              <BrandImg src={BBLogo} alt="Logo" />
              <BrandName>Beauty Brands</BrandName>
            </Logo>
            <button
              onClick={handleToggle}
              style={{ background: "none", border: "none" }}
            >
              {menuOpen ? (
                <Cancel style={{ color: "white" }} />
              ) : (
                <MenuIcon style={{ color: "white" }} />
              )}
            </button>
          </FirstRow>
          <SecondRow>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </SecondRow>
          {menuOpen && (
            <MobileMenuDrawer>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Cancel
                  onClick={handleToggle}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </div>
              <DrawerBtn
                onClick={() => {
                  handleClickForContact();
                  handleToggle();
                }}
              >
                Contact Us
              </DrawerBtn>
            </MobileMenuDrawer>
          )}
        </NavbarDiv>
      </MobileView>
    </>
  );
}
