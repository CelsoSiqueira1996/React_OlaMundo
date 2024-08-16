import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { SobreMim } from "./components/pages/SobreMim";
import { Inicio } from "./components/pages/Inicio";
import { Rodape } from "components/Rodape";
import { DefaultLayout } from "components/DefaultLayout";
import { Post } from "components/pages/Post";
import { NaoEncontrada } from "components/pages/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
