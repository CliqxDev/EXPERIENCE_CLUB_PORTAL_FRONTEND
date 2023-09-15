import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import {
  AssignNewsletterRequest,
  ClientInfoRequest,
  ClientInfo,
  ClientDeleteResponse,
  ClientCheckoutIndividualInfo,
  PostReadRequest
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

export const deleteClient = createAsyncAction(
  'DELETE_CLIENT_REQUEST',
  'DELETE_CLIENT_SUCCESS',
  'DELETE_CLIENT_ERROR'
)<number, ClientDeleteResponse, Error | AxiosError>();

export const clientCheckoutIndividual = createAsyncAction(
  'CLIENT_CHECKOUT_INDIVIDUAL_REQUEST',
  'CLIENT_CHECKOUT_INDIVIDUAL_SUCCESS',
  'CLIENT_CHECKOUT_INDIVIDUAL_ERROR'
)<undefined, ClientCheckoutIndividualInfo, Error | AxiosError>();

export const setPostRead = createAsyncAction(
  'POST_READ_REQUEST',
  'POST_READ_SUCCESS',
  'POST_READ_ERROR'
)<PostReadRequest, undefined, Error | AxiosError>();

export const clearDeleteClient = createAction('CLEAR_DELETE_CLIENT')();

export const clearUpdateClient = createAction('CLEAR_UPDATE_CLIENT')();

export const clearCreateClient = createAction('CLEAR_CREATE_CLIENT')();

export const clearAssignNewsletter = createAction('CLEAR_ASSIGN_NEWSLETTER')();

export const clearClientCheckoutIndividual = createAction(
  'CLEAR_CLIENT_CHECKOUT_INDIVIDUAL'
)();
