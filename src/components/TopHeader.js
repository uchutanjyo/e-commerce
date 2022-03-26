import React from 'react';


const TopHeader = ({children}) => {
  return (

    <div className='top-header'>

<div className='right'>
    <img src="https://images.unsplash.com/photo-1648290023792-d4936450a847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>

</div>

<div className='left'>
    <h1>Buy anything from us.</h1>
    <p>Really, we have everything! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem voluptates vero aliquid. Labore voluptate saepe, accusamus itaque voluptas dolorem officiis nostrum fugit deleniti adipisci, harum, at tempore necessitatibus id?</p>
</div>
    </div>
  );
};

export default TopHeader;
