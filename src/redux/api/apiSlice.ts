import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://bookshelf-sage.vercel.app/api/v1',
            // baseUrl: 'http://localhost:5000/api/v1',
            prepareHeaders:  (headers, { getState }) => {
                const token =( getState() as RootState)?.auth?.token;
                if (token) {
                    headers.set('authorization', token)
                }
                return headers;
            }
        },
    ),
    tagTypes: ['book', 'comments', 'wish'],
    endpoints: () => ({})
})