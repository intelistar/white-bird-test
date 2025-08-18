import { createBrowserRouter, RouterProvider } from 'react-router';

import Layout from '@/components/Layout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ROUTES } from '@/constants/routes';
import { FavouritesPostsPage, PostPage, PostsPage } from '@/modules/post';
import { UserProfile } from '@/modules/user';
import { AdminPanel } from '@/modules/user/pages/AdminPanel';
import { ErrorPage } from '@/pages/ErrorPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <PostsPage />,
      },
      {
        path: `${ROUTES.POSTS}/:id`,
        element: <PostPage />,
      },
      {
        path: ROUTES.FAVOURITES,
        element: <FavouritesPostsPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <UserProfile />,
      },
      {
        path: ROUTES.ADMIN_PANEL,
        element: (
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
