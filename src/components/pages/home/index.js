import React, {useEffect, useState} from 'react';
import Menu from '../../Menu';

//import dados_iniciais from '../../../data/dados_iniciais.json';

import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';
import PageDefault from '../../pageDefault';
import '../../../style/style.css';
import categoriasRepository from  '../../../repositories/categoria';

function App() {
  
  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(()=>{
      categoriasRepository.getAllWithVideos()
       .then((categoriasComVideos)=>{
         console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
        console.log(categoriasComVideos);
       })
       .catch((err)=>{
         console.log(err.message);
       })

  }, [])

  return (
    <PageDefault paddingAll={0}>
  
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*<Carousel 
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
      */}

    </PageDefault>
  )
}

export default App;