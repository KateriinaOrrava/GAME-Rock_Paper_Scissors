import { useTranslation, Trans } from 'react-i18next'; 
import styles from './GamePlay.module.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

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
          <form onSubmit = { handleSubmit }>
            <label>
              Enter username:
              <input type="text" 
              name="username" 
              value={userName} 
              onChange={(e)=>setUserName(e.target.value)}
              required/>
            </label>
              <input type="submit" value="Submit" />
          </form>
    </div>

    )
}
export default GamePlay;