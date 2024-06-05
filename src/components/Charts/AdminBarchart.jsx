
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminBarchart = () => {
    const axiosSecure = useAxiosSecure()
    //   admin chart
    const { data: adminChart = [] } = useQuery({
        queryKey: ["adminChart"],
        queryFn: async () => {
            const res = await axiosSecure("/publisher-count")
            return res.data
        }
    })
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <BarChart
            width={500}
            height={300}
            data={adminChart}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="publisher" />
            <YAxis />
            <Bar dataKey="viewCount" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {adminChart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
    );
};

export default AdminBarchart;