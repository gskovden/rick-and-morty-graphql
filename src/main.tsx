import "./index.css";

import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { client } from "./appolo";

// const client = new ApolloClient({
//   uri: "https://rickandmortyapi.com/graphql",
//   cache: new InMemoryCache(),
// });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
