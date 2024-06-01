import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AddNewsForm from "../../components/Shared/Form/AddNewsForm";
import { imageUpload } from "../../utils";



const AddNews = () => {
    const [tag, setTga] = useState([])
    const { user } = useAuth()
    const [imagePreview, setImagePrivew] = useState()
    const [imageName, setImageName] = useState("")
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const naviget = useNavigate()
    const options = [
        {
            id: 1,
            name: 'Politics'
        },
        {
            id: 2,
            name: 'Economy'
        },
        {
            id: 3,
            name: 'Technology'
        },
        {
            id: 4,
            name: 'Health'
        },
        {
            id: 5,
            name: 'Environment'
        },
        {
            id: 6,
            name: 'Sports'
        },
    ];
    console.log(tag)
    // create publiser
    const [publishers, setPublishers] = useState([])
    const [publisher, setPublisher] = useState({})
    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setPublishers(data))
    }, [])

    // handel post data room
    const { mutateAsync } = useMutation({
        mutationFn: async (formData) => {
            const { data } = await axiosSecure.post(`/add-news`, formData)
            return data
        },
        onSuccess: () => {
            toast.success("Successfully added News")
            naviget('/')
        }
    })
    // handel Preview iage
    const handelPreviewInage = (image) => {
        setImagePrivew(URL.createObjectURL(image))
        setImageName(image.name)
    }


    // handel form data
    const handelFormData = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const userInfo = {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
        }
        const image = form.image.files[0]

        try {
            const image_url = await imageUpload(image)
            const formData = { tag, title, publisher, description, userInfo, image: image_url }
            await mutateAsync(formData)
            console.table(formData)
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
            setLoading(true)
        }
    }
    return (
        <div>
            <AddNewsForm options={options} setPublisher={setPublisher} publishers={publishers} setTga={setTga} handelFormData={handelFormData} handelPreviewInage={handelPreviewInage} imagePreview={imagePreview} imageName={imageName} loading={loading}></AddNewsForm>
        </div>
    );
};

export default AddNews;