import React from 'react'

const Echo = (props) => {

  console.log('props', props.echo)

  return(<div>
            <p className="echo">Echo:</p>
            <p>{props.echo}</p>

       </div>)
}
  
  
  
export default Echo