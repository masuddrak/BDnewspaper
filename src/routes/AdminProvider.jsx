

import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import useSIngleuser from '../hooks/useSIngleuser'

const AdminProvider = ({ children }) => {
    const { singleUser, isLoading } = useSIngleuser()
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading || isLoading) return <LoadingSpinner />
    if (user && singleUser.role === "admin") return children
    return <Navigate to='/login' state={location.pathname} replace='true' />
}

AdminProvider.propTypes = {
    children: PropTypes.element,
}

export default AdminProvider
