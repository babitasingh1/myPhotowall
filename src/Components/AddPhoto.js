import React from 'react';

function AddPhoto(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (description && imageLink) {
      props.onAddPhoto(post);
    }
  }

  return (
    <div>
      <h1> Add new photo </h1>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Link' name='link' />
          <input type='text' placeholder='Desciption' name='description' />
          <button> Post </button>
        </form>
      </div>
    </div>
  );
}

export default AddPhoto;
