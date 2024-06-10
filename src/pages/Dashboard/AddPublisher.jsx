import toast from "react-hot-toast";
import { imageUpload } from "../../utils";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddPublisher = () => {
    const axiosSecure = useAxiosSecure()
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.files[0]
        try {
            const image_url = await imageUpload(image)
            const publiserInfo = { name, iamge: image_url,totalCount:0 }
            const { data } = await axiosSecure.post("/add-publiser", publiserInfo)
            if (data.acknowledged) {
                toast.success('Publiser Added Successful')
            }
        } catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <div className="flex justify-center items-center  min-h-[80vh]">
            <form onSubmit={handleSubmit} className="space-y-3">
               <h3 className="text-xl font-semibold text-center">Create New Publisher</h3>
                <div>
                    <label htmlFor='image' className='block mb-2 text-sm'>
                        Publisher Image:
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
                    <label htmlFor='Publisher' className='block mb-2 text-sm'>
                        Publisher Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter Your Name Here'
                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <button
                    type='submit'
                    className='w-full text-white p-3 mt-5 text-center font-medium  transition duration-200 rounded shadow-md bg-gray-900'
                >
                    Save & Continue
                </button>
            </form>
        </div>
    );
};

export default AddPublisher;