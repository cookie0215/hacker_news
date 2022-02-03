import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react'
import reset from './components/styles/Reset';

import { navis } from './routes';

import Header from './components/Header';
import Nav from './components/Nav';
import { ThemeModeProvider } from './context/ThemeContext';

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
  return (
    <>
      <ThemeModeProvider>
        <Global styles={reset} />
        <Container>
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
      </ThemeModeProvider>
    </>
  );
}

export default App;
