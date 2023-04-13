import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonGetStarted from '../components/ButtonGetStarted'
import ButtonBuzzIt from '../components/ButtonBuzzIt'
import ButtonLetsDoIt from '../components/ButtonLetsDoIt'
import Next from '../components/Next'
import Previous from '../components/Previous'
import Close from '../components/Close'
import LearnWhat from '../components/LearnWhat'
import LearnWhy from '../components/LearnWhy'
import TextBubble from '../components/TextBubble'
import HappyBoo from '../components/HappyBoo'
import TeamPage from '../components/team-page'
import SplashScreen from '../components/SplashScreen'
import Quiz from '../components/Quiz'

export default function Testing() {
  return (
    <>
      <Head>
        <title>BeeBoo TESTING</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TextBubble>
            <Quiz />
        </TextBubble>
      </main>
    </>
  )
}