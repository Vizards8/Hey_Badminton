import React, { useState, useEffect } from "react"
import { Card, List } from "antd"
import MyBreadcrumb from "@/common/MyBreadcrumb"
import "./Tournament.css"
import { http } from '@/utils'

// const data = [
//   {
//     title: "BWF World Championships",
//     description:
//       "The BWF World Championships is the most prestigious tournament in badminton, featuring the world's best players competing for the title of world champion in five disciplines.",
//     date: "August 21-27, 2023",
//     location: "Tokyo, Japan",
//     registrationLink: "https://development.bwfbadminton.com/register-official",
//     pic: "https://bwfworldchampionships.bwfbadminton.com/wp-content/plugins/bwf-menu-system/images/logo-wch-mobile-09.png",
//   },
//   {
//     title: "YONEX All England Open",
//     description:
//       "The YONEX All England Open is one of the oldest and most prestigious badminton tournaments in the world, part of the BWF World Tour, and considered one of the five most prestigious events in the tour.",
//     date: "March 7-12, 2023",
//     location: "Birmingham, England",
//     registrationLink: "https://www.allenglandbadminton.com/",
//     pic: "https://www.allenglandbadminton.com/wp-content/uploads/2021/09/All-England-Badminton.png",
//   },
//   {
//     title: "TOTAL BWF Sudirman Cup",
//     description:
//       "The TOTAL BWF Sudirman Cup is a mixed team badminton championship held every two years. It features teams from different countries competing in a knockout format tournament, named after Dick Sudirman, a former Indonesian badminton player and coach.",
//     date: "May 22-29, 2023",
//     location: "Mumbai, India",
//     registrationLink: "https://bwfsudirmancup.bwfbadminton.com/",
//     pic: "https://extranet.bwf.sport/docs/events/4708/logo-colour/TotalEnergies_BWF_Sudirman%20Cup_2023.svg",
//   },
// ]

const Tournament = () => {

  const [tounaments, setAllTournaments] = useState([])

  useEffect(() => {
    async function getAll () {
      const result = await http.get("/tournament/getAll")
      //console.log(result.data.data)
      setAllTournaments(result.data.data)
    }
    getAll()
  }, [])

  // console.log(tounaments)

  return (
    <div className="tournament-wrapper">
      <MyBreadcrumb paths={["Tournament"]} />
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={tounaments}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              className="tournament-card"
              cover={
                <img
                  alt="Tournament Logo"
                  src={item.headerUrl}
                  className="tournament-pic"
                />
              }
            >
              <Card
                title={item.title}
                extra={
                  <a
                    href={item.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                }
              >
                <p>{item.detail}</p>
                <p>Date: {item.date}</p>
                <p>Location: {item.location}</p>
              </Card>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default Tournament
