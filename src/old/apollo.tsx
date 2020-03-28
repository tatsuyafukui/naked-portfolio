import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  fetch,
  uri: 'http://172.25.0.8:8080/graphql',
});

export default ({ element }: any) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
