import CountUp from 'react-countup';

const UserCalculation = () => {

    return (
        <div className='text-3xl'>
            <CountUp
                end={200}
                duration={5}
            ></CountUp>
        </div>
    );
};

export default UserCalculation;