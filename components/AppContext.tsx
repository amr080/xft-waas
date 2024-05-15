import React from 'react';

export type Context = {
  userCredentials: {
    apiKeyName?: string,
    privateKey?: string,
  }
};

const AppContext = React.createContext<Context>({});

export default AppContext;