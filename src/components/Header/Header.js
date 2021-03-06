import React from 'react';
import PropTypes from "prop-types";

import HeaderItem from "../../components/HeaderItem/HeaderItem";

/** 
 * Add your HeaderItems into this component and see the result!
 * 
 * default items are:
 * - Restaurants
 * - Hotels
 * - Locations
*/

class Header extends React.Component {
    render() {
        const {
            hasNavigation,
            previousPageTitle,
            backroundColor,
            size,
            children
        } = this.props;

        return (
            <div className="header">
                <HeaderItem title="Restaurants" />
                <HeaderItem title="Hotels" />
                <HeaderItem title="Locations" />
                {children}
            </div>
        );
    }
}

Header.propTypes = {
    hasNavigation: PropTypes.bool,
    previousPageTitle: PropTypes.string,
    backroundColor: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.object
};

export default Header;