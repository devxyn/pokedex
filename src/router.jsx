import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import fetchPokemon from "./loader/fetchPokemon";

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
      },
    ],
  },
]);

export default router;
