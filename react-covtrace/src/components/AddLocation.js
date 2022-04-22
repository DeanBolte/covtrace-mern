import { useState } from 'react'

const AddLocation = ({ onAdd }) => {
    const [location, setLocaiton] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!location || !date) {
            alert('please fill out form')
            return
        }

        onAdd({ location, date })

        setLocaiton('')
        setDate('')
    }

  return (
    <form className="log" onSubmit={onSubmit}>
      <label>Log Location visited</label>
      <div className='form-control'>
        <label>Location</label>
        <input type='text' placeholder='Add Location' value={location} onChange={(e) => setLocaiton(e.target.value)} />
      </div>

      <div className='form-control'>
        <label>Date</label>
        <input type='text' placeholder='DD/MM/YYYY' value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
            
      <input type='submit' value='Save Entry' className='btn btn-block'/>
  </form>
  )
}

export default AddLocation
