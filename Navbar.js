import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {

    const title = props.title;

    return (

        <div className="">
            <h1>{title}</h1>
        </div>

    );
};

Navbar.propTypes = {

    title: PropTypes.string.isRequired

};

Navbar.defaultProps = {

    title: "Default App (No Title)"

};

export default Navbar;
