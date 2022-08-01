import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
// import { getStudents } from './data/cohort';
import { cohort } from './data/cohort'

export const App = () => {

  let students = cohort

  return <>

    <article>
      {
        students.map(s => {
          return <>

            <div className="student_name">{s.name}</div>

            <br />
          </>
        })
      }
    </article>
  </>
}

