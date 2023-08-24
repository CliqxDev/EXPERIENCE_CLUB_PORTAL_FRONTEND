export const TOKEN_KEY = 'TOKEN_EXP_CLUB';
export const TOKEN_PROVISORY_KEY = 'TOKEN_PROVISORY_KEY';

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

export const getProvisoryToken = () =>
  window.localStorage.getItem(TOKEN_PROVISORY_KEY);

export const setProvisoryToken = (token: string) =>
  window.localStorage.setItem(TOKEN_PROVISORY_KEY, token);

export const deleteProvisoryToken = () =>
  window.localStorage.removeItem(TOKEN_PROVISORY_KEY);
