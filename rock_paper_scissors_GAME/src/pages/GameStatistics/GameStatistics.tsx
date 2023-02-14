import { useTranslation, Trans } from 'react-i18next'; 
import { useLocation } from "react-router-dom";

const GameStatistics= () => {
    const location = useLocation();
    const userName = location.state.userName
    const points = location.state.points
    const roundCounter = location.state.roundCounter
    console.log(userName.userName, points, roundCounter)

    const { t, i18n } = useTranslation();
    return (
        <div >
<h1>hello</h1>

        </div>
    )
}
export default GameStatistics;