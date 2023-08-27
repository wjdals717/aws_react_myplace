import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import * as S from "./styles/common";
import MainLayout from './components/MainLayout/MainLayout';

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon}/>
      <MainLayout />
    </>
  );
}

export default App;
