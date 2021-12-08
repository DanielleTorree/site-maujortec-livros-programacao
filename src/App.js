import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Home livros={livros}/>} />
        <Route path="/frontend" element={<Frontend livros={livros}/>} />
        <Route path="/programacao" element={<Programacao livros={livros}/>} />
        <Route path="/design" element={<Design livros={livros}/>} />
        <Route path="/catalogo" element={<Catalogo livros={livros}/>} />
        <Route path="/livro/:livroSlug" element={<Livro livro={livros} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;

