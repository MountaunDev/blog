import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title}: {title: string} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>MountainDev | {title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Personal blog" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;