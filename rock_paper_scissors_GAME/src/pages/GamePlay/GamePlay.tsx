import { useTranslation } from 'react-i18next'; 
import styles from './GamePlay.module.css'
import { useNavigate } from "react-router-dom";

import { useState } from 'react'

const GamePlay = () => {

  const [userName, setUserName]=useState('Player')

  const navigate = useNavigate();

    const { t, i18n } = useTranslation();
    const handleSubmit= (e: { preventDefault: () => void }) => {      
      navigate("/game", {state: {
        userName: {userName}}
      })
      e.preventDefault();
    }
    return (
      
        <div className = {styles.game}>
          <p>{t('d.gameRulesPlay')}</p>
          <form onSubmit = { handleSubmit }>
            <label>
            {t('d.enterUsername')}:
              <input type="text" 
              name="username" 
              placeholder={userName} 
              onChange={(e)=>setUserName(e.target.value)}
              required/>
            </label>
              <input type="submit" value="Submit" />
          </form>
    </div>

    )
}
export default GamePlay;