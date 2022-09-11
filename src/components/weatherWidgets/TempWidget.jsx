import "../../stylesheets/TempWidget.css";

function TempWidget() {
  return (
    <div className="temp-widget">
      <div className="div-temp">
        <span class="material-icons-outlined">chevron_left</span>
        <h2>27°</h2>
        <span class="material-icons-outlined">navigate_next</span>
      </div>

      <div className="div-weather">
        <span class="material-icons-outlined">wb_sunny</span>
        <h4>sunny</h4>
      </div>
    </div>
  );
}

export default TempWidget;
