import { useState } from 'react'

const AddCovid = ({ onAdd }) => {
    const [date, setDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!date) {
            alert('please add a date')
            return
        }

        onAdd({ date })

        setDate('')
    }

  return (
    <form className="log" onSubmit={onSubmit}>
      <label>Log contraction of covid</label>

      <div className='form-control'>
        <label>Date</label>
        <input type='text' placeholder='DD/MM/YYYY' value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
            
      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddCovid
