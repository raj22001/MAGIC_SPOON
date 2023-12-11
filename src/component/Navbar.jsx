import { useState , useEffect } from "react"
import "./navbar.css"


const Navbar = () => {

    const header = [
        {
          id:1,
          title:"🎁 FREE Cinnamon Roll box with $50+ Order 🎁"
        },
        {
          id:2,
          title:"✨60,000+ 5-Star Reviews✨"
        },
        {
          id:3,
          title:"✨ FREE Magic Stroon with $65+ Order✨"
        }
    ]


    const [currentTitle , setCurrentTitle] = useState(0);

    useEffect (() => {
      const intervalId = setInterval(() =>{
        setCurrentTitle((prevIndex) => (prevIndex+1) % header.length)
      } , 8000);
      return () => clearInterval(intervalId);
    },[header.length]);


  return (
    <div className="nav-container">
      <div className="gradient-banner">
            <h3>{header[currentTitle].title}</h3>
      </div>
    </div>
  )
}

export default Navbar
