import { Container, styled } from "@mui/material";
import { CategoryCard } from "./CategoryCard";

const categories = [
  { title: "Beauty Salons" },
  { title: "Spas" },
  { title: "Skin Clinics" },
  { title: "Nail Studios" },
  { title: "Tattoo Studios" },
  { title: "Grooming" },
  { title: "Makeup Artists" },
  { title: "Mehndi Artists" },
  { title: "Eyelash & Brows" },
  { title: "Barbershops" },
  { title: "Yoga" },
  { title: "Naturopathy" },
];

const Section = styled("section")`
  margin-top: 60px;
  text-align: center;
`;

const Grid = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export function BrowseByCategory() {
  return (
    <Section>
      <Container maxWidth="lg">
        <h2>Browse by Category</h2>
        <Grid>
          {categories.map((category) => (
            <CategoryCard key={category.title} title={category.title} />
          ))}
        </Grid>
      </Container>
      <div style={{ marginTop: "50px" }}></div>
    </Section>
  );
}
