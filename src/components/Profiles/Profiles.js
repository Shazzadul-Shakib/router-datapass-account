import React from 'react';

const Profiles = (props) => {
  const { name, email } = props.data;
  // console.log(email);
  return (
    <div>
      <h1>Here is the profile section</h1>
      <h2>Name: { name}</h2>
      <h2>Email: { email}</h2>
    </div>
  );
};

export default Profiles;