import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import * as Types from "../../types/base-types";
const defaultOptions = {} as const;
export type CreateCharacterMutationVariables = Types.Exact<{
  input: Types.CreateCharacterInput;
}>;

export type CreateCharacterMutation = {
  __typename?: "Mutation";
  createCharacter: {
    __typename?: "CreateCharacterPayload";
    success: boolean;
    message?: string | null;
    character: {
      __typename?: "Character";
      id?: string | null;
      name?: string | null;
      status?: string | null;
      species?: string | null;
      type?: string | null;
      gender?: string | null;
      image?: string | null;
      created?: string | null;
    };
  };
};

export const CreateCharacterDocument = gql`
  mutation CreateCharacter($input: CreateCharacterInput!) {
    createCharacter(input: $input) {
      character {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
      success
      message
    }
  }
`;
export type CreateCharacterMutationFn = Apollo.MutationFunction<
  CreateCharacterMutation,
  CreateCharacterMutationVariables
>;

/**
 * __useCreateCharacterMutation__
 *
 * To run a mutation, you first call `useCreateCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacterMutation, { data, loading, error }] = useCreateCharacterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCharacterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCharacterMutation,
    CreateCharacterMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCharacterMutation,
    CreateCharacterMutationVariables
  >(CreateCharacterDocument, options);
}
export type CreateCharacterMutationHookResult = ReturnType<
  typeof useCreateCharacterMutation
>;
export type CreateCharacterMutationResult =
  Apollo.MutationResult<CreateCharacterMutation>;
export type CreateCharacterMutationOptions = Apollo.BaseMutationOptions<
  CreateCharacterMutation,
  CreateCharacterMutationVariables
>;
