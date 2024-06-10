import CountUp from 'react-countup';
import useUserCount from '../../hooks/useUserCount';

const UserCalculation = () => {
    const { userCount } = useUserCount()
    return (
        <div className='text-3xl text-center font-bold flex justify-evenly text-white bg-gray-900 px-5 py-10'>
            <div className=''>
                <CountUp
                    end={userCount?.totalUser}
                    duration={5}
                ></CountUp>
                <p className='text-xl font-semibold'>All User</p>
            </div>
            <div>
                <CountUp
                    end={userCount?.freeUser}
                    duration={5}
                ></CountUp>
                <p className='text-xl font-semibold'>Normal User</p>
            </div>
            <div>
                <CountUp
                    end={userCount?.premiumUser}
                    duration={5}
                ></CountUp>
                <p className='text-xl font-semibold'>Premium User</p>
            </div>
        </div>
    );
};

export default UserCalculation;