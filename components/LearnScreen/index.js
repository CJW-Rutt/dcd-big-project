import React, { useState, useEffect, createRef } from 'react';
import Image from 'next/image';
import styles from "./Learn.module.css"
import LearnCard01 from '../LearnCard01';
import LearnCard02 from '../LearnCard02';
import InfoPestsClimate from '../InfoPestsClimate';
import InfoPollination from '../InfoPollination';
import TextBubble from '../TextBubble';
import lottie from 'lottie-web'

export default function LearnScreen({ image, toggleNavElements }) {
    const [activeSection, setActiveSection] = useState(null);

    const handleClose = () => {
        toggleNavElements();
        setActiveSection(null);
    };

    const handleOpenSection = (section) => {
        toggleNavElements();
        setActiveSection(section);
    };

    let animationContainer1 = createRef();
    let animationContainer2 = createRef();
  
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer1.current,
        rerender: 'svg',
        loop: true,
        pingpong: true,
        autoplay: true,
        path: './animations/pollen.json',
      });
  
      return () => anim.destroy();
    }, []);
  
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer2.current,
        rerender: 'svg',
        loop: true,
        pingpong: true,
        autoplay: true,
        path: './animations/pollen.json',
      });
  
      return () => anim.destroy();
    }, []);

  return (
    <div className={styles.main__container}>

        <div className={styles.container}>
            <div className={styles.left} onClick={() => {
                setTimeout(() => {
                handleOpenSection('InfoPestsClimate');
                }, 500);
            }}>
                <LearnCard01/>
                <Image
                    className={styles.arrow__line01}
                    src="/carousel/arrow-line.svg"
                    width={60}
                    height={60}
                />
                <Image
                    onClick={() => 
                        setTimeout(() => {
                            handleOpenSection('InfoPestsClimate');
                        }, 500)
                    }
                    className={styles.whats}
                    src="/carousel/whats-happening-learn.svg"
                    width={190}
                    height={190}
                />

            </div>
            
            <div className={styles.right} onClick={() => {
                setTimeout(() => {
                handleOpenSection('InfoPollination');
                }, 500); 
            }}>
                <h1 className={styles.h1}>Let's learn together!</h1>
                <div className={styles.right__card}>
                    <LearnCard02/>
                    <Image
                        className={styles.arrow__line02}
                        src="/carousel/arrow-line.svg"
                        width={60}
                        height={60}
                    />
                    <Image
                        onClick={() => 
                            setTimeout(() => {
                            handleOpenSection('InfoPollination');
                            }, 500)
                        }
                        className={styles.why}
                        src="/carousel/why-learn.svg"
                        width={230}
                        height={230}
                    />

                    {<div 
                        className={styles.animation__container} 
                        ref={animationContainer1}
                    />}

                    {<div 
                        className={styles.animation__container02} 
                        ref={animationContainer2} 
                    />}

                </div>
            </div>
        </div>

        {activeSection === 'InfoPestsClimate' && (
            <TextBubble onClose={handleClose} toggleNavElements={toggleNavElements}>
                <InfoPestsClimate onClose={handleClose} toggleNavElements={toggleNavElements} />
            </TextBubble>
        )}

        {activeSection === 'InfoPollination' && (
            <TextBubble onClose={handleClose} toggleNavElements={toggleNavElements}>
                <InfoPollination onClose={handleClose} toggleNavElements={toggleNavElements} />
            </TextBubble>
        )}

        <Image
          className={styles.cloud01}
          src="./carousel/cloud.svg"
          height={100}
          width={200}
        />

        <Image
          className={styles.cloud02}
          src="./carousel/cloud-2.svg"
          height={100}
          width={200}
        />

        <Image
          className={styles.cloud03}
          src="./carousel/cloud-2.svg"
          height={100}
          width={200}
        />

    </div>

  );
}
