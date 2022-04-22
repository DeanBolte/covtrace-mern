const Entry = ({ entry }) => {
  return (
    <div className={"timeline-entry"} >
      <h3> 
        {entry.location}
      </h3>
      <p>{entry.date}</p>
    </div>
  )
}

export default Entry
