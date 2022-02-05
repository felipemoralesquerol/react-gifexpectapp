import React from 'react';

export const GitGridItem = ({ id, url, title }) => {

    //console.log(img);

    return (
        <div className="animate__animated animate__bounce" >
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
};
