import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import TextBubble from '../components/TextBubble';
import ActivitiesMain from '../components/ActivitiesMain';
import ActivitiesMasonBees from '../components/ActivitiesMasonBees';
import InfoPestsClimate from '../components/InfoPestsClimate'
import InfoPollination from '../components/InfoPollination';

export default function Testing() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            <Head>
                <title>BeeBoo TESTING</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {isVisible && (
                    <TextBubble onClose={handleClose}>
                        <InfoPollination onClose={handleClose} />
                    </TextBubble>
                )}
            </main>
        </>
    );
} 
//