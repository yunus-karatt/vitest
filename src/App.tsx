import { useState } from 'react'
import './App.css'

// function App({name = 'shubham'}:{name?:string}) {

//   const [count,setCount] = useState(0)

//   return (
//   <div className="app">
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(prev=>prev+1)}>
//       increment
//     </button>
//   </div>
//   )
// }

// export default App
function App({ name = 'shubham' }: { name?: string }) {

  const [data, setData] = useState<{ name: string } | null>(null)

  const fetchUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data: { name: string } = await res.json()
    console.log({data})
    setData(data)
  }
  return (
    <div className="app">
      {data && <h1 className=''>{data.name}</h1>}
      <button onClick={fetchUser}>Fetch user</button>
    </div>
  )
}

export default App


