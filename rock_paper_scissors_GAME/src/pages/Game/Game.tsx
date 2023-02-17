import { useTranslation, Trans } from 'react-i18next'; 
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styles from './Game.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";

type Result = {
  userName:{userName:string}, 
  winPerc:number, 
  timesPaper:number, 
  timesRock:number, 
  timesScissors:number 
}

const Game = () => {
    const location = useLocation();
    const userName = location.state.userName;
    const [roundCounter, setRoundCounter] = useState(0)
    const [userChoice, setUserChoice] = useState('...')
    const [computerChoice, setComputerChoice] = useState('...')
    const [result, setResult] = useState('💭')
    const [timesWin, setTimesWin] =useState(0)
    const [timesPaper, setTimesPaper] =useState(0)
    const [timesRock, setTimesRock] =useState(0)
    const [timesScissors, setTimesScissors] =useState(0)
    const choices = ['🤚', '✌️', '✊'];
    const navigate = useNavigate();

    const handleClick = (value:string) => {
      const addResults = async (results:Result) => {   
        return axios.post('http://localhost:3004/add', results);
      }
      if (roundCounter > 9) {
        let winPerc = Math.round(timesWin/10*100) ;
  
        const results  = {userName, winPerc, timesPaper, timesRock, timesScissors}  ;
  
        navigate("/GameStatistics", {state: {
          userName: {userName},
          timesWin: {timesWin},
          timesPaper: {timesPaper},
          timesRock: {timesRock},
          timesScissors: {timesScissors},
        }});      
        setRoundCounter(0);
        addResults(results);
      }

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
            setResult('Wow!!! ');
            setTimesWin(timesWin+1);
            setRoundCounter(roundCounter+1);
            break;
          case '🤚✌️':
          case '✌️✊':
          case '✊🤚':
            setResult('Auch ... ');
            setRoundCounter(roundCounter+1);
            break;
          case '✊✊':
          case '🤚🤚':
          case '✌️✌️':
            setResult('Hmm ... ');
            setRoundCounter(roundCounter+1);
            break;
        }
      }
    }, [computerChoice, userChoice]);


    const { t } = useTranslation();    
    return (
        <div className={styles.game}>            
        <h2 className={styles.gameGreeting}>{t('d.greeting')}, {userName.userName}!</h2>
            <h1 className={styles.gameMainHeading}>{t('d.navGame')}</h1>

            <div className={styles.infoContainer}>
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
            <h4>{t('d.round')}{roundCounter}</h4>
    </div>

    )
}
export default Game;