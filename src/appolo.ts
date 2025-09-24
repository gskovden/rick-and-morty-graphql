import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";

import {
  GetCharactersDocument,
  GetCharactersQuery,
} from "./pages/characters/characters.generated";

const httpLink = new HttpLink({ uri: "https://rickandmortyapi.com/graphql" });

let nextLocalId = 100000;

const mockCreateLink = new ApolloLink((operation, forward) => {
  if (operation.operationName === "CreateCharacter") {
    return new Observable((observer) => {
      const { input } = operation.variables as { input: any };
      const fallbackImage = `${import.meta.env.BASE_URL}fake-character.webp`;
      // «Создаём» персонажа
      const newCharacter = {
        __typename: "Character",
        id: String(nextLocalId++),
        name: input.name,
        status: input.status,
        species: input.species,
        type: input.type ?? "",
        gender: input.gender,
        image: input.image ?? fallbackImage,
        created: new Date().toISOString(),
      };

      // Пишем в кеш список персонажей для запроса GetCharacters
      const cache = operation.getContext().cache as InMemoryCache;
      const prev = cache.readQuery<GetCharactersQuery>({
        query: GetCharactersDocument,
      });

      const prevResults = prev?.characters?.results ?? [];

      cache.writeQuery<GetCharactersQuery>({
        query: GetCharactersDocument,
        data: {
          characters: {
            __typename: "Characters",
            results: [newCharacter, ...(prevResults as any[])],
          },
        },
      });

      // Возвращаем «ответ сервера»
      setTimeout(() => {
        observer.next({
          data: {
            createCharacter: {
              __typename: "CreateCharacterPayload",
              character: newCharacter,
              success: true,
              message: "Character created successfully",
            },
          },
        });
        observer.complete();
      }, 600);
    });
  }

  // всё остальное — на реальный API
  return forward(operation);
});

export const client = new ApolloClient({
  link: ApolloLink.from([mockCreateLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Character: { keyFields: ["id"] },
      Query: {
        fields: {
          characters: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});
