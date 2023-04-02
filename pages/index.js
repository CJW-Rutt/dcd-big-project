import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonGetStarted from '../components/button-get-started'
import ButtonBuzzIt from '../components/button-buzz-it'
import ButtonLetsDoIt from '../components/button-lets-do-it'
import Next from '../components/next'
import Previous from '../components/previous'
import Close from '../components/close'
import LearnWhat from '../components/learn-what'
import LearnWhy from '../components/learn-why'
import TextBubble from '../components/text-bubble'
import HappyBoo from '../components/happy-boo'

export default function Home() {
  return (
    <>
      <Head>
        <title>BeeBoo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Truculenta:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <ButtonGetStarted/>
        <ButtonBuzzIt/>
        <ButtonLetsDoIt/>
        <Previous/>
        <Next/>
        <Close/>
        <LearnWhat/>
        <LearnWhy/>
        <TextBubble component='quiz' />
        <HappyBoo />
      </main>
    </>
  )
}
