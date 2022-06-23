import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qeqf6s3zxk01xl6jez4t6l/master',
    cache: new InMemoryCache()
})