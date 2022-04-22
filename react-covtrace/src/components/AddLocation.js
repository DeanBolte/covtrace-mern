import { useState } from 'react'

const AddLocation = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('please add task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="log">
      <label>Log Location visited</label>
      <div className='form-control'>
        <label>Location</label>
        <input />
      </div>

      <div className='form-control'>
        <label>Date</label>
        <input />
      </div>
            
      <input type='submit' value='Save Task' className='btn btn-block'/>
  </form>
  )
}

export default AddLocation
