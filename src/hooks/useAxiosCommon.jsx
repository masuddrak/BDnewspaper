import axios from "axios";

const axiosCommon=axios.create({
    baseURL:"https://news-paper-delta.vercel.app"
})
const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;