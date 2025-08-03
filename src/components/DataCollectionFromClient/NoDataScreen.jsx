import { styled } from "@mui/material";

const Container = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff9f9",
  padding: "32px", // 2rem = 32px
});

const Title = styled("div")({
  fontSize: "24px", // 1.5rem = 24px
  color: "#cc0000",
  marginBottom: "16px", // 1rem
  textAlign: "center",
});

const Description = styled("p")({
  paddingLeft: "20px",
  paddingRight: "20px",
  color: "#555",
  fontSize: "16px", // 1rem
  marginBottom: "24px", // 1.5rem
  textAlign: "center",
});

const RetryButton = styled("button")({
  padding: "10px 24px",
  fontSize: "16px",
  color: "#fff",
  backgroundColor: "#4b0082",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(75, 0, 130, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#37006b",
    transform: "scale(1.03)",
  },
});

export function NoDataScreen() {
  return (
    <Container>
      <Title>No category or subcategory data available</Title>
      <Description>
        It looks like there's no data to show right now. Please try again later.
      </Description>
      <RetryButton onClick={() => window.location.reload()}>Retry</RetryButton>
    </Container>
  );
}
