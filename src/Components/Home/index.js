import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Common/Button'
import "./styles.css"

function Home() {
    return (
        <div className='home'>
            {/* testibng */}
            <div className='home-header'>
                <Link to="/"><span className='home-title'>Q <span>Shopy .</span></span></Link>
            </div>
            <div className='home-main'>
                <span>The ultimate shoping destination .</span>
                <div>
                    <Button value="USER" onClick={() => window.location.href = "/login/user"} />
                    <Button value="MERCHANT" onClick={() => window.location.href = "/login/merchant"} />
                </div>
            </div>

        </div>
    )
}

export default Home