export const actionType = {
  SET_AUTH: "SET_AUTH",
};

export const setAuthAction = (isAuth) => {
  return {
    type: actionType.SET_AUTH,
    payload: isAuth,
  };
};
