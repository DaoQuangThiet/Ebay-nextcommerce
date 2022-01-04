import { gql } from "@apollo/client";

export const GET_SEARCH_RESULTS = gql`
    query GET_SEARCH_RESULTS( $first: Int, $query: String){
        products: products(first: $first, where: {search: $query}) {
            nodes {
                id
                databaseId
                name
                description
                slug
                image {
                  uri
                  srcSet
                  sourceUrl
                }
                ... on SimpleProduct {
                  price
                  regularPrice
                  salePrice
                }
                ... on VariableProduct {
                  price
                  regularPrice
                  salePrice
                  variations {
                    nodes {
                      price
                    }
                  }
                }
              }
    }
`;

export const GET_SEARCH_RESULTS_WITH_TOTAL_PAGES = gql`
    query GET_SEARCH_RESULTS( $first: Int, $query: String){
        products: products(first: $first, where: {search: $query}) {
            nodes {
                id
                databaseId
                name
                description
                slug
                image {
                  uri
                  srcSet
                  sourceUrl
                }
                ... on SimpleProduct {
                  price
                  regularPrice
                  salePrice
                }
                ... on VariableProduct {
                  price
                  regularPrice
                  salePrice
                  variations {
                    nodes {
                      price
                    }
                  }
                }
              }
    }
`;