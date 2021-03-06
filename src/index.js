import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home';
import CadastroVideo from './components/pages/cadastro/video';
import CadastroCategoria from './components/pages/cadastro/categorias';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}  />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={()=>(<div>Pagina 404</div>)} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);