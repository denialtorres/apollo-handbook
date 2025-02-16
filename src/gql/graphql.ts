/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */

export type AllBooksWithTitleQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type AllBooksWithTitleQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string }> };


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
};


export type MutationCreateBookArgs = {
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  booksWithTitle: Array<Book>;
  user: UserResult;
};


export type QueryBooksWithTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type SuspendedUser = {
  __typename?: 'SuspendedUser';
  id: Scalars['ID']['output'];
  suspensionReason: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserResult = SuspendedUser | User;


export const AllBooksWithTitleDocument = gql`
    query allBooksWithTitle($title: String!) {
  books: booksWithTitle(title: $title) {
    id
    title
  }
}
    `;

/**
 * __useAllBooksWithTitleQuery__
 *
 * To run a query within a React component, call `useAllBooksWithTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBooksWithTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBooksWithTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAllBooksWithTitleQuery(baseOptions: Apollo.QueryHookOptions<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables> & ({ variables: AllBooksWithTitleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>(AllBooksWithTitleDocument, options);
      }
export function useAllBooksWithTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>(AllBooksWithTitleDocument, options);
        }
export function useAllBooksWithTitleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>(AllBooksWithTitleDocument, options);
        }
export type AllBooksWithTitleQueryHookResult = ReturnType<typeof useAllBooksWithTitleQuery>;
export type AllBooksWithTitleLazyQueryHookResult = ReturnType<typeof useAllBooksWithTitleLazyQuery>;
export type AllBooksWithTitleSuspenseQueryHookResult = ReturnType<typeof useAllBooksWithTitleSuspenseQuery>;
export type AllBooksWithTitleQueryResult = Apollo.QueryResult<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>;