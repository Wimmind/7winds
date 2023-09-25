import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RequestCreateEntityRow } from './types'
import { EntityRowTree } from '../models'
import { BASE_URL, ENTITY_ID } from './constants'

export const entityApi = createApi({
  reducerPath: 'entityApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['entities'],
  endpoints: (builder) => ({
    getEntityRowTree: builder.query<EntityRowTree, void>({
      query: () => `/v1/outlay-rows/entity/${ENTITY_ID}/row/list`,
      providesTags: ['entities'],
    }),

    createEntityRow: builder.mutation<void, RequestCreateEntityRow>({
      query: (body) => ({
        url: `v1/outlay-rows/entity/${ENTITY_ID}/row/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['entities'],
    }),

    // updateEntityRow: builder.mutation({
    //   query: ({ id, title }) => ({
    //     url: `albums/${id}`,
    //     method: "PUT",
    //     body: { title },
    //   }),
    //   invalidatesTags: ["entities"],
    // }),

    // deleteAlbum: builder.mutation({
    //   query: (id) => ({
    //     url: `albums/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["entities"],
    // }),
  }),
})

export const {
  useGetEntityRowTreeQuery,
  useCreateEntityRowMutation,
  // useUpdateAlbumMutation,
  // useDeleteAlbumMutation,
} = entityApi
