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
import PremiumProvider from './PremiumProvider'
import AdminProvider from './AdminProvider'
import UpdateProfile from '../pages/UpdateProfile'

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
        element: <PrivateRoute><AddNews></AddNews></PrivateRoute>,
      },
      {
        path: '/all-articles',
        element: <AllArticles></AllArticles>,
        loader:()=>axios("https://news-paper-delta.vercel.app/total-article")
      },
      {
        path: '/my-article',
        element: <PrivateRoute><MyArticle></MyArticle></PrivateRoute>,
      },
      {
        path: '/subscription',
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>,
      },
      {
        path: '/upadte-profile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: '/premium-articles',
        element: <PremiumProvider><PremiumArticles></PremiumArticles></PremiumProvider>,
      },
      {
        path: '/article-details/:id',
        element: <PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>,
        loader:({params})=>axios(`https://news-paper-delta.vercel.app/article-details/${params.id}`)
      },
      {
        path: '/upadte-article/:id',
        element: <PrivateRoute><UpdateArticle></UpdateArticle></PrivateRoute>,
        loader:({params})=>axios(`https://news-paper-delta.vercel.app/article-details/${params.id}`)
      },
     
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  // dashbord Routes
  {
    path: "/dashboard",
    element: <PrivateRoute><AdminProvider><DashboardLayout></DashboardLayout></AdminProvider></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><AdminProvider><DashoardHome></DashoardHome></AdminProvider></PrivateRoute>
      },
      {
        path: "/dashboard/all-users",
        element: <PrivateRoute><AdminProvider><AllUsers></AllUsers></AdminProvider></PrivateRoute>
      },
      {
        path: "/dashboard/all-article",
        element: <PrivateRoute><AdminProvider><AllArticle></AllArticle></AdminProvider></PrivateRoute>,
        loader:()=>axios("https://news-paper-delta.vercel.app/total-article")
      },
      {
        path: "/dashboard/add-publisher",
        element: <PrivateRoute><AdminProvider><AddPublisher></AddPublisher></AdminProvider></PrivateRoute>
      },
    ]
  },
])
