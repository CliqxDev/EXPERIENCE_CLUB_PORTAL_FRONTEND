import { createAction, createAsyncAction } from 'typesafe-actions';

import {
  AssignNewsletterRequest,
  ClientInfoResponse,
  ClientPersonalDataPayload,
  ClientPersonalDataCompletePayload,
  ClientPersonalDataResponse
} from './types';

export const clientInfo = createAsyncAction(
  'CLIENT_INFO_REQUEST',
  'CLIENT_INFO_SUCCESS',
  'CLIENT_INFO_ERROR'
)<undefined, ClientInfoResponse, Error>();

export const assignNewsletter = createAsyncAction(
  'ASSIGN_NEWSLETTER_REQUEST',
  'ASSIGN_NEWSLETTER_SUCCESS',
  'ASSIGN_NEWSLETTER_ERROR'
)<AssignNewsletterRequest, undefined, Error>();

export const clearClientInfo = createAction('CLEAR_CLIENT_INFO')();

export const createClient = createAsyncAction(
  'CREATE_CLIENT_REQUEST',
  'CREATE_CLIENT_SUCCESS',
  'CREATE_CLIENT_ERROR'
)<ClientPersonalDataPayload, ClientPersonalDataResponse, Error>();

export const updateClient = createAsyncAction(
  'UPDATE_CLIENT_REQUEST',
  'UPDATE_CLIENT_SUCCESS',
  'UPDATE_CLIENT_ERROR'
)<ClientPersonalDataCompletePayload, ClientInfoResponse, Error>();

export const clearCreateClient = createAction('CLEAR_CREATE_CLIENT')();
