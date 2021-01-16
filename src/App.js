import React, { useEffect, useReducer, useState } from "react";

import { userReducer } from "./hooks/userReducer";
import { useForm as useFormAdd } from "./hooks/useFormAdd";
import TableUsers from "./components/TableUsers";
import CreateUser from "./components/CreateUser";

const init =
  localStorage.getItem("users") !== null
    ? JSON.parse(localStorage.getItem("users"))
    : [];

const App = () => {
  const [users, dispatch] = useReducer(userReducer, init);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    email: "",
  });

  const [valuesInputs, setValuesInputs] = useState({
    inputName: "",
    inputEmail: "",
  });

  const { handleSubmit, handleChange } = useFormAdd(
    formValues,
    dispatch,
    setFormValues
  );

  return (
    <div className="container mt-5">
      <TableUsers
        users={users}
        valuesInputs={valuesInputs}
        setValuesInputs={setValuesInputs}
        dispatch={dispatch}
      />
      <CreateUser
        formValues={formValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
