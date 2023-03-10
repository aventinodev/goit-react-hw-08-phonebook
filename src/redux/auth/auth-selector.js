export const selectIsUserLogged = store => store.auth.isLogged;
export const selectGetUser = store => store.auth.user;
export const selectGetAuth = store => {
  const { isLogged, token } = store.auth;
  return { isLogged, token };
};
