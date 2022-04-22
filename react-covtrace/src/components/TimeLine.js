import Entry from "./Entry"

const TimeLine = ({ entries }) => {
  return (
    <div className='timeline'>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

export default TimeLine
