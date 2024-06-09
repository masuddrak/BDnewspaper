import { useEffect, useState } from "react";
import Article from "../components/Shared/Cards/Article";
import useAllPubliser from "../hooks/useAllPubliser";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { allTgas } from "../utils/tags";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const AllArticles = () => {
    const [articles, setApproveArticles] = useState([])
    const [publisher, setPublisher] = useState("")
    const [tag, setTag] = useState("")
    const [searchText, setSearchText] = useState("")
    const { publishers } = useAllPubliser()
    const axiosCommon = useAxiosCommon()
    // pagination 
    const [selectedPage, setSelectedPage] = useState(0)
    const [perpageItem, setPerpageItem] = useState(8)
    const count = useLoaderData()
    const numberOfPage = Math.ceil(count.data.count / perpageItem)
    const pages = [...Array(numberOfPage).keys()]
    // pagination 
    useEffect(() => {
        (async () => {
            const { data } = await axiosCommon(`/all-approve-articles?findPublisher=${publisher}&findTag=${tag}&searchText=${searchText}&page=${selectedPage}&size=${perpageItem}`)
            console.log(data)
            setApproveArticles(data)
        })()
    }, [tag, publisher, axiosCommon, searchText, selectedPage, perpageItem])
    const tags = allTgas()
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

    if (articles.length < 1) {
        return <LoadingSpinner></LoadingSpinner>
    }
    const handelSearch = (e) => {
        e.preventDefault()
        const searchTitle = e.target.title.value
        setSearchText(searchTitle)
    }
    console.log(searchText)
    return (
        <section className="">
            <div className="md:flex gap-2 mb-3">
                <div className="flex gap-2">
                    <div>
                        <p>Publisher sort</p>
                        <select className="border border-1 border-gray-900"
                            onChange={(e) => setPublisher(e.target.value)}
                        >
                            {
                                publishers.map(publisher => <option key={publisher._id} value={publisher.name}>{publisher.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <p>Tag sort</p>
                        <select className="border border-1 border-gray-900"
                            onChange={(e) => setTag(e.target.value)}
                        >
                            {
                                tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <form onSubmit={handelSearch}>
                        <p>Search Title</p>
                        <input type="text" name="title" placeholder="type title" className="px-2 border border-1 border-gray-900 " />
                        <input type="submit" value="search" className="bg-gray-800 text-white ml-1 px-1" />
                    </form>
                </div>
            </div>

            <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    articles?.map(article => <Article key={article._id} article={article}></Article>)
                }
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
        </section>
    );
};

export default AllArticles;