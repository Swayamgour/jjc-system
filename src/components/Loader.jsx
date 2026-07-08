// components/Loader.jsx
import React from "react";
// import "./Loader.css";

const Loader = ({ fullPage = true }) => {
    return (
        <div className={`loader-container ${fullPage ? "full-page" : "inline"}`}>
            <div className="loader-wrapper">
                <div className="loader-spinner">
                    <div className="loader-ring"></div>
                    <div className="loader-ring"></div>
                    <div className="loader-ring"></div>
                    <div className="loader-ring"></div>
                </div>
               
            </div>
        </div>
    );
};

export default Loader;