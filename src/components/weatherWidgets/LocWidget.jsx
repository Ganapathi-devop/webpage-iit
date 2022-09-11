import "../../stylesheets/LocWidget.css";

function LocWidget() {
  return (
    <div className="loc-widget">
      <div className="location">
        <span class="material-icons-outlined">near_me</span>
        <h4>New York, USA</h4>
      </div>
      <div className="time">
        <span class="material-icons-outlined">wb_twilight</span><p>07:19</p>
      </div>
      <div className="date">
        <p>Today 28 Sept</p>
      </div>
      <div className="time">
        <span class="material-icons-outlined">wb_twilight</span><p>07:19</p>
      </div>
    </div>
  );
}

export default LocWidget;
