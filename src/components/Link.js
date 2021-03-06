import React from 'react'
import {PropTypes} from 'prop-types'

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span className="text-danger">{children}</span>
    }

    return (
        <span className="text-info"><a href="#"
                 onClick={e => {
                     e.preventDefault();
                     onClick()
                 }}
        >
            {children}
        </a></span>

    )
};

Link.prototypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link