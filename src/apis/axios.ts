/* eslint-disable import/no-anonymous-default-export */
import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  RawAxiosRequestHeaders
} from 'axios';
import { getToken, logout } from 'utils/services/auth';

const request = async (
  params: AxiosRequestConfig,
  affectedAccount?: string
) => {
  const headers: RawAxiosRequestHeaders | AxiosHeaders = {
    'Cache-Control': 'no-cache',
    accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRFToken': process.env.X_CSRF_TOKEN
  };

  if (affectedAccount) {
    headers['affected-account'] = affectedAccount;
  }

  try {
    const token = getToken();
    if (token.access) {
      headers.Authorization = `Bearer ${token.access}`;
    }
  } catch (ex) {
    if (ex !== 'No current user') {
      throw ex;
    }
  }

  params.headers = headers;

  return axios({
    ...params
  }).then(
    event => event,
    (error: any) => {
      if (
        error.response.status === 401 &&
        error.response.data.detail !==
          'No active account found with the given credentials'
      ) {
        logout();
        window.location.href = '/sigin';
      }

      throw error;
    }
  );
};

const getBaseUrl = (baseUrl?: string) => baseUrl || process.env.API_HOST;

export const get = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'GET'
    },
    affectedAccount
  );

export const post = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'POST'
    },
    affectedAccount
  );

export const put = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'PUT'
    },
    affectedAccount
  );

export const patch = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'PATCH'
    },
    affectedAccount
  );

export const del = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'DELETE'
    },
    affectedAccount
  );

export default {
  del,
  get,
  patch,
  post,
  put
};
