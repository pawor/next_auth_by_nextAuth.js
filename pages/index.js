import React from 'react'
import { signOut, getSession } from 'next-auth/client'

const Home = ({session}) => {
  console.log(session)
  return (
    <div>
      <button onClick = {() => signOut()}>signOut</button>
    </div>
  )
}
export async function getServerSideProps(context){
  const session = await getSession(context)

  if(!session){
    return {
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }
  return {
    props:{session}
  }
}
export default Home