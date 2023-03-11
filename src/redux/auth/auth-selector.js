export const selectIsUserLogged = store => store.auth.isLogged;
export const selectIsUserToken = store => store.auth.token;
export const selectGetUser = store => store.auth.user;

export const selectIsCurrent = store => store.auth.isCurrent;
