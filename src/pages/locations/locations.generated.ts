import * as Types from '../../types/base-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLocationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = { locations?: { results?: Array<{ created?: string | null, dimension?: string | null, id?: string | null, name?: string | null, type?: string | null, residents: Array<{ created?: string | null, gender?: string | null, id?: string | null, image?: string | null, name?: string | null, species?: string | null, status?: string | null, type?: string | null } | null> } | null> | null } | null };


export const GetLocationsDocument = gql`
    query GetLocations {
  locations {
    results {
      created
      dimension
      id
      name
      type
      residents {
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
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export function useGetLocationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsSuspenseQueryHookResult = ReturnType<typeof useGetLocationsSuspenseQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;