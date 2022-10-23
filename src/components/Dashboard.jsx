import '../styles/Dashboard.scss';
import Intro from './Intro';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getUserInfos} from "../utils/apiCalls";
import UserInfos from "./UserInfos";
import ActivityChart from "./ActivityChart";
import AverageSessionsChart from "./AverageSessionsChart";
import RadarChart from "./RadarChart";
import ScoreChart from "./ScoreChart";
import Error from "./Error";


/**
 * Composant central qui rassemble toutes les informations
 * d'un utilisateur.
 * @component
 */

function Dashboard() {
    let {id} = useParams();

    const [user, setUser] = useState({});
    const [infos, setInfos] = useState({});
    useEffect(() => {
        getUserInfos(id).then(res => {
            setUser(res.userInfos);
            setInfos(res.keyData);
        });
    }, []);

    console.log(user);


    return (
        <>
            {user ? (
                <div className="container">
                    <Intro user={user}/>
                    <div className={'all-infos'}>
                        <div className="charts">
                            <div className="main-chart">
                                <ActivityChart/>
                            </div>
                            <div className="three-charts">
                                <div className="average-sessions-chart chart">
                                    <AverageSessionsChart/>
                                </div>
                                <div className="radar-chart chart">
                                    <RadarChart/>
                                </div>
                                <div className="score-chart chart">
                                    <ScoreChart/>
                                </div>
                            </div>
                        </div>
                        <UserInfos infos={infos}/>
                    </div>


                </div>
            ) : (
                <Error/>
            )}




        </>


    );
}

export default Dashboard;