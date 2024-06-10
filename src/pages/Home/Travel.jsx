import { IoEyeSharp } from "react-icons/io5";
import only1 from "../../assets/images/1.webp"
import only2 from "../../assets/images/2.webp"

const Travel = () => {
    return (
        <div className="border-y-2 border-gray-900 mt-14">
            <p className="font-semibold">Travel</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 items-center">
                <div>
                    <h3 className="card-title hover:underline  primary-text font-semibold">Price hikes and boycotts: Is trouble brewing at Starbucks?</h3>
                    <p className="text-neutral-500">DJ Cormac left Northern Ireland and dominated Berlin's queer dance music scene. Here's his guide to Berlin's best LGBTQ+ spaces, from gay saunas to body art.
                    </p>
                    <button className="border border-black px-1 mt-4">see more</button>
                </div>
                <div>
                    <div style={{
                        backgroundImage: `url(${only1})`
                    }} className="h-[400px] bg-no-repeat  hover:opacity-85 transition-all w-full bg-cover object-cover bg-center">
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Travel;