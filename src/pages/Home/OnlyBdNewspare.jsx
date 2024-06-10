import { IoEyeSharp } from "react-icons/io5";
import only1 from "../../assets/images/1.webp"
import only2 from "../../assets/images/2.webp"

const OnlyBdNewspare = () => {
    return (
        <div className="border-y-2 border-gray-900 mt-14">
            <p>Only from the BDNEWSPAPER</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
                <div className="card card-compact bg-base-100 border-b-[1px]">
                    <div style={{
                        backgroundImage: `url(${only1})`
                    }} className="h-[300px] bg-no-repeat  hover:opacity-85 transition-all w-full bg-cover object-cover bg-center">
                    </div>
                    <div className="card-body">
                        <h3 className="card-title hover:underline  primary-text font-semibold">Price hikes and boycotts: Is trouble brewing at Starbucks?</h3>
                        <p className="text-neutral-500"> The coffee giant is suffering as customers "lose it" over price hikes and other controversies.
                        </p>
                        <div className="flex  gap-3 mt-3 text-sm">
                            <p className="text-gray-500 ">{new Date().toDateString()} | Bssiness |</p>
                            <p className="text-gray-600 flex items-center gap-1"><IoEyeSharp></IoEyeSharp>554 View</p>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="card card-compact bg-base-100 border-b-[1px]">
                    <div style={{
                        backgroundImage: `url(${only2})`
                    }} className="h-[300px] bg-no-repeat  hover:opacity-85 transition-all w-full bg-cover object-cover bg-center">
                    </div>
                    <div className="card-body">
                        <h3 className="card-title hover:underline  primary-text font-semibold">Sunscreen: Are you using it correctly?</h3>
                        <p className="text-neutral-500">The sun's rays are carcinogenic – here's how to protect yourself properly, according to experts.
                        </p>
                        <div className="flex  gap-3 mt-3 text-sm">
                            <p className="text-gray-500 ">{new Date().toDateString()} | Future |</p>
                            <p className="text-gray-600 flex items-center gap-1"><IoEyeSharp></IoEyeSharp>875 View</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OnlyBdNewspare;