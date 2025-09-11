import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Character from "./pages/character/Character";
import Characters from "./pages/characters/Characters";
import Episodes from "./pages/episodes/Episodes";
import Locations from "./pages/locations/Locations";
import Main from "./pages/main/Main";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="characters" element={<Characters />} />
        <Route path="character/:id" element={<Character />} />
        <Route path="locations" element={<Locations />} />
      </Route>
    </Route>,
  ),
);
