import Image from 'next/image'
import styles from './QuizButton.module.css';

export default function QuizButton ({ answer, src, onClick, fadeOut }) {
    const buttonClass = fadeOut ? 'fadeOut' : '';

    return (
        <div onClick={onClick} className={styles.quizButton}>
            <div className={styles.quizButtonPrimary}>
                <Image src={src} height={61} width={61} />
                <div className={styles.answerText}>{answer}</div>        
            </div>
            <div className={styles.quizButtonBackground} />
        </div>
    );
};
