import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import {
  AssignNewsletterRequest,
  ClientInfoRequest,
  ClientInfo
} from './types';

export const assignNewsletter = createAsyncAction(
  'ASSIGN_NEWSLETTER_REQUEST',
  'ASSIGN_NEWSLETTER_SUCCESS',
  'ASSIGN_NEWSLETTER_ERROR'
)<AssignNewsletterRequest, undefined, Error | AxiosError>();

export const createClient = createAsyncAction(
  'CREATE_CLIENT_REQUEST',
  'CREATE_CLIENT_SUCCESS',
  'CREATE_CLIENT_ERROR'
)<ClientInfoRequest, ClientInfo, Error | AxiosError>();

export const updateClient = createAsyncAction(
  'UPDATE_CLIENT_REQUEST',
  'UPDATE_CLIENT_SUCCESS',
  'UPDATE_CLIENT_ERROR'
)<ClientInfo, ClientInfo, Error | AxiosError>();

export const clearUpdateClient = createAction('CLEAR_UPDATE_CLIENT')();

export const clearCreateClient = createAction('CLEAR_CREATE_CLIENT')();

export const clearClientInfo = createAction('CLEAR_CLIENT_INFO')();
