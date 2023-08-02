export const TOKEN_KEY = 'TOKEN_EXP_CLUB';

type TokenType = {
  access?: string;
  refresh?: string;
};

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);

export const getToken = () => {
  let token: TokenType = {};
  const localStorageUser = localStorage.getItem(TOKEN_KEY);
  if (localStorageUser !== null) {
    token = JSON.parse(localStorageUser);
  }
  return token;
};

export const login = (token: TokenType) =>
  localStorage.setItem(
    TOKEN_KEY,
    JSON.stringify({
      access: token.access,
      refresh: token.refresh
    })
  );

export const logout = () => localStorage.removeItem(TOKEN_KEY);
