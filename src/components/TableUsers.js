import React from "react";

import { useInputsUpdate } from "../hooks/useInputsUpdate";

const TableUsers = ({ users, valuesInputs, setValuesInputs, dispatch }) => {
  const {
    idCurrent,
    edit,
    handleDelete,
    handleEdit,
    handleUpdate,
    handleChangeEdit,
  } = useInputsUpdate(valuesInputs, setValuesInputs, dispatch);

  return (
    <>
      <h1>CRUD usuarios localstorage</h1>
      <hr />
      <h2>Lista de usuarios</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {edit && user.id === idCurrent ? (
                    <input
                      type="text"
                      onChange={handleChangeEdit}
                      name="inputName"
                      defaultValue={user.name}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {edit && user.id === idCurrent ? (
                    <input
                      type="text"
                      name="inputEmail"
                      onChange={handleChangeEdit}
                      defaultValue={user.email}
                    />
                  ) : (
                    user.email
                  )}
                </td>

                <td>
                  <button
                    disabled={false}
                    onClick={
                      edit && user.id === idCurrent
                        ? () => handleUpdate(user)
                        : () => handleEdit(user.id)
                    }
                    className={
                      edit && user.id === idCurrent
                        ? "btn btn-success"
                        : "btn btn-warning"
                    }
                  >
                    {edit && user.id === idCurrent ? "Actualizar" : "Editar"}
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableUsers;
