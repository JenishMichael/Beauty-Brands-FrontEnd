// Loading.jsx
import { styled } from "@mui/material";

const LoaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const Spinner = styled("div")`
  border: 6px solid #f3f3f3; /* Light gray */
  border-top: 6px solid #4b0082; /* Purple */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function Loading() {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
}
