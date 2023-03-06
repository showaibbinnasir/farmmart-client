import React from 'react';

const Posts = ({posts}) => {
    return (
        <div>
            {
                posts.images.map(x=> <li>{x}</li>)
            }
        </div>
    );
};

export default Posts;