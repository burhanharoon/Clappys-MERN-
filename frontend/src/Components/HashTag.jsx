import React from 'react';
import PropTypes from 'prop-types';

const HashTag = ({ name }) => {
    return (
        <span className=' px-3 py-1 rounded-full bg-clappys-grey'>
            <span className=' text-pink-500'>#</span> {name}
        </span>
    )
};

HashTag.defaultProps = {
    name: 'Hashtag name'
}

HashTag.prototype = {
    name: PropTypes.string.isRequired
}

export default HashTag;
