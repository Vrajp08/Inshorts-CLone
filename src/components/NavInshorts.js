import React from 'react'
import "./NavInshorts.css"
import HumburgerDrawer from "./HumburgerDrawer"


const NavInshorts = ({setcategory}) => {
    return (
        <div className='nav' >
            <HumburgerDrawer setcategory={setcategory} />
            <div className="icon">

            </div>
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height="80%" />
        </div>

    )
}

export default NavInshorts