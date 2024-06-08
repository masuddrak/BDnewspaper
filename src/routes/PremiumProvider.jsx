import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import useSIngleuser from "../hooks/useSIngleuser"
const PremiumProvider = ({children}) => {
    const { user, loading } = useAuth()
    const {singleUser,isLoading}=useSIngleuser()
    const location = useLocation()
    const today=(new Date()).getTime()
    if (loading || isLoading) return <LoadingSpinner />
    if (user && singleUser.role==="premium" && singleUser.date>today) return children
    return <Navigate to='/subscription' state={location.pathname} replace='true' />
  }
  



export default PremiumProvider;