import { useContext } from 'react';
import { Global } from '@emotion/react'
import styled from '@emotion/styled';
import reset from './components/styles/Reset';
import { Routes, Route } from 'react-router-dom';

import { navis } from './routes';

import Header from './components/Header';
import Nav from './components/Nav';
import ThemeContext from './context/ThemeContext';



const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgColor};
  margin: 0 auto;
  /* overflow: hidden; */
  position: relative;
`;

const Main = styled.main`
  width: 100%;
  padding-top: 56px;
  padding-bottom: 78px;
  /* border: 5px solid green; */
`;

function App() {
  const [theme] = useContext(ThemeContext);
  return (
    <>
      <Global styles={reset} />
      <Container theme={theme}>
        <Header />
        <Main>
          <Routes>
            {navis.map((navi) => (
              <Route key={navi.name} path={navi.path} element={navi.element} />
            ))}
          </Routes>
        </Main>
        <Nav />
      </Container>
    </>
  );
}

export default App;
