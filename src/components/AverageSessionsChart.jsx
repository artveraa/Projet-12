import {getUserAverageSession} from "../utils/apiCalls";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import { CustomTooltipObjectif } from './Custom'
import '../styles/AverageSessions.scss';

function AverageSessionsChart() {
    let {id} = useParams();

    const [averageSessions, setAverageSessions] = useState([]);
    useEffect(() => {
        getUserAverageSession(id).then((res) => {
            setAverageSessions(res.data.sessions);
        });
    }, []);

    return (
        <ResponsiveContainer width='100%' height='100%' className='objectif-responsive'>
            <LineChart
                className='objectif-line'
                width='50%' height='50%' data={averageSessions}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                onMouseMove={(e) => {
                    const div = document.getElementsByClassName('objectif-responsive')[0]
                    if (e.isTooltipActive) {
                        const windowWidth = div.clientWidth
                        const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
                        div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                    }
                }}
            >
                <XAxis dataKey='subject' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} />
                <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
                <Tooltip content={<CustomTooltipObjectif />} />
                {/*<Legend />*/}
                <Line type='basis' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none' />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AverageSessionsChart;