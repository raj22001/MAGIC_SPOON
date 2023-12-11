import { useState } from "react";
//import { TbBrandOpenai } from "react-icons/tb";
{ /* <TbBrandOpenai  size={30}/> */ }
import { GoPersonFill } from "react-icons/go";
import { GiMagicHat } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";

import "./navbarbody.css"

const NavbarBody = () => {

    //const [open , setOpen ] = useState(false);

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isShopNowDropdownVisible, setShopNowDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleShopNowMouseEnter = () => {
    setShopNowDropdownVisible(true);
  };

  const handleShopNowMouseLeave = () => {
    setShopNowDropdownVisible(false);
  };

  return (
    
    <div className="navbarBody-container">
        <div className="g-width-navbarBody-container" >

              <div className="name">
              
                <span><IoIosMenu onClick={<a href="https://magicspoon.com/pages/build-your-own-box"> </a>}  size={30}/></span>

              <div
            className="about-us"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3>ABOUT US</h3>
            
          </div>
                <h1>MAGIC <br/> SPOON</h1>
              <div className="shop-now"
                onMouseEnter={handleShopNowMouseEnter}
                onMouseLeave={handleShopNowMouseLeave}
              >
                <h3>SHOP NOW</h3>
              </div>
                <div className="icon-navbarBody">
                  <GoPersonFill color="purple" size={35}/>
                  <GiMagicHat className="hat" color="purple" size={35}/>
              </div>

              {isDropdownVisible && (
            <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {/* Add your dropdown menu content here */}
              <p>US VS. THEM</p>
              <p>OUR STORY</p>
            </div>
          )}

              {isShopNowDropdownVisible && (
                <div className="dropdown-menu2" onMouseEnter={handleShopNowMouseEnter} onMouseLeave={handleShopNowMouseLeave}>
                {/* Add your SHOP NOW dropdown menu content here */}
              <p>CEREAL</p>
              <p>TREATS</p>
              <p>BUNDLES</p>
            </div>
          )}

            </div>
           
        </div>
    </div>
  )
}

export default NavbarBody
