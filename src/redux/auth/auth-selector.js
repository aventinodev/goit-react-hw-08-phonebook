export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectAuthError = state => state.auth.error;

export const selectIsRefreshing = state => state.auth.isRefreshing;
