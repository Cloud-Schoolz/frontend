// Dependencies
import React, { useState, useEffect } from 'react';

// Hooks
import { fetchResource } from '../../utils/api';
import { useApi } from '../../utils/hooks/useApi';

// Components
import VolunteerForStudent from './VolunteerForStudent';

// Modules
import { countriesList } from "../../utils/countries";

// Styles
import './VolunteerForStudent.css';

function StudentLandingPage() {
  const [searchParams, setSearchParams] = useState({country: "", day: ""});
  const [volunteers, setVolunteers] = useState([]);
  const [volunteersResponse, setVolunteersResponse] = useApi(() => fetchResource("volunteers"));

  useEffect(() => {
    setVolunteersResponse();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (volunteersResponse.data) {
      const formattedVolunteers = createFormattedVolunteers();
      setVolunteers(formattedVolunteers);
    }
    // eslint-disable-next-line
  }, [volunteersResponse]);

  useEffect(() => {
    handleFilter()
    // eslint-disable-next-line
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
      if (!volunteer.country && !searchParams.country) {
        return volunteer.availability.includes(searchParams.day);
      } else if (!volunteer.country && searchParams.country) {
        return false;
      } else {
        return (
          volunteer.country.includes(searchParams.country) &&
          volunteer.availability.includes(searchParams.day)
        );
      }
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
    <div className="student-container">
      <h2 className="student-welcome">Welcome Student!</h2>
      {
        volunteersResponse.isFetching &&
        <h3 className="student-welcome">Loading...</h3>
      }
      <div className="student-search-container">
        {
          volunteersResponse.isSuccess &&
          <input
            className="student-country search"
            type="text"
            name="country"
            value={searchParams.country}
            onChange={handleSearchChange}
            placeholder="--Filter Country--"
          />
        }
        {
          volunteersResponse.isSuccess &&
          <select
            className="student-day search"
            onChange={handleSearchChange}
            name="day"
          >
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
      </div>
      <div className="volunteers-container">
        {
          volunteers &&
          volunteers.map(volunteer => {
            return <VolunteerForStudent key={volunteer.id} volunteer={volunteer}/>
          })
        }
      </div>
    </div>
  )
}

export default StudentLandingPage;
