import React from 'react'

const GetSum = props => {

  	//props.init()
  	console.log(props);
	return(<p> 
           
           {props.a} + {props.b} + {props.c} = {props.init()} 
           
    </p>);
       
}

export default GetSum