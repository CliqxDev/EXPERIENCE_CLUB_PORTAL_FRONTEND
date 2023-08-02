export const TOKEN_KEY = 'TOKEN_EXP_CLUB';

type TokenType = {
  access: string;
  refresh:string;
}

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);

export const getToken = () => {
  const localStorageUser = localStorage.getItem(TOKEN_KEY)
  if (localStorageUser !== null) {
   const  token:TokenType = JSON.parse(localStorageUser);
   return token;
  }
  return {}
};

export const login = (token: TokenType) => localStorage.setItem(TOKEN_KEY,  JSON.stringify({
  access: token.access,
  refresh: token.refresh
}));

export const logout = () => localStorage.removeItem(TOKEN_KEY);
