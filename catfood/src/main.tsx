import React from 'react'
import ReactDOM from 'react-dom/client'
import RecipePage from './pages/RecipePage.tsx'
import './index.scss'
import Recipe from './components/recipeComponents/Recipe.tsx';
import SearchPage from './pages/SearchPage.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipePage />,
  },
  {
    path: "/searchpage",
    element: <SearchPage />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
