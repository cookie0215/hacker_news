import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

const SearchWrap = styled.span``;
const SearchBtn = styled(SearchIcon)`
  path {
    fill: ${({ theme }) => theme.fontColor};
  }
`;

const Search = () => {
  return (
    <SearchWrap>
      <SearchBtn />
    </SearchWrap>
  );
};

export default Search;