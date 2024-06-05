import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import AddNews from '../pages/Dashboard/AddNews'
import AllArticles from '../pages/AllArticles'
import ArticleDetails from '../components/Shared/CardDetails/ArticleDetails'
import axios from 'axios'
import MyArticle from '../pages/MyArticle'
import DashboardLayout from '../layouts/DashboardLayout'
import PrivateRoute from './PrivateRoute'
import AllUsers from '../pages/Dashboard/AllUsers'
import AllArticle from '../pages/Dashboard/AllArticle'
import AddPublisher from '../pages/Dashboard/AddPublisher'
import DashoardHome from '../pages/Dashboard/DashoardHome'
import UpdateArticle from '../pages/UpdateArticle'
import PremiumArticles from '../pages/PremiumArticles'
import Subscription from '../pages/Subscription'

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
        path: '/my-article',
        element: <MyArticle></MyArticle>,
      },
      {
        path: '/subscription',
        element: <Subscription></Subscription>,
      },
      {
        path: '/premium-articles',
        element: <PremiumArticles></PremiumArticles>,
      },
      {
        path: '/article-details/:id',
        element: <ArticleDetails></ArticleDetails>,
        loader:({params})=>axios(`http://localhost:5000/article-details/${params.id}`)
      },
      {
        path: '/upadte-article/:id',
        element: <UpdateArticle></UpdateArticle>,
        loader:({params})=>axios(`http://localhost:5000/article-details/${params.id}`)
      },
     
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  // dashbord Routes
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><DashoardHome></DashoardHome></PrivateRoute>
      },
      {
        path: "/dashboard/all-users",
        element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      },
      {
        path: "/dashboard/all-article",
        element: <PrivateRoute><AllArticle></AllArticle></PrivateRoute>
      },
      {
        path: "/dashboard/add-publisher",
        element: <PrivateRoute><AddPublisher></AddPublisher></PrivateRoute>
      },
    ]
  },
])
