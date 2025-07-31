import { styled } from "@mui/material/styles";

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
  margin: 0 auto;
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
        Discover top-rated salons, spas, and wellness studios in your city.
        Empowering beauty professionals through technology.
      </Description>
      <Copyright>
        © {new Date().getFullYear()} Beauty Brands. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
