import { Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const Container = styled("div")`
  width: 300px;
  height: 35px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0px 10px;

  @media (max-width: 500px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Search = styled(SearchIcon)``;

const Input = styled("input")`
  flex: 1;
  padding: 0px 5px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
`;

const Cancel = styled(CancelIcon)`
  cursor: pointer;
`;

export function SearchBar({ searchQuery, setSearchQuery }) {
  console.log(`Searh Query value: ${searchQuery}`);
  return (
    <>
      <Container>
        <Search />
        <Input
          height=""
          placeholder="Search Here"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        {searchQuery && <Cancel onClick={() => setSearchQuery("")} />}
      </Container>
    </>
  );
}
