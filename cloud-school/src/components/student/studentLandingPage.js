import React, { useState, useEffect } from 'react';
import { fetchResource } from '../../utils/api';
import { useApi } from '../../utils/hooks/useApi';
import VolunteerForStudent from './VolunteerForStudent';
import { countriesList } from "../../utils/countries";

function StudentLandingPage() {
  const [searchParams, setSearchParams] = useState({country: "", day: ""});
  const [volunteers, setVolunteers] = useState([]);
  const [volunteersResponse, setVolunteersResponse] = useApi(() => fetchResource("volunteers"));

  useEffect(() => {
    setVolunteersResponse();
  }, []);

  useEffect(() => {
    if (volunteersResponse.data) {
      const formattedVolunteers = createFormattedVolunteers();
      setVolunteers(formattedVolunteers);
    }
  }, [volunteersResponse]);

  useEffect(() => {
    handleFilter()
  }, [searchParams]);
  
  const createFormattedVolunteers = () => {
    const preFormatVolunteers = volunteersResponse.data || [];
    const formattedVolunteers = preFormatVolunteers.map(volunteer => {
      return {
        ...volunteer,
        country: countriesList[volunteer.country_id-1],
        availability: `${
                          volunteer.availability[0]
                            .toUpperCase()
                        }${
                          volunteer.availability
                            .slice(1).toLowerCase()
                        }`
      }
    });
    return formattedVolunteers;
  };

  const handleFilter = () => {
    const formattedVolunteers = createFormattedVolunteers()
    const filteredVolunteers = formattedVolunteers.filter(volunteer => {
      return (
        volunteer.country.includes(searchParams.country) &&
        volunteer.availability.includes(searchParams.day)
      )
    });
    setVolunteers(filteredVolunteers);
  };

  const handleSearchChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Welcome</h2>
      {
        volunteersResponse.isFetching &&
        <h3>Loading...</h3>
      }
      {
        volunteersResponse.isSuccess &&
        <input
          type="text"
          name="country"
          value={searchParams.country}
          onChange={handleSearchChange}
        />
      }
      {
        volunteersResponse.isSuccess &&
        <select onChange={handleSearchChange} name="day">
          <option value="" selected>--Filter Day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
        </select>
      }
      {
        volunteers &&
        volunteers.map(volunteer => {
          return <VolunteerForStudent volunteer={volunteer}/>
        })
      }
    </div>
  )
}

export default StudentLandingPage;
