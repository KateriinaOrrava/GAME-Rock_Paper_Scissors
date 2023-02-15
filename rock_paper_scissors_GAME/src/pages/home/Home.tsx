import { useTranslation, Trans } from 'react-i18next'; 
import styles from './Home.module.scss'
import { FlashcardArray, Flashcard } from "react-quizlet-flashcard";
const Home = () => {

    const { t, i18n } = useTranslation();
    return (
        <div className={styles.routeContent}>
            <h1>{t('d.navHome')}</h1>
            <div className={styles.gameRules}>
                <p>{t('d.gameRules')}</p>
            </div>
            
            <div className={styles.storyContainer}>
                <Flashcard frontHTML={"<h2>The Hand Signals</h2>"} backHTML={<p>In order to ensure fair play, the game signals have been agreed upon to ensure the uniformity of delivery every single time. This ensures that there will be no room for error and these signals have been approved for all types of recreational and professional play. The proper opening move will impact the overall success of the game. This means that special attention should be given to the way you move your hand initially before you attempt to make any signal so that other players are not aware of your intention. When you succeed to do so, you ensure that other players will not be able to make a signal that beats yours, at least not on purpose.</p>} />
                <Flashcard frontHTML="<h2>THE ROCK</h2>" backHTML={<p>The rock is internationally recognized by a closed fist where the thumb is not concealed. It is also one of the most popular opening moves and this is why it is considered to be one of the most popular hand signals. Most players will view using the rock as an opening move to be somehow aggressive but would still use it because it is easy. The rock will beat scissors every time but will be beaten by paper.</p>} />
                <Flashcard frontHTML="<h2>THE PAPER</h2>" backHTML={<p>Paper is delivered in the same way as the rock except that in this case all the fingers and the thumb are extended in a way that they all face the same direction. The vertical paper or the handshake is strictly forbidden in tournaments of Rock Paper Scissors because it might resemble the scissors which can lead to unnecessary confusion. Paper is one of the most challenging opening moves because there is no indication of what you intend to do next. As a result, many players will be concerned when you use it as an opening move to your game. Paper will beat rock but will be beaten by scissors in no time.</p>} />
                <Flashcard frontHTML="<h2>THE SCISSORS</h2>" backHTML={<p>Scissors are thrown in the same way as rock where the hand is clenched into a fist but the index and the middle finger are extended to the front in order to make an angle that is of 30 to 45 degrees in a way that would resemble a pair of scissors. The use of horizontal scissors is strictly forbidden in tournaments because they can resemble the shape of paper. Opening with scissors is not a very smart move because your opponent will be able to guess what your signal is going to be easily and so will be able to come up with a stronger signal.</p>} />
            </div>
        </div>
    )
}
export default Home;