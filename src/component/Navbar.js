import React from "react";
import { Link } from "react-router-dom";


function Navbar(){

  

    return(
   <nav>
   <Link to= '/'>Home</Link>
   <Link to= '/job'>Job</Link>
   <Link to= '/recruiter'>Recruiter</Link>
   <Link to= '/about'>AOB</Link>
   </nav>


    )
}

export default Navbar;