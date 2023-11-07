import "./styles.css"
import { Link } from "react-router-dom"

function Navbar() {


    return (
        <div className="nav">
            <Link to="/homepage"><div className="nav-left">
                <span>Qshopy .</span>
            </div></Link>
            <div className="nav-right">

                <Link onClick={() => localStorage.removeItem("token")} to="/">Logout</Link>
            </div>
        </div>
    )

}

export default Navbar