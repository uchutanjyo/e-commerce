import React from 'react';


const Post = ({id, date, children}) => {
  return (
    <div className='post'>
      <h5 className='Post-date'>{date}</h5>
{children}
    </div>
  );
};

export default Post;
