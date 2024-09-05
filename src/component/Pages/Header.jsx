import React from "react";
import Button from '@mui/material/Button';
import '../style/header.css';
import logo from '../images/logo.svg';
import mobilelogo from '../images/smclogomobile.svg';


const Header=()=>
{
    return(
<>
<header>
<div className="logo">
<img src={logo}  className="dlogo"alt="" title="" height="50"/>
<img src={mobilelogo}  className="mlogo"alt="" title="" height="50"/>
</div>

<div className="username">
<span className="ucccode">0111122223333444</span>
<span className="loginName">Prashant Kumar Dubey</span>
<span class="logbutton"><Button variant="contained" size="small">Log Out</Button></span>
</div>
<div className="clr"></div>
</header>

</>
    )
}

export default Header;