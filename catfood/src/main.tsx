import React from 'react'
import ReactDOM from 'react-dom/client'
import RecipePage from './pages/RecipePage.tsx'
import './index.scss'
import SearchPage from './pages/SearchPage.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WriteRecipePage from './pages/WriteRecipePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/recipe",
    element: <RecipePage />,
  },
  {
    path: "/writerecipe",
    element: <WriteRecipePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
