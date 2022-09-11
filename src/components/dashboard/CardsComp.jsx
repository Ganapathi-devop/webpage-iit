import { Box, LinearProgress } from "@mui/material";
import "../../stylesheets/CardsComp.css";

function CardsComp() {
  return (
    <div className="wrapper-cards">
      <div className="card" id="humidity-card">
        <div className="utilities">
          <h4>Humidity</h4>
          <div className="water-drops">
            <span id="water-droplet1" class="material-icons-outlined">
              water_drop
            </span>
            <span id="water-droplet2" class="material-icons-outlined">
              water_drop
            </span>
          </div>
        </div>
        <h4 id="humidity-percent">
          82% <span>Bad</span>
        </h4>
        <div className="progress-div">
          <div className="progress-good">
            <p>Good</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                variant="determinate"
                value={100}
              />
            </Box>
          </div>
          <div className="progress-normal">
            <p>Normal</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                variant="determinate"
                value={50}
              />
            </Box>
          </div>
          <div className="progress-bad">
            <p>Bad</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="card" id="wind-card">
        <div className="utilities">
          <h4>Wind</h4>
          <div className="water-drops">
            <span class="material-icons-outlined">air</span>
          </div>
        </div>
      </div>
      <div className="card" id="precipitation">
        <div className="utilities">
          <h4>Precipitation</h4>
          <div className="water-drops">
            <span class="material-icons-outlined">thunderstorm</span>
          </div>
        </div>
        <h4 id="precipitation">1.4 cm</h4>
        <div className="precipitation-progress-div">
          <div className="precipitations">
            <p>0</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>10</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>20</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>30</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>40</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>50</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>60</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>70</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>80</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="precipitations">
            <p>90</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="utilities">
          <h4>UV index</h4>
          <div className="water-drops">
            <span class="material-icons-outlined">light_mode</span>{" "}
          </div>
        </div>
        <h4 id="uv">
          4 <span>medium</span>
        </h4>
        <div className="uv-progress-div">
          <div className="uv">
            <p>0-2</p>
            <Box>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={100}
              />
            </Box>
          </div>
          <div className="uv">
            <p>3-5</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={20}
              />
            </Box>
          </div>
          <div className="uv">
            <p>6-7</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={0}
              />
            </Box>
          </div>
          <div className="uv">
            <p>8-10</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={0}
              />
            </Box>
          </div>
          <div className="uv">
            <p>11+</p>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                className="progress-bar"
                style={{ height: "10px" }}
                variant="determinate"
                value={0}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="utilities">
          <h4>Feel like</h4>
          <div className="water-drops">
            <span class="material-icons-outlined">thermostat</span>
          </div>
        </div>
        <h4 id="temp">30°</h4>
        <div className="temp-progress-div">
          <div className="percentage-temp-progress">
            <p>0°</p>
            <p>25°</p>
            <p>50°</p>
          </div>
          <div className="progress-bar-temp">
            <div className="progress-temp"></div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="utilities">
          <h4>Chance of rain</h4>
          <div className="water-drops">
            <span class="material-icons-outlined">water_drop</span>
          </div>
        </div>
        <h4 id="rain">42%</h4>
        <div className="rain-progress-div">
          <div className="percentage-rain-progress">
            <p>0°</p>
            <p>25°</p>
            <p>50°</p>
            <p>75°</p>
            <p>100°</p>
          </div>
          <div className="progress-bar-rain">
            <div className="progress-rain"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsComp;
