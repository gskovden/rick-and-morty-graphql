import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import * as Types from "../../types/base-types";
const defaultOptions = {} as const;
export type GetCharacterQueryVariables = Types.Exact<{
  characterId: Types.Scalars["ID"]["input"];
}>;

export type GetCharacterQuery = {
  __typename?: "Query";
  character?: {
    __typename?: "Character";
    created?: string | null;
    gender?: string | null;
    id?: string | null;
    image?: string | null;
    name?: string | null;
    species?: string | null;
    status?: string | null;
    type?: string | null;
    location?: {
      __typename?: "Location";
      created?: string | null;
      dimension?: string | null;
      id?: string | null;
      name?: string | null;
      type?: string | null;
    } | null;
    episode: Array<{
      __typename?: "Episode";
      air_date?: string | null;
      created?: string | null;
      episode?: string | null;
      id?: string | null;
      name?: string | null;
    } | null>;
    origin?: {
      __typename?: "Location";
      created?: string | null;
      dimension?: string | null;
      id?: string | null;
      name?: string | null;
      type?: string | null;
    } | null;
  } | null;
};

export const GetCharacterDocument = gql`
  query getCharacter($characterId: ID!) {
    character(id: $characterId) {
      created
      gender
      id
      image
      name
      species
      status
      type
      location {
        created
        dimension
        id
        name
        type
      }
      episode {
        air_date
        created
        episode
        id
        name
      }
      origin {
        created
        dimension
        id
        name
        type
      }
    }
  }
`;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useGetCharacterQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  > &
    (
      | { variables: GetCharacterQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options,
  );
}
export function useGetCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options,
  );
}
export function useGetCharacterSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCharacterQuery,
        GetCharacterQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options,
  );
}
export type GetCharacterQueryHookResult = ReturnType<
  typeof useGetCharacterQuery
>;
export type GetCharacterLazyQueryHookResult = ReturnType<
  typeof useGetCharacterLazyQuery
>;
export type GetCharacterSuspenseQueryHookResult = ReturnType<
  typeof useGetCharacterSuspenseQuery
>;
export type GetCharacterQueryResult = Apollo.QueryResult<
  GetCharacterQuery,
  GetCharacterQueryVariables
>;
