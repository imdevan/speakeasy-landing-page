import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, className, size }) => {
    if (!icon || icon.length < 1) return null;

    return <i className={`fa fa-${icon} ${className} c-icon`}
        style={{ fontSize: size, height: 'auto' }} />
}

Icon.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}

Icon.defaultProps = {
    icon: '',
    className: '',
    size: 'inherit'
}

export default Icon;
