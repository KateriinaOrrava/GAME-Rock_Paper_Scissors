import { useTranslation, Trans } from 'react-i18next'; 
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styles from './Game.module.css'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
const Game = () => {
    const { t, i18n } = useTranslation();
    const [roundCounter, setRoundCounter] = useState(0)
    const [userChoice, setUserChoice] = useState('...')
    const [computerChoice, setComputerChoice] = useState('...')
    const [result, setResult] = useState('💭')
    const [points, setPoints] = useState(0)
    const [timesWin, setTimesWin] =useState(0)
    const [timesPaper, setTimesPaper] =useState(0)
    const [timesRock, setTimesRock] =useState(0)
    const [timesScissors, setTimesScissors] =useState(0)
    const timesLoose = roundCounter - timesWin;
    const choices = ['🤚', '✌️', '✊']


    const location = useLocation();
    const userName = location.state.userName
    console.log(userName.userName)
    const handleClick = (value:string) => {
      setUserChoice(value)
      generateComputerChoice()
    }
  
    const generateComputerChoice = () => {
      setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
    }
  
    useEffect(() => {
      {
        switch (userChoice) {
          case '✌️':
            setTimesScissors(timesScissors+1)
            break;
          case '✊':
            setTimesRock(timesRock+1)
            break;
          case '🤚':
            setTimesPaper(timesPaper+1);
            break;
        }
      }

      {
        switch (userChoice + computerChoice) {
          case '✌️🤚':
          case '✊✌️':
          case '🤚✊':
            setResult('+1');
            setTimesWin(+1);
            setPoints(points+1);
            setRoundCounter(roundCounter+1);
            break;
          case '🤚✌️':
          case '✌️✊':
          case '✊🤚':
            setResult('-1');
            setPoints(points-1);
            setRoundCounter(roundCounter+1);
            break;
          case '✊✊':
          case '🤚🤚':
          case '✌️✌️':
            setResult('+0');
            setRoundCounter(roundCounter+1);
            break;
        }
      }
    }, [computerChoice, userChoice])

    const navigate = useNavigate();

    const handleSubmit= (e: { preventDefault: () => void }) => {      
      navigate("/GameStatistics", {state: {
        userName: {userName},
        roundCounter: {roundCounter},
        points: {points},
        timesWin: {timesWin},
        timesLoose: {timesLoose},
        timesPaper: {timesPaper},
        timesRock: {timesRock},
        timesScissors: {timesScissors},
      }
      })
      e.preventDefault();
    }


    return (
        <div className={styles.game}>            
        <h2 className={styles.gameGreeting}>{t('d.greeting')}, {userName.userName}!</h2>
            <h1 className={styles.gameMainHeading}>{t('d.navGame')}</h1>

            <div className={styles.infoContainer}>
                <div className={styles.gameResult}>
                    <h3>{t('d.gameScore')} {points} {t('d.gameScorePoints')}</h3>   
                </div>
                <div className={styles.gamePlayersChoices}>
                    <h2>{t('d.userChoice')} {userChoice}</h2>
                    <h2>{t('d.computerChoice')} {computerChoice}</h2>
                </div>
                <h1 className={styles.pointResult}>{result}</h1>
            </div>
            <div className={styles.gameFieldContainer}>
                <div className={styles.userFieldPart}>
                {choices.map((choice, index) =>
                                <button key={index} 
                                onClick={() => handleClick(choice)}
                                className={styles.userChoice}>
                                {choice}
                                </button>     
                                )}
                </div>
                <div>
                    <h2 className={styles.title}>
                    <span 
                    className={styles.title_word_1}
                    >V</span>
                    <span 
                    className={styles.title_word_2}
                    >S</span>
                </h2>
                </div>
                <div className={styles.computerFieldPart}>
                    {computerChoice}
                </div>
            </div>
            <button className={styles.buttonEndGame} onClick={handleSubmit}>END Game</button>
    </div>

    )
}
export default Game;