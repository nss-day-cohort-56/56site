import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { cohort } from './data/cohort'

export const App = () => {

  let students = cohort

  return <>

    <article>
      {
        students.map(s => {
          return <>

            <div className="student_name">{s.name}</div>
            <div className="student_funFact">{s.funFact}</div>
            <div className="student_email">{s.email}</div>
            <div className="student_githubAccount">{s.githubAccount}</div>
            <div className="student_linkedinAccount">{s.linkedinAccount}</div>
            <div className="student_learnMoreAboutMeDescribeYourStrongSuits">{s.learnMoreAboutMeDescribeYourStrongSuits}</div>
            <div className="student_favoriteExperienceNssRelated">{s.favoriteExperienceNssRelated}</div>
            <div className="student_whereAreYouLocatedCityState">{s.whereAreYouLocatedCityState}</div>
            <br />
          </>
        })
      }
    </article>
  </>
}

