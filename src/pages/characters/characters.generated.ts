import * as Types from '../../types/base-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCharactersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCharactersQuery = { characters?: { results?: Array<{ created?: string | null, gender?: string | null, id?: string | null, image?: string | null, name?: string | null, species?: string | null, status?: string | null, type?: string | null } | null> | null } | null };


export const GetCharactersDocument = gql`
    query GetCharacters {
  characters {
    results {
      created
      gender
      id
      image
      name
      species
      status
      type
    }
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export function useGetCharactersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersSuspenseQueryHookResult = ReturnType<typeof useGetCharactersSuspenseQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;