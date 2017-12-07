import React from 'react'
import FilterLink from '../containers/FilterLink'
import './Footer.css';

const Footer = () => (
    <p className="footer">
        <span className="text-muted showText"> SHOW:</span>
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {"|"}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {"|"}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </p>
);

export default Footer