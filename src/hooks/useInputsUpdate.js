import { useState } from "react";

export const useInputsUpdate = (valuesInputs, setValuesInputs, dispatch) => {
  const { inputName, inputEmail } = valuesInputs;
  const [edit, setEdit] = useState(false);
  const [idCurrent, setIdCurrent] = useState(null);
  const handleDelete = (userId) => {
    dispatch({ type: "delete", payload: userId });
    setEdit(!edit);
  };
  const handleEdit = (userId) => {
    if (edit === false) {
      setIdCurrent(userId);
      setEdit(!edit);
    }
  };
  const reset = () => {
    setValuesInputs({
      inputEmail: "",
      inputName: "",
    });
  };
  const handleUpdate = (user) => {
    dispatch({
      type: "update",
      payload: { id: user.id, inputName, inputEmail },
    });
    setEdit(!edit);
    reset();
  };

  const handleChangeEdit = ({ target }) => {
    setValuesInputs({
      ...valuesInputs,
      [target.name]: target.value,
    });
  };
  return {
    idCurrent,
    edit,
    handleDelete,
    handleEdit,
    handleUpdate,
    handleChangeEdit,
  };
};
