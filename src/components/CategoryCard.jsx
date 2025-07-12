import { styled } from "@mui/material";

const Card = styled("div")`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 160px;

  &:hover {
    transform: scale(1.05);
    background-color: #f8f6ff;
  }
`;

export function CategoryCard({ icon, title }) {
  return (
    <>
      <Card>
        <div>{title}</div>
      </Card>
    </>
  );
}
