import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Styled Components

const Wrapper = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6fff6;
  padding: 32px;
`;

const Message = styled("div")`
  font-size: 24px;
  color: #006400;
  margin-bottom: 16px;
  text-align: center;
`;

const SubMessage = styled("p")`
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
`;

const RetryButton = styled("button")`
  padding: 10px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #4b0082;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(75, 0, 130, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #37006b;
    transform: scale(1.05);
  }
`;

export function DetailsSaved() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Message>✅ Your details have been successfully saved!</Message>
      <SubMessage>Thank you for your submission.</SubMessage>
      <RetryButton onClick={() => navigate("/")}>Fill Another Form</RetryButton>
    </Wrapper>
  );
}
