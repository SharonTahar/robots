import React from 'react'
import Hello from './Hello'

const HelloList = ({users}) => {
    // const {users} = props
return(
    <div className="main">
    {
      users.map( (item, i) => {
        return <Hello data={item} key={i}/>
      })
    }
    </div>
    )
}
export default HelloList