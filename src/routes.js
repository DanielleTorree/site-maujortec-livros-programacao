import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design';
import Catalogo from './components/Catalogo';
import NotFound from './components/NotFound';

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/design" element={<Design />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route element={<NotFound />} />
        </Routes>
    );
}

export default MainRoutes;