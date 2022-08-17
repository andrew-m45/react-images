import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '80px', margin: 'auto', display: 'block' }}
      className='spinner'
    />
  )
}

export default Spinner