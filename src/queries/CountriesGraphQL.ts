import { gql } from "graphql-request";

export const CoutriesGraphQL = gql`
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
}
`