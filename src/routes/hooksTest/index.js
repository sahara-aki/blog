import React,{ useState }  from 'react'
import ChildComp from './Child'

function ParentComp () {
  const [ count, setCount ] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <div style={{marginTop:100}}>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp />
    </div>
  );
}

export default ParentComp;