import React from "react";

const CreateUser = ({ handleSubmit, handleChange, formValues }) => {
  const { name, email } = formValues;
  return (
    <div>
      <h2>Crear usuario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          className="form-control mt-2"
          onChange={handleChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          name="email"
          className="form-control mt-2"
          onChange={handleChange}
          value={email}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
