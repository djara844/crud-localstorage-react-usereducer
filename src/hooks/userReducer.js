export const userReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((user) => user.id !== action.payload);
    case "update":
      return state.map((user) =>
        user.id === action.payload.id
          ? {
              id: user.id,
              name:
                action.payload.inputName === ""
                  ? user.name
                  : action.payload.inputName,
              email:
                action.payload.inputEmail === ""
                  ? user.email
                  : action.payload.inputEmail,
            }
          : user
      );
    default:
      return state;
  }
};
