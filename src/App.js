import { ThemeModeProvider } from './context/ThemeContext';
import styled from '@emotion/styled';
import { Global } from '@emotion/react'
import reset from './components/styles/Reset';
import { Routes, Route } from 'react-router-dom';
import { navis } from './routes';
import CommonLayout from './components/UI/CommonLayout';
import Nav from './components/Nav';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgColor};
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <>
      <ThemeModeProvider>
        <Global styles={reset} />
        <Container>
          <Routes>
            {navis.map((navi) => (
              <Route key={navi.name} path={navi.path} element={<CommonLayout>{navi.element}</CommonLayout>} />
            ))}
            <Route path="top/item/:id" element={<Detail />} />
            <Route path="new/item/:id" element={<Detail />} />
            <Route path="show/item/:id" element={<Detail />} />
            <Route path="ask/item/:id" element={<Detail />} />
            <Route path="job/item/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Nav />
        </Container>
      </ThemeModeProvider >
    </>
  );
}

export default App;
