import { useTranslation, Trans } from 'react-i18next'; 
import { useLocation } from "react-router-dom";
import styles from './GameStatisctics.module.css'
const rounds=10;

const GameStatistics= () => {

    const location = useLocation();

    const {userName} = location.state.userName
    const {timesPaper} = location.state.timesPaper
    const {timesScissors} = location.state.timesScissors
    const {timesRock} = location.state.timesRock
    const {timesWin} = location.state.timesWin
    const winPerc = Math.round(timesWin/rounds*100);

    const { t } = useTranslation();

    const status = () => {
        if (winPerc===50){return "Draw"} else if ( winPerc>50){return "WIN"} else {return "LOOSE"}
    }

    return (
        <div className={styles.stats}>
            <h2>{t('d.statistics')}</h2>            
            <h1 >{status()}</h1>            
            <p>{t('d.playerName')} {userName.userName}</p>
            <p>{t('d.WINNINGpERCENTAGE')} {winPerc} %</p>
            <p>{t('d.paper')} {timesPaper} {t('d.timesOr')} {Math.round(timesPaper/rounds*100)} %</p>
            <p>{t('d.rock')} {timesRock} {t('d.timesOr')} {Math.round(timesRock/rounds*100)} %</p>
            <p>{t('d.scissors')} {timesScissors} {t('d.timesOr')} {Math.round(timesScissors/rounds*100)} %</p>
        </div>
    )
}
export default GameStatistics;