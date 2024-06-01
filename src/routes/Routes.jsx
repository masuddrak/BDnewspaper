import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import AddNews from '../pages/Dashboard/AddNews'
import AllArticles from '../pages/AllArticles'
import ArticleDetails from '../components/Shared/CardDetails/ArticleDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/add-Article',
        element: <AddNews></AddNews>,
      },
      {
        path: '/all-articles',
        element: <AllArticles></AllArticles>,
      },
      {
        path: '/article-details/:id',
        element: <ArticleDetails></ArticleDetails>,
      },
     
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
