"use client"
import styles from "./page.module.css";
import {signIn,signOut,useSession} from "next-auth/react"

export default function Home() {
  const {data:session}=useSession();
  console.log(session);
  if(session){
          return (
            <>
            <p>you are signin in as {session.user.email} </p>
            <button onClick={()=> signOut()}>sign out</button>
            </>
          )
        }
  return (
    <div className={styles.page}>
        <p>please sign in</p>
        <button onClick={()=>signIn()}>sign in</button>
    </div>
  );
}