export const actionType = {
  SET_AUTH: "SET_AUTH",
};

export const setAuthAction = (params) => {
  return {
    type: actionType.SET_AUTH,
    payload: params,
  };
};
