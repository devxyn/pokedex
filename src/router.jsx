import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import fetchPokemon from "./loader/fetchPokemon";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Pokedex />,
      },
      {
        path: "pokemon/:name",
        element: <Pokemon />,
        loader: fetchPokemon,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
