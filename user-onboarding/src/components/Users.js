import React from "react";
import {AllUsersContainer, IndividualUserContainer} from "../Styles";

const Users = props => {
    return (
        <AllUsersContainer>
            {props.users.map(user=>(
                <IndividualUserContainer key={Date.now()}>
                    <span className="userinfo">Name: <span className="userinfoDetail">{user.name}</span></span>
                    <span className="userinfo">Email: <span className="userinfoDetail">{user.email}</span></span>
                    <span className="userinfo">Password: <span className="userinfoDetail">{user.password}</span></span>
                </IndividualUserContainer>
            ))}
        </AllUsersContainer>
    );
}

export default Users;