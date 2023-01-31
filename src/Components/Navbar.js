import React from "react";
import {NavLink, Link , withRouter } from "react-router-dom";


const Navbar = (props) => {
    setTimeout(()=>{
        props.history.push('./about')
    }, 2000);
    return (
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Gloria</a>
            <div className='ui right floated header'>
                <button className='ui button'><NavLink to='/'>HOME </NavLink></button>
                <button className='ui button'><NavLink to='/About'>ABOUT </NavLink></button>
            <button className='ui button'><NavLink to='/Contact'>CONTACT </NavLink></button>
        </div>

</nav>
)
}
export default withRouter(Navbar)