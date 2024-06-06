import useAllPubliser from "../../hooks/useAllPubliser";

const Publishers = () => {
    const { publishers } = useAllPubliser()
    return (
        <div className="grid grid-cols-6 gap-4 my-20 justify-between items-end">
            {
                publishers.map(publisher => <div key={publisher._id} className=" space-y-3">
                    <div className="w-[150px] h-[100px] ">
                        <img className="w-full h-full" src={publisher.iamge} alt="" />
                    </div>
                    <h3 className="card-title hover:underline  primary-text font-semibold">{publisher.name}</h3>
                </div>)
            }
        </div>
    );
};

export default Publishers;