import React from 'react';

export default function VolunteerForStudent({ volunteer }) {
  const {name, email, country, availability } = volunteer;

  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{country}</p>
      <p>Available on {availability}</p>
    </div>
  )
}
