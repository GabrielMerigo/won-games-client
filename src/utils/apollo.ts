import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(){
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = {}){
  // Serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // recuperando os dados de cache
  if(initialState){
    apolloClientGlobal.cache.restore(initialState);
  }

  // sempre inicializando no SSR com o cache limpo
  // sempre para que a gente não corra o risco de compartilhar o usuário X com o Y.
  if(typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = {}){
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
