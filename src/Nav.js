import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {

    // const [show, handleShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);


    const [show, handleShow] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://th.bing.com/th/id/OIP.3CG6lZKO4b8UGEM56iISNgAAAA?pid=ImgDet&rs=1"
                alt=""
                />

            <img
                className="nav__avater"
                src="https://th.bing.com/th/id/R.945f33b643f2ceffcdae90fb57c61854?rik=ZbauAhRVa2agEw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2fgeneric-avatar-icon-3.png&ehk=MEKRKETvvufVVLoShHum%2baEfkHOctyKClaf6qCu3Msg%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                />

        </div>
        )
    }

export default Nav;