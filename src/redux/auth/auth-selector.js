export const selectIsUserLogged = store => store.auth.isLogged;
export const selectIsUserToken = store => store.auth.token;
export const selectGetUser = store => store.auth.user;
export const selectGetAuth = store => {
  const { isLogged, token } = store.auth;

  return { isLogged, token };
};
