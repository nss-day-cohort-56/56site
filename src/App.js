import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {

  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  let locationArray = []

  return <>
    <header>
      <h1>COHORT 56 HEADER HERE MFS</h1>
    </header>

    <section>
      <h3>Maybe a description or something here??</h3>
    </section>

    <article>
      {
        data?.cohort?.map(s => {
          return <>
            <div className="student_name">{s.name}</div>
            <div className="student_funFact">{s.funFact}</div>
            <a href={`mailto:${s.email}`}>email me!</a><br />
            <a href={s.githubAccount} target="_blank">github</a><br />
            <a href={s.linkedinAccount} target="_blank"> Linkedin Icon</a><br />
            <div className="student_learnMoreAboutMeDescribeYourStrongSuits">{s.learnMoreAboutMeDescribeYourStrongSuits}</div>
            <div className="student_favoriteExperienceNssRelated">{s.favoriteExperienceNssRelated}</div>
            <div className="student_whereAreYouLocatedCityState">{s.whereAreYouLocatedCityState}</div>
            <br />
          </>
        })
      }
    </article>

    <section>
      <h3>LINK TO DEMO DAY</h3>
    </section>

    <section>
      <h3>TECH STACK </h3>
      <section id="techStack">
        <h3>TECH STACK</h3>
        <section>
          <h4>We all learned the following</h4>
          <div>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>ReactJS</p>
            <p>React Hooks</p>
            <p>Python</p>
            <p>Django</p>
            <p>SQL Server</p>
            <p>VS Code</p>
            <p>JSON Server</p>
            <p>NPM</p>
            <p>Postman</p>
            <p>dbdiagram</p>
            <p>Bulma</p>
            <p>API</p>
            <p>Wireframing</p>
            <p>Team Collab</p>
            <p>CRUD</p>
            <p>Agile</p>
          </div>
        </section>
      </section>
    </section>

    <section>
      <h3>WHERE WE'RE LOCATED</h3>
      <section className="locations">
        {
          data?.cohort?.map(data => {
            if (!(locationArray.includes(data.whereAreYouLocatedCityState))) {
              locationArray.push(data.whereAreYouLocatedCityState)
            }
          })
        }
        {
          locationArray.map(location => {
            return <section className="location">
              <div>{location}</div>
            </section>
          })
        }
      </section>
    </section>

      <section>
        <h3>THANK YOUS</h3>

      </section>
  </>
}

