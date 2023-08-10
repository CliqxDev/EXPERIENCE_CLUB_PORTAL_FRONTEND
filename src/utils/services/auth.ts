export const TOKEN_KEY = 'TOKEN_EXP_CLUB';

type TokenType = {
  access?: string;
  refresh?: string;
};

export const isAuthenticated = () =>
  typeof window !== 'undefined' && !!window.localStorage.getItem(TOKEN_KEY);

export const getToken = () => {
  let token: TokenType = {};
  const localStorageUser =
    (typeof window !== 'undefined' && window.localStorage.getItem(TOKEN_KEY)) ||
    null;
  if (localStorageUser !== null) {
    token = JSON.parse(localStorageUser);
  }
  return token;
};

export const login = (token: TokenType) =>
  typeof window !== 'undefined' &&
  window.localStorage.setItem(
    TOKEN_KEY,
    JSON.stringify({
      access: token.access,
      refresh: token.refresh
    })
  );

export const logout = () =>
  typeof window !== 'undefined' && window.localStorage.removeItem(TOKEN_KEY);
