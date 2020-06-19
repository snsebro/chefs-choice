import React from 'react';

const ChefProfile = (props) => {
  const { chefProfile } = props;
  return (
    <div className='container'>
      <img src={`${chefProfile.picture.large}`} />
      <span>{`${chefProfile.name.title}, ${chefProfile.name.first} ${chefProfile.name.last}`}</span>
    </div>
  )
}

export default ChefProfile;