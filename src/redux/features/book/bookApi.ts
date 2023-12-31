import { api } from "@/redux/api/apiSlice";
import { IBooks } from "@/types";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book',
            providesTags: ['book']
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`
        }),
        postBook: builder.mutation<IBooks, Partial<IBooks>>({
            query: (data) => ({
                url: `/book/create-book`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['book']
        }),
        updateBook: builder.mutation({
            query: ({id, data}) => ({
                url: `/book/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['book']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['book']
        }),
    })
})
export const { useDeleteBookMutation,useGetBooksQuery, useGetSingleBookQuery, usePostBookMutation, useUpdateBookMutation } = bookApi;