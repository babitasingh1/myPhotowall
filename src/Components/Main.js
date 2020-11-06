import React, { useState } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

function Main() {
  const [posts, setposts] = useState([
    {
      id: 0,
      description: 'beautiful flower',
      imageLink:
        'https://i.pinimg.com/originals/ca/97/91/ca9791ad522c7f2b6e77c2cbd1e80665.jpg',
    },
    {
      id: 1,
      description: 'beautiful landscape',
      imageLink:
        'https://images.unsplash.com/photo-1560421683-2587f1591d30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80',
    },
    {
      id: 2,
      description: 'On a vacation!',
      imageLink:
        'https://images.unsplash.com/photo-1598899018780-e9d6167f8da3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ]);

  function removePhoto(postRemoved) {
    const newposts = posts.filter((post) => post.id !== postRemoved);
    setposts(newposts);
  }

  function addPhoto(postSubmitted) {
    const newposts = posts.concat([postSubmitted]);
    setposts(newposts);
  }

  return (
    <div>
      <Route
        exact
        path='/'
        render={() => (
          <div>
            <h1>PhotoWall</h1>
            <PhotoWall posts={posts} onRemovePhoto={removePhoto} />
          </div>
        )}
      />

      <Route
        path='/AddPhoto'
        render={({ history }) => (
          <AddPhoto
            onAddPhoto={(addedPost) => {
              addPhoto(addedPost);
              history.push('/');
            }}
          />
        )}
      />
    </div>
  );
}

export default Main;
