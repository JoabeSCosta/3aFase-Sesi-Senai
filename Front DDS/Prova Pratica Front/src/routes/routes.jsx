import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdsPage from '../Pages/PaginaAnuncios';
import CommentsPage from '../Pages/PaginaComentarios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdsPage />,
  },
  {
    path: '/comments/:postId',
    element: <CommentsPage />,
  },
]);

export default router;