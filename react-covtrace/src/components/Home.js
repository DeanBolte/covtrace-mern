import { useState } from "react"

import AddLocation from "./AddLocation"
import AddCovid from "./AddCovid"
import TimeLine from "./TimeLine"

const Home = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      location: "School",
      date: "16/04/2022",
    },
    {
      id: 2,
      location: "Doctors",
      date: "17/04/2022",
    },
    {
      id: 3,
      location: "Grocery Store",
      date: "18/04/2022",
    },
  ]);

  return (
    <div>
      <div className="home">
        <TimeLine entries={entries} />

        <div className="home-forms">
          <AddLocation />
          <AddCovid />
        </div>
      </div>
    </div>
  )
}

export default Home
