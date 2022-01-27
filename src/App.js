import { Global, css } from '@emotion/react'
import styled from '@emotion/styled';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Top from './components/Top';
import reset from './components/styles/Reset';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: pink;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Global styles={reset} />
      <Container>
        <Header />
        <main>
          <Home />
          <Top />
        </main>
        <Nav />
      </Container>
    </>
  );
}

export default App;
