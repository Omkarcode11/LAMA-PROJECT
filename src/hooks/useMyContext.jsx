

import React, { useContext } from 'react'
export let myContext = useContext()

function useMyContext({children}) {
  let [event,setEvents] = useState([])
  return (
    
    <div>useMyContext</div>
  )
}

export default useMyContext