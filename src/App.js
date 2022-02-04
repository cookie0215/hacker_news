import { ThemeModeProvider } from './context/ThemeContext';
import styled from '@emotion/styled';
import { Global } from '@emotion/react'
import reset from './components/styles/Reset';
import { Routes, Route } from 'react-router-dom';
import { navis } from './routes';
import Header from './components/Header';
import Nav from './components/Nav';
// import Home from './pages/Home';
// import Top from './pages/Top';
// import New from './pages/New';
// import Show from './pages/Show';

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
              {/* <Route path='/' element={<Home />} />
              <Route path='/top' element={<Top />} />
              <Route path='/new' element={<New />} />
              <Route path='/show' element={<Show />} /> */}

            </Routes>
          </Main>
          <Nav />
        </Container>
      </ThemeModeProvider>
    </>
  );
}

export default App;
