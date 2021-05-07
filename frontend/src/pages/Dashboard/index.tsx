import BarChart from "components/Charts/BarChart";
import DonutChart from "components/Charts/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Sales Dashboard</h1>

                <div className="row px-3">
                    <div className="col-md-6">
                        <h5 className="text-center text-secondary">% Success</h5>
                        <BarChart />
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-center text-secondary">All Sales</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">All Sales</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;