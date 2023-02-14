import { useTranslation, Trans } from 'react-i18next'; 
import { useLocation } from "react-router-dom";
import styles from './GameStatisctics.module.css'

const GameStatistics= () => {
    const location = useLocation();
    const userName = location.state.userName
    const points = location.state.points
    const roundCounter = location.state.roundCounter
    console.log(userName.userName, points, roundCounter)
console.log(userName.userName.userName)
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.stats}>
            <h1>hello</h1>
            {/* <p>PLAYER NAME: {userName.userName}</p> */}
        </div>
    )
}
export default GameStatistics;