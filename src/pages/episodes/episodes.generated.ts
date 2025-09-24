import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import * as Types from "../../types/base-types";
const defaultOptions = {} as const;
export type GetEpisodesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetEpisodesQuery = {
  __typename?: "Query";
  episodes?: {
    __typename?: "Episodes";
    results?: Array<{
      __typename?: "Episode";
      air_date?: string | null;
      created?: string | null;
      episode?: string | null;
      id?: string | null;
      name?: string | null;
    } | null> | null;
  } | null;
};

export const GetEpisodesDocument = gql`
  query GetEpisodes {
    episodes {
      results {
        air_date
        created
        episode
        id
        name
      }
    }
  }
`;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options,
  );
}
export function useGetEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options,
  );
}
export function useGetEpisodesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetEpisodesQuery,
        GetEpisodesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options,
  );
}
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<
  typeof useGetEpisodesLazyQuery
>;
export type GetEpisodesSuspenseQueryHookResult = ReturnType<
  typeof useGetEpisodesSuspenseQuery
>;
export type GetEpisodesQueryResult = Apollo.QueryResult<
  GetEpisodesQuery,
  GetEpisodesQueryVariables
>;
