import { gql } from "graphql-request";

export const CountriesGraphQL = gql`
 query Countries {
  countries {
    currency
    name
    phone
    languages {
      name
    }
    continent {
      name
    }
    emoji
  }
}
`;