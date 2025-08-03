import { styled } from "@mui/material";

const LoadingContainer = styled("div")({
  minHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  backgroundColor: "#f8f8f8",
});

const Spinner = styled("div")({
  border: "6px solid #e0e0e0",
  borderTop: "6px solid #4b0082",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  animation: "spin 1s linear infinite",
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

const Message = styled("div")({
  paddingLeft: "20px",
  paddingRight: "20px",
  fontSize: "17.6px",
  color: "#333",
  textAlign: "center",
});

export function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <Message>Please wait a moment while we load the content...</Message>
    </LoadingContainer>
  );
}
