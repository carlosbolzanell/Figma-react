import "./Header.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return(
        <header>
            <div className="logo-header">
                <img src="./assets/logo.png" alt="logo" />
                <h2>Furniro</h2>
            </div>
            <div className="links-header">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className="icons-header">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </header>
    )
}