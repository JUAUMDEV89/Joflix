import React from 'react';
import Menu from '../../Menu';

import dados_iniciais from '../../../data/dados_iniciais.json';

import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';

import '../../../style/style.css';

function App() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        video_description={"Video Super Intuitivo"}
      />

      <Carousel 
        ingnoreFirstVideo
        category={dados_iniciais.categorias[0]}
      />

      <Carousel 
        category={dados_iniciais.categorias[1]}
      />

      <Carousel 
        category={dados_iniciais.categorias[2]}
      />

      <Carousel 
        category={dados_iniciais.categorias[3]}
      />

      <Carousel 
        category={dados_iniciais.categorias[4]}
      />

      <Footer />

    </>
  );
}

export default App;
