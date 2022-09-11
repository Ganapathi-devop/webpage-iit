import "../../stylesheets/ChartComp.css";
import { Paper } from "@mui/material";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";

function ChartComp() {
  const data = [
    { argument: "Monday", value: 30 },
    { argument: "Tuesday", value: 20 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 50 },
    { argument: "Friday", value: 60 },
  ];
  return (
    <div className="wrapper-chart">
      <div className="chart-div">
        <div className="top-chart">
          <h4 id="headline">Upcoming hours</h4>
          <div className="dropdown">
            <div className="precipitation">
              <h4>Rain precipitation</h4>
              <span class="material-icons-outlined">expand_more</span>
            </div>
            <div className="next-day">
              <h4>Next days</h4>
              <span class="material-icons-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        <div className="bottom-chart">
          <Paper className="paper-chart">
            <Chart data={data} className="paper-chart">
              {/* <ValueAxis /> */}
              {/* <ArgumentAxis />/ */}

              <BarSeries valueField="value" argumentField="argument" />
            </Chart>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default ChartComp;
