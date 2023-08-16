import { getToken, logout } from 'utils/services/auth';

const getBaseUrl = (baseUrl?: string) => baseUrl || process.env.API_HOST;

export async function request<TResponse>(
  url: string,
  config?: RequestInit,
  baseUrl?: string
): Promise<TResponse> {
  const urlComplete = `${getBaseUrl(baseUrl)}${url}`;

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('accept', 'application/json, text/plain, */*');
  requestHeaders.set('Content-Type', 'application/json');

  try {
    const token = getToken();
    if (token.access) {
      requestHeaders.set('Authorization', `Bearer ${token.access}`);
    }
  } catch (ex) {
    if (ex !== 'No current user') {
      throw ex;
    }
  }

  const response: any = await fetch(urlComplete, {
    ...config,
    headers: requestHeaders
  });
  if (response.status === 401) {
    logout();
  }

  if (!response.ok) {
    throw await response.json();
  } else if (response.status === 200) {
    return response.json();
  } else {
    return response;
  }
}

export const api = {
  get: <TResponse>(url: string, baseUrl?: string) =>
    request<TResponse>(url, undefined, baseUrl),

  post: <TBody, TResponse>(url: string, body: TBody, baseUrl?: string) =>
    request<TResponse>(
      url,
      {
        method: 'POST',
        body: JSON.stringify(body)
      },
      baseUrl
    )
};
