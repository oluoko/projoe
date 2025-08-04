import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

// const UPDATE_CLIENT = gql`
//     mutation updateClient($id: ID!, name: String!, email: String!, phone: String!) {
//         updateClient(id: $id, name: $name, email: $email, phone: $phone) {
//             id
//             name
//             email
//             phone
//         }
//     }
// `;

export { DELETE_CLIENT };
