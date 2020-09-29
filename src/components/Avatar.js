import React from 'react';
import avatar from '../assets/avatar.jpg';

class Avatar extends React.Component {
  render() {
    return (
      <div className='avatar-wrapper'>
        <img src={avatar} alt='user avatar' className='image-size avatar' />
      </div>
    );
  }
}

export default Avatar;