import "../stylesheets/Dashboard.css";
import CardsComp from "./dashboard/CardsComp";
import Chart from "./dashboard/ChartComp";
import Header from "./dashboard/Header";

function Dashboard() {
  return (
    <div className="dashboard">
        <Header/>
        <Chart/>
        <h4>More details of todays's weather</h4>
        <CardsComp/>
    </div>
  );
}

export default Dashboard;
