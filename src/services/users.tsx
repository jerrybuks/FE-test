import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

// Define a service using a base URL and expected endpoints
export const spacexApi = createApi({
  reducerPath: 'spacexApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/' }),
  endpoints: (builder) => ({
    getSpacexLaunches: builder.query({
      query: (api: string) => `${api}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSpacexLaunchesQuery } = spacexApi;