import React from 'react'

const Profile = (props) => 
				(<div className="row pt-5">
                                <div className="col-sm">
                                    First Name
                                    <input type='text' id="firstName"/>
                                </div>
                                <div className="col-sm">
                                  Last Name
                                    <input type='text' id="lastName"/>
                                </div>
                                <div className="col-sm">
                                  User Name
                                    <input type='text' id="userName"/>
                                </div>
              	</div>)


export default Profile