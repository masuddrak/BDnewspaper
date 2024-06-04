import { SiProteus } from 'react-icons/si';
import Select from 'react-dropdown-select';

const UpadateArticleForm = ({ handelPublisher, handelFormData, publishers, options, setTga, handelPreviewInage, imagePreview, imageName, loading, oldArticle }) => {
    const { title, description } = oldArticle || {}
    return (
        <div className='w-full min-h-[calc(100vh-200px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>

            <form onSubmit={handelFormData} className=''>
                <div className='w-full'>
                    <div className='space-y-5'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='title'
                                id='title'
                                type='text'
                                placeholder='Title'
                                required
                                defaultValue={title}
                            />

                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='title' className='block text-gray-600'>
                                    Tags
                                </label>

                                <Select
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 outline-rose-500 rounded-md '
                                    required={true}
                                    options={options}
                                    labelField="name"
                                    valueField="id"
                                    multi
                                    onChange={(values) => setTga(values)}
                                    color='#f43f5e'
                                />
                            </div>
                            {/* publisher */}
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='category' className='block text-gray-600'>
                                    Category
                                </label>
                                <select
                                    required
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='category'
                                    onChange={(e) => handelPublisher(e.currentTarget.value)}

                                >
                                    {publishers.map(singlePublisher => (
                                        <option value={singlePublisher.name} key={singlePublisher.name}>
                                            {singlePublisher.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex items-center gap-2 p-4 bg-white w-full border-dotted border-4  m-auto rounded-lg'>
                                <div className='flex-1 file_upload px-5 relative   border-gray-300 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <label>
                                            <input
                                                onChange={(e) => handelPreviewInage(e.target.files[0])}
                                                className='text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                hidden
                                                required
                                            />
                                            <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                                {imageName ? <span>
                                                    {imageName.length > 15 ? imageName.split('.')[0].slice(0, 15) + "...." + imageName.split('.')[1] : imageName}
                                                </span> : "Upload Image"}
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className='w-14 h-14'>
                                    <img src={imagePreview} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-1 text-sm '>
                    <label htmlFor='description' className='block text-gray-600'>
                        Description
                    </label>

                    <textarea
                        required
                        id='description'
                        className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                        name='description'
                        defaultValue={description}
                    ></textarea>
                </div>
                <button
                    disabled={loading}
                    type='submit'
                    className='p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    {
                        loading ? <SiProteus className='animate-spin m-auto'></SiProteus> : "Save & Continue"
                    }

                </button>
            </form>
        </div>
    )
}

export default UpadateArticleForm