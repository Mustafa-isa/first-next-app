import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
import Layout from '@/components/layout/Layout'
const dummy_Data =[
  {
    id: 1,
    title: "Tech Talks",
    image: "https://picsum.photos/200/300",
    address: "123 Main St, San Francisco, CA"
  },
  {
    id: 2,
    title: "Hiking Adventure",
    image: "https://picsum.photos/200/300",
    address: "Mount Tamalpais, Marin County, CA"
  },
  {
    id: 3,
    title: "Board Game Night",
    image: "https://picsum.photos/200/300",
    address: "456 Elm St, Oakland, CA"
  },
  {
    id: 4,
    title: "Coffee Meetup",
    image: "https://picsum.photos/200/300",
    address: "789 Maple Ave, Berkeley, CA"
  },
  {
    id: 5,
    title: "Book Club",
    image: "https://picsum.photos/200/300",
    address: "321 Oak St, San Francisco, CA"
  },
  {
    id: 6,
    title: "Art Exhibition",
    image: "https://picsum.photos/200/300",
    address: "101 Market St, San Francisco, CA"
  },
  {
    id: 7,
    title: "Cooking Class",
    image: "https://picsum.photos/200/300",
    address: "456 Pine St, San Francisco, CA"
  },
  {
    id: 8,
    title: "Yoga Retreat",
    image: "https://picsum.photos/200/300",
    address: "Lake Tahoe, CA"
  },
  {
    id: 9,
    title: "Beer Tasting",
    image: "https://picsum.photos/200/300",
    address: "789 Broadway, Oakland, CA"
  },
  {
    id: 10,
    title: "Volunteering",
    image: "https://picsum.photos/200/300",
    address: "123 Fourth St, San Francisco, CA"
  }
]
function index() {
  return (
    <Layout>
  <MeetupList meetups={dummy_Data}/>


    </Layout>
  )
}

export default index