import React from 'react'
import { useParams } from 'react-router-dom';
import JobPostingForm from './JobPostingForm';
import JobList from './JobList';

const JobOpenings = ({companyId}) => {
  return (
    <div>
       <JobList companyId={companyId}/>
      <JobPostingForm companyId={companyId} />
    </div>
  )
}

export default JobOpenings
