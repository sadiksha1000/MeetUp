import React from 'react'
import { useState,useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {
  const[isLoading,setisLoading]=useState(true);
  const[loadedMeetups,setLoadedMeetups]=useState([]); 

  useEffect(()=>{
    fetch('https://react-b30f6-default-rtdb.firebaseio.com/meetups.json').then((response)=>{
      return response.json();
    }).then((data)=>{
      const meetups=[];

      for(const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
        setisLoading(false);
        setLoadedMeetups(meetups);
    });
  },[isLoading]);


  function addMeetupHandler(meetupData){
    if(isLoading){
      return (
        <section>
          <p>Loading..........</p>
        </section>
      )
    }
}

    return (
       <section>
           <h1>All Meetups</h1>
           <MeetupList meetups={loadedMeetups}/>
       </section>
    )
}

export default AllMeetups
