import React from 'react'


const GetSum = props => {

  	//console.log('GetSumProps', props)
	return(<p> 
           
           {props.a} + {props.b} + {props.c} = {props.d}
           
    </p>);
       
}

export default GetSum