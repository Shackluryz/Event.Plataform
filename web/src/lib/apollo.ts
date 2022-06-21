import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omulzl0jx301xsce65223l/master',
    cache: new InMemoryCache()
})