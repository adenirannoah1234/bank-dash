// import { appConfig } from '@/config';
import { BaseQueryApi, FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import Cookies from 'js-cookie';
import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  const result = await baseQuery(args, api, extraOptions);
  

  return result;
};

export type ErrorResponse = {
  status: number;
  data: {
    message: string;
  };
};

export const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (_builder) => ({}), //eslint-disable-line
});
