import React from 'react'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import Layout from '@/components/layout/Layout'
function AddNewMeet() {
  const addNewMeet =(newMeet)=>{
    console.log(newMeet)
  }
  return (
    <Layout>
<NewMeetupForm onAddMeetup={addNewMeet}/>

    </Layout>
  )
}
export default AddNewMeet
