import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  MastoConflictError,
  MastoForbiddenError,
  MastoGoneError,
  MastoNotFoundError,
  MastoRateLimitError,
  MastoUnauthorizedError,
  MastoUnprocessableEntityError,
} from '../errors';
import { Serializer } from '../serializers';
import { Body, Http, Request, Response } from './http';

export class HttpAxiosImpl implements Http {
  private readonly axios: AxiosInstance;

  constructor(
    readonly baseURL: string,
    readonly serializer: Serializer,
    readonly config: AxiosRequestConfig = {},
  ) {
    this.axios = axios.create({
      baseURL,
      transformRequest: (data, headers) =>
        this.serializer.serialize(headers['Content-Type'], data),
      transformResponse: (data, headers) =>
        this.serializer.deserialize(headers['Content-Type'], data),
      paramsSerializer: (params) =>
        this.serializer.serialize('application/json', params) as string,
      ...config,
    });
  }

  async request<T>(params: Request): Promise<Response<T>> {
    try {
      const response = await this.axios.request<T>(params);

      return {
        headers: response.headers,
        data: response.data,
      };
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw error;
      }

      const status = error?.response?.status;
      const message =
        error?.response?.data?.error ?? 'Unexpected error occurred';

      switch (status) {
        case 401:
          throw new MastoUnauthorizedError(message);
        case 403:
          throw new MastoForbiddenError(message);
        case 404:
          throw new MastoNotFoundError(message);
        case 409:
          throw new MastoConflictError(message);
        case 410:
          throw new MastoGoneError(message);
        case 422:
          throw new MastoUnprocessableEntityError(message);
        case 429:
          throw new MastoRateLimitError(message);
        default:
          throw error;
      }
    }
  }

  get<T>(path: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'get',
      path,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  post<T>(path: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'post',
      path,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  delete<T>(path: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'delete',
      path,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  put<T>(path: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'put',
      path,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  patch<T>(path: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'patch',
      path,
      body,
      ...init,
    }).then((response) => response.data as T);
  }
}
