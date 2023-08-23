/* eslint-disable import/no-anonymous-default-export */
import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  RawAxiosRequestHeaders
} from 'axios';
import { getToken } from 'utils/services/auth';

const request = async (
  params: AxiosRequestConfig,
  affectedAccount?: string,
  token?: string
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
    const tokenLocalStorage = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else if (tokenLocalStorage.access) {
      headers.Authorization = `Bearer ${tokenLocalStorage.access}`;
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
    error => {
      throw error;
    }
  );
};

const getBaseUrl = (baseUrl?: string) => baseUrl || process.env.API_HOST;

export const get = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string,
  token?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'GET'
    },
    affectedAccount,
    token
  );

export const post = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string,
  token?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'POST'
    },
    affectedAccount,
    token
  );

export const put = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string,
  token?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'PUT'
    },
    affectedAccount,
    token
  );

export const patch = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string,
  token?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'PATCH'
    },
    affectedAccount,
    token
  );

export const del = (
  props: AxiosRequestConfig,
  affectedAccount?: string,
  baseURL?: string,
  token?: string
) =>
  request(
    {
      baseURL: getBaseUrl(baseURL),
      ...props,
      method: 'DELETE'
    },
    affectedAccount,
    token
  );

export default {
  del,
  get,
  patch,
  post,
  put
};
