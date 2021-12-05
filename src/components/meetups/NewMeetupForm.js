import React from 'react'
import {useRef} from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../UI/Card';

function NewMeetupForm(props) {
    // useRef used for reading inputs
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();

    function submitHandler(event){
        // Blocks default actions of JS
        event.preventDefault();

        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredAddress=addressInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;

        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        };
        
        props.onAddMeetup(meetupData);

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>MeetUp Title</label>
                    <input type='text' required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>MeetUp Image</label>
                    <input type='url' required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>MeetUp Address</label>
                    <input type='address' required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>MeetUp Description</label>
                    <textarea required id="description" rows='5' ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>   
        </Card>
    )
}

export default NewMeetupForm
