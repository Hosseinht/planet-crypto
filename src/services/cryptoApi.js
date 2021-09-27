import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c1bf617776msha2b9e99617e94e8p180cf3jsn25f4a602ee7d'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    }))
})

export const {
    useGetCryptosQuery,

} = cryptoApi;