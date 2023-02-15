import { useTranslation, Trans } from 'react-i18next'; 
import { useLocation } from "react-router-dom";
import styles from './GameStatisctics.module.css'


const GameStatistics= () => {
    const location = useLocation();
    const {userName} = location.state.userName
    const {points} = location.state.points
    const {roundCounter} = location.state.roundCounter
    const {timesPaper} = location.state.timesPaper
    const {timesScissors} = location.state.timesScissors
    const {timesRock} = location.state.timesRock
    const {timesWin} = location.state.timesWin
    console.log(userName.userName, points, roundCounter)
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.stats}>
            <h1>{t('d.statistics')}</h1>            
            <p>{t('d.playerName')} {userName.userName}</p>
            <p>{t('d.timesPlayed')} {roundCounter}</p>
            <p>{t('d.WINNINGpERCENTAGE')} {Math.round(timesWin/roundCounter*100)} %</p>
            <p>{t('d.gamePoints')} {points} </p>
            <p>{t('d.paper')} {timesPaper} {t('d.timesOr')} {Math.round(timesPaper/roundCounter*100)} %</p>
            <p>{t('d.rock')} {timesRock} {t('d.timesOr')} {Math.round(timesRock/roundCounter*100)} %</p>
            <p>{t('d.scissors')} {timesScissors} {t('d.timesOr')} {Math.round(timesScissors/roundCounter*100)} %</p>
        </div>
    )
}
export default GameStatistics;