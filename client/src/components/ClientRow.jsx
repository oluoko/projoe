import { FaTrash as TrashIcon } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import UpdateClientModal from "./updateClientModal";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <UpdateClientModal client={client} />
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <TrashIcon />
        </button>
      </td>
    </tr>
  );
}
