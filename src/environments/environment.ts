import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'App',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44320',
    redirectUri: baseUrl,
    clientId: 'MovieApp_UI',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone MovieApp',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44320',
      rootNamespace: 'Movie.App',
    },
  },
} as Environment;
