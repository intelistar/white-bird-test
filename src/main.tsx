import '@/styles/main.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { UserContextProvider } from './modules/user/components/UserContextProvider/index.tsx';
import AppRouter from './router/AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  </StrictMode>,
);
