/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import { AssignNewsletterRequest, AssignNewsletterResponse, ClientInfoResponse } from './types';

export const clientInfo = createAsyncAction(
  'CLIENT_INFO_REQUEST',
  'CLIENT_INFO_SUCCESS',
  'CLIENT_INFO_ERROR'
)<undefined, ClientInfoResponse, Error | AxiosError>();

export const assignNewsletter = createAsyncAction(
  'ASSIGN_NEWSLETTER_REQUEST',
  'ASSIGN_NEWSLETTER_SUCCESS',
  'ASSIGN_NEWSLETTER_ERROR'
)<AssignNewsletterRequest, AssignNewsletterResponse, Error | AxiosError>();

export const clearClientInfo = createAction('CLEAR_CLIENT_INFO')();
