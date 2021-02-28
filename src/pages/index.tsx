import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { CountdownProvider } from '../contexts/CountdownContext'
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
   <div className = {styles.container}>
     <Head>
       <title>Inicio | move.it</title>
     </Head>
    <ExperienceBar/>
    <CountdownProvider>
    <section>
      <div>
        <Profile />
        <CompletedChallenges/>
        <CountDown/>
      </div>
      <div>
        <ChallengeBox/>
      </div>
    </section>
    </CountdownProvider>
  </div>
  )
}
