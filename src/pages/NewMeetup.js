import React from 'react'
import {useNavigate} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup() {
    // useNavigate is used to manipulate or navigate away from certain URL. In ES6, useHistory replaced by useHistory
    const navigate=useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-b30f6-default-rtdb.firebaseio.com/meetups.json',{
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{navigate('/')});
    }

    return (
        <section>
            <h1>Add New MeetUp</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetup
