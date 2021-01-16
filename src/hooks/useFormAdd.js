export const useForm = (formValues, dispatch, setFormValues) => {
  const { name, email } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() <= 1) {
      return;
    }
    if (email.trim() <= 1) {
      return;
    }
    dispatch({
      type: "add",
      payload: formValues,
    });
    reset();
  };

  const reset = () => {
    setFormValues({ name: "", email: "" });
  };

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      id: new Date().getTime(),
      [target.name]: target.value,
    });
  };
  return { handleSubmit, reset, handleChange };
};
