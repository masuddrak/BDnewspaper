import { useEffect, useState } from "react";
import AdminArticleRow from "../../components/Shared/TableRows/AdminArticleRow";
import useAllArticles from "../../hooks/useAllArticles";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllArticle = () => {
 // pagination 
 const [selectedPage, setSelectedPage] = useState(0)
 const [perpageItem, setPerpageItem] = useState(8)
 const count = useLoaderData()
 const numberOfPage = Math.ceil(count.data.count / perpageItem)
 const pages = [...Array(numberOfPage).keys()]
 // pagination 
    const { allArticles, refetch, isLoading } = useAllArticles(selectedPage,perpageItem)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setArticles(allArticles)
    }, [isLoading,allArticles,selectedPage,perpageItem])
 // handel page
    const handelPage = (e) => {
        const pagesValue = parseInt(e.target.value)
        setPerpageItem(pagesValue)
    }
    const handelPreviusPage = () => {
        if (selectedPage > 0) {
            setSelectedPage(selectedPage - 1)
        }
    }
    const handelNextPage = () => {
        if (selectedPage < pages.length - 1) {
            setSelectedPage(selectedPage + 1)
        }
    }
    // handel page
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                    <title>All Article</title>
                </Helmet>
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        no:
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        title
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        email
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        photo
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        date
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        status
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        publisher
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        isPremium
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        approve
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        decline
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Delete
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        premium
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Room row data */}
                                {articles.map((article, index) => <AdminArticleRow key={article._id} index={index} article={article} refetch={refetch}></AdminArticleRow>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
             {/* pagination */}

             <div className="flex justify-center my-4">
                <div>
                    <button onClick={handelPreviusPage} className="btn bg-neutral-800 mx-2 px-2 text-white">previus</button>
                    {
                        pages.map(page => <button key={page} onClick={() => setSelectedPage(page)} className={selectedPage === page ? "btn bg-green-500 mx-2 px-2 text-white" : "btn bg-neutral-800 mx-2 px-2 text-white"}>{page}</button>)
                    }
                    <button onClick={handelNextPage} className="btn bg-neutral-800 mx-2 px-2 text-white">Next</button>
                    <select name="item" value={perpageItem} onChange={handelPage} className="border border-1 border-gray-800">
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default AllArticle;