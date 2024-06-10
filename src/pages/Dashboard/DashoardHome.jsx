import { Helmet } from "react-helmet-async";
import AdminBarchart from "../../components/Charts/AdminBarchart";


const DashoardHome = () => {
    return (
        <div>
            <Helmet>
                    <title>Amin Dashboard</title>
                </Helmet>
            <AdminBarchart></AdminBarchart>
        </div>
    );
};

export default DashoardHome;