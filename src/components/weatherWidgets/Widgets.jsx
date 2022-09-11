import '../../stylesheets/Widgets.css'
import { Switch } from '@mui/material';

function Widgets() {
    return ( <div className="widgets-wrapper">
        <div className="widgets-menu">
            <button className="btn">+</button>
            <div className="page-shifter">
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
            </div>
            <div className="switch-div">
                <span>°C</span>
                <Switch />
                <span>°F</span>
            </div>
        </div>
    </div> );
}

export default Widgets;