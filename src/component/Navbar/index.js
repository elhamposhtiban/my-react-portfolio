import React, {useState} from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

const [showPage, setShowPage] = useState(false)

const showHandler = () => setShowPage(true)
const closeHandler = () => setShowPage(false)

    return (

    <div className="navigation" showPage = {showPage}>

        <input  type="checkbox" className="navigation__checkbox" id="navi_toggle"/>
        <label htmlFor="navi_toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background"></div>
        <nav className="navigation__nav">
            <ul className="navigation__list">


                <li className="navigation__item">
                <Link to="/bio" className="navigation__link" onClick= {showHandler} >Home</Link>
                </li>
                <li className="navigation__item">
                <Link to="/contact" className="navigation__link" onClick= {showHandler}>contact</Link>
                </li>
                <li className="navigation__item">
                <Link to="/portfolio" className="navigation__link" onClick= {showHandler}>portfolio</Link>
                </li>
            </ul>
        </nav>
    </div>

    )
}

export default Navbar;



            {/* <li className="navigation__item">
                <a href="/bio" className="navigation__link"   >Home</a>
            </li>
            <li className="navigation__item">
                <a href="/contact" className="navigation__link" >contact</a>
            </li>
            <li className="navigation__item">
                <a href="/portfolio" className="navigation__link"  >portfolio</a>
            </li> */}