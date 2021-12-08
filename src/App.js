import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import "./index.css";
import Livro from "./components/Livro";
import detalhesLivro from './api/todosOsLivros.json';

const App = () => {

  const [livros, setLivros] = useState([]);

  const carregarLivros = () => {
    setLivros(detalhesLivro);
  }

  useEffect(() => {
    carregarLivros();
  }, [])

  return (
    <BrowserRouter>
      <Topo />
      <Switch>
        <Route exact path="/" render={() => <Home livros={livros}/>}/>
        <Route exact path="/frontend" render={() => <Frontend livros={livros}/>} />
        <Route exact path="/programacao" render={() => <Programacao livros={livros}/>} />
        <Route exact path="/design" render={() => <Design livros={livros}/>} />
        <Route exact path="/catalogo" render={() => <Catalogo livros={livros}/>} />
        <Route exact path="/livro/:livroSlug" render={(props) =>{
            const livro = livros.find(
              livro => livro.slug === props.match.params.livroSlug);
              console.log(props)
              if(livro) return <Livro livro={livro}/>;
              return <NotFound />
          }} 
        />
        <Route path="*" render={() =><NotFound />} />
      </Switch>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;

