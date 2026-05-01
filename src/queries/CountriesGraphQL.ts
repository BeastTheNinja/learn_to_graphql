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
    emoji
    continent {
      name
    }
  }
  continents {
    code
    name
    countries {
      continent {
        name
      }
      currency
      emoji
      languages {
        name
      }
      name
      phone
    }
  }
}
`;