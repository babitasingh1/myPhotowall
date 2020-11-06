import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router-dom';

function Photowall(props) {
  return (
    <div>
      <Link className='addIcon' to='/AddPhoto'></Link>

      <div className='photoGrid'>
        {props.posts.map((post, index) => (
          <Photo key={index} onRemovePhoto={props.onRemovePhoto} post={post} />
        ))}
      </div>
    </div>
  );
}
export default Photowall;
