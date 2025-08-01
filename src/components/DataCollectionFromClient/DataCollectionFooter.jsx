import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterContainer = styled("div")`
  background-color: #000;
  color: #fff;
  padding: 32px 16px;
  text-align: center;
`;

const BrandTitle = styled("div")`
  font-weight: bold;
  font-size: 24px;
  color: #fdd835;
  margin-bottom: 8px;
`;

const Description = styled("p")`
  color: #ccc;
  max-width: 600px;
  margin: 0 auto 16px auto;
`;

const SocialLinks = styled("div")`
  margin: 16px 0;

  a {
    color: #fdd835;
    margin: 0 12px;
    transition: 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const Copyright = styled("p")`
  color: #aaa;
  margin-top: 24px;
`;

export function DataCollectionFooter() {
  return (
    <FooterContainer>
      <BrandTitle>Beauty Brands</BrandTitle>
      <Description>
        A curated listing platform for top-rated salons, spas, skin clinics, and
        wellness centers. Helping businesses grow and customers discover trusted
        services.
      </Description>

      <SocialLinks>
        <a
          href="https://www.instagram.com/p/DMcjlcDtMDE/?igsh=MTNyaTF4Yzk2azhmZA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/share/r/1B6CAcnmaa/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon fontSize="large" />
        </a>
      </SocialLinks>

      <Copyright>
        © {new Date().getFullYear()} Beauty Brands. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
