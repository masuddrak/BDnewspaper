
import { Helmet } from 'react-helmet-async'

import useAuth from '../hooks/useAuth'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import useSIngleuser from '../hooks/useSIngleuser'
import { TbFidgetSpinner } from 'react-icons/tb'
import { imageUpload } from '../utils'
import toast from 'react-hot-toast'


const UpdateProfile = () => {
    const { user, loading,setLoading,updateUserProfile } = useAuth() || {}
    const { singleUser, isLoading } = useSIngleuser()



    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        
        const image = form.image.files[0]

        try {
            setLoading(true)
            // 1. Upload image and get image url
            const image_url = await imageUpload(image)
            console.log(image_url)
            //2. User Registration
            const result = await updateUserProfile(name, image_url)
            console.log(result)
            setLoading(false)
            // // 3. Save username and photo in firebase
            // await updateUserProfile(name, image_url)
            // navigate('/')
            toast.success('Upadte Successful')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }






    if (loading || isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                
                <div className='w-full mb-4 bg-gray-900 rounded-t-lg h-36 flex items-center justify-center'>
                    <h3 className='text-white text-xl font-semibold'>Upadte Profile</h3>
                </div>
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-white bg-gray-900 rounded-full'>
                        {singleUser.role}
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {user?.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user?.email}</span>
                            </p>

                            <div>
                             
                                <form onSubmit={handleSubmit} className='space-y-6'>
                                    <div className='space-y-4'>

                                        <div>
                                            <label htmlFor='image' className='block mb-2 text-sm'>
                                                Select Profile Image:
                                            </label>
                                            <input
                                                required
                                                type='file'
                                                id='image'
                                                name='image'
                                                accept='image/*'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='name' className='block mb-2 text-sm'>
                                                Upadte Name
                                            </label>
                                            <input
                                                type='text'
                                                name='name'
                                                id='name'
                                                required
                                                placeholder='Enter Your Name Here'
                                                className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                            />
                                        </div>

                                    </div>

                                    <div>
                                        <button
                                            disabled={loading}
                                            type='submit'
                                            className='bg-gray-900 w-full rounded-md py-3 text-white'
                                        >
                                            {loading ? (
                                                <TbFidgetSpinner className='animate-spin m-auto' />
                                            ) : (
                                                'Continue'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile






