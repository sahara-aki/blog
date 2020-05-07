import React from 'react'

function ChildComp () {
  console.log('render child-comp ...')
  return <div>Child Comp ...</div>
}

export default React.memo(ChildComp);