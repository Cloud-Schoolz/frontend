import React from 'react';
import { countriesList } from "../../utils/countries";

export default function VolunteerForStudent({ volunteer }) {
  const {name, email, country_id, availability } = volunteer;
  const formattedAvailability = `${availability[0].toUpperCase()}${availability.slice(1).toLowerCase()}`;
  const formattedCountry = countriesList[country_id - 1];

  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{formattedCountry}</p>
      <p>Available on {formattedAvailability}</p>
    </div>
  )
}
