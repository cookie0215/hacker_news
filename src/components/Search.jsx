import styled from '@emotion/styled';

const SearchWrap = styled.span`

`;

const Search = () => {
  return (
    <SearchWrap>
      <img src={require('../assets/search.svg').default} alt="검색" />
    </SearchWrap>
  );
};

export default Search;