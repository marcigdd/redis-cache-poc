

import {gql} from 'apollo-server-micro';




export const typeDefs = gql `
 type TeamMember {
  id: String
  title: String
  name: String
  weakness: String
 }

type Query {
  teamMembers: [TeamMember]!
}
`;
