import Dp from "../../dp.jpg";
import "../../stylesheets/Header.css";

function Header() {
  return (
    <div className="wrapper-header">
      <div className="txt">
        <h4>Welcome back Isabella!</h4>
        <p>Check out today's weather information</p>
      </div>
      <div className="profile-menu">
        <span class="material-icons-outlined">more_horiz</span>
        <img src={Dp} alt="profile pic" srcset="" />
      </div>
    </div>
  );
}

export default Header;
