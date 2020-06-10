import React from 'react';

class AddFishForm extends React.Component {
  render() {
    return (
      <form className='fish-edit'>
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <input name="status" type="text" placeholder="Status" />
        <textarea name="desc" placeholder="Desc" />
        <input name="image" type="text" placeholder="Image" />
        <button type='submit'> + Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;