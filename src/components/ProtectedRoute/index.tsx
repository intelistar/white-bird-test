// src/components/ProtectedRoute.tsx
import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

import { ROUTES } from '@/constants/routes';
import { useCurrentUser } from '@/modules/user/hooks/useCurrentUser';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useCurrentUser();

  if (!user?.isAdmin) {
    return <Navigate to={ROUTES.ROOT} replace />;
  }

  return children;
};
