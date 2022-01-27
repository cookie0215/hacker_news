import { Global, css } from '@emotion/react'
import './App.css';
import reset from './components/styles/Reset';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Header></Header>
    </>
  );
}

export default App;
