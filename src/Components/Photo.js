import React from 'react';

function Photo({ post, onRemovePhoto }) {
  return (
    <figure className='figure'>
      <img className='photo' src={post.imageLink} alt={post.description}></img>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className='button-container'>
        <button
          onClick={() => {
            onRemovePhoto(post.id);
          }}
          className='remove-button'
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

export default Photo;
