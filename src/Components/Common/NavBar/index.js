import "./styles.css"
import { Link } from "react-router-dom"

function Navbar({ isMerchant }) {
    const reDirection = isMerchant ? "/merchant/dashboard" : "/user/dashboard"

    return (
        <div className="nav">
            <Link to={reDirection}><div className="nav-left">
                <span>Qshopy .</span>
            </div></Link>
            <div className="nav-right">
                {isMerchant && <Link to="/add-product">Add Product</Link>}
                <Link onClick={() => localStorage.removeItem("token")} to="/">Logout</Link>
            </div>
        </div>
    )

}

export default Navbar