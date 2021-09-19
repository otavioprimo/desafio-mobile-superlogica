import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://rickandmortyapi.com/graphql';
const client = new GraphQLClient(endpoint);

export interface FilterOptions {
    name?: String
    status?: String
    species?: String
    type?: String
    gender?: String
}

export interface SearchOptions {
    page?: Number
    filter?: FilterOptions
}

export type ID = String;

export async function getCharacters({ page = 1 }: SearchOptions) {

    const query = gql`
        query getCharacters($page: Int!) {
            characters(page: $page) {
                results {
                    id
                    name
                    origin {
                        name
                    }
                    location {
                        name
                    }
                    image
                    episode {
                        name
                    }
                }
                info {
                    next
                }
            }
        }
    `;
    
    const variables = {
        page
    };

    return await client.request(query, variables);
}

export async function getCharactersByName(name: '') {
    
    const query = gql`
        query getCharactersFilteredByName($name: String!) {
            characters(filter: { name: $name }) {
                results {
                    id
                    name
                    origin {
                        name
                    }
                    location {
                        name
                    }
                    image
                    episode {
                        name
                    }
                }
            }
        }
    `;

    const variables = {
        name,
    }
  

    const data = await client.request(query, variables);

    return data;
}

export async function getCharactersByIds(ids) {
    
    const query = gql`
        query characters($ids: [ID!]!){
            charactersByIds(ids: $ids){
                id
                name
                origin {
                    name
                }
                location {
                    name
                }
                image
                episode {
                    name
                }
            }
        }
    `;

    const variables = {
        ids,
    }
  

    const data = await client.request(query, variables);

    return data;
}