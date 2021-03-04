import React from 'react';

export default function VolunteerForStudent({ volunteer }) {
  const {name, email, country, availability } = volunteer;

  return (
    <div className="volunteer-container">
      <h3>{name}</h3>
      <hr className="name-line"/>
      <a href={`mailto:${email}`} className="volunteer-email">{email}</a>
      <a href={`http://maps.google.com/?q=${country}`} target="_blank" rel="noreferrer" className="volunteer-country">{country} &#9992;</a>
      <p>Available on {availability}</p>
    </div>
  )
}
