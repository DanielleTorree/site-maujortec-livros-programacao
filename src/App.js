import React from "react";
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
import { connect } from 'react-redux';

const App = (props) => {

  console.log(props.livro)

  return (
    <BrowserRouter>
      <Topo />
      <Switch>
        <Route exact path="/" render={() => <Home livros={props.livro}/>}/>
        <Route exact path="/frontend" render={() => <Frontend livros={props.livro}/>} />
        <Route exact path="/programacao" render={() => <Programacao livros={props.livro}/>} />
        <Route exact path="/design" render={() => <Design livros={props.livro}/>} />
        <Route exact path="/catalogo" render={() => <Catalogo livros={props.livro}/>} />
        <Route exact path="/livro/:livroSlug" render={({ match }) =>{
            const livro = props.livro.find(
              livro => livro.slug === match.params.livroSlug);
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

const mapStateToProps = (state) => ({
  livro: state.field.livro
})

export default connect(mapStateToProps, null)(App);