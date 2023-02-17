import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import styles from './Scoreboard.module.css';
import { Score } from '../TypesForPages';

const getAllScores = async () => {
  const { data } = await axios.get('http://localhost:3004/scores');
  return data.data;
};
const Scoreboard = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery<Score[]>(['scores'], () =>
    getAllScores()
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div className={styles.scoreboard}>
      <table key="tableOfScores">
        <thead key="tableOfScoresHead">
          <tr key="tableOfScoresHeadRow">
            <th key="tableOfScoresHeadRow">Player ID</th>
            <th>{t('d.playerName')}</th>
            <th>{t('d.wins')} %</th>
            <th>✊</th>
            <th>✌️</th>
            <th>🤚</th>
          </tr>
        </thead>
        <tbody key="tableOfScoresBody">
          {data.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td key={val}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Scoreboard;
