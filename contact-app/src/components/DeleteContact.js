import React from 'react';
import {Link} from "react-router-dom";

function DeleteContact(props) {
    
    console.log(props);
    const id = props.location.state.contact.id;

    const deleteContactHandler = (id) => {
        props.getContactId(id.id);
    }

    return (
        <div className="ui main">
            <h2>Are you sure you want to delete the contact ?</h2>
            <Link to="/">
            <button className="ui button red" onClick={()=> deleteContactHandler({id})}>Yes</button>
            </Link>
            <Link to="/">
            <button className="ui button">No</button>
            </Link>
        </div>
    )
}

export default DeleteContact;
