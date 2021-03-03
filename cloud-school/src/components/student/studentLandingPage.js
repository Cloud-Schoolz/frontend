import React, { useEffect } from 'react'
import { fetchResource } from '../../utils/api';
import { useApi } from '../../utils/hooks/useApi';
import VolunteerForStudent from './VolunteerForStudent';

function StudentLandingPage() {
  const [volunteersResponse, setVolunteersResponse] = useApi(() => fetchResource("volunteers"))

  useEffect(() => {
    setVolunteersResponse();
  }, [])

  console.log(volunteersResponse)

  return (
    <div>
      <h2>Welcome</h2>
      {
        volunteersResponse.isFetching &&
        <h3>Loading...</h3>
      }
      {
        volunteersResponse.isSuccess &&
        volunteersResponse.data.map(volunteer => {
          return <VolunteerForStudent volunteer={volunteer}/>
        })
      }
    </div>
  )
}

export default StudentLandingPage;
