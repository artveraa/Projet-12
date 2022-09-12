import {getUserAverageSession} from "../utils/apiCalls";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";

function AverageSessionsChart() {
    let {id} = useParams();

    const [averageSessions, setAverageSessions] = useState([]);
    useEffect(() => {
        getUserAverageSession(id).then((res) => {
            setAverageSessions(res.sessions);
        });
    }, []);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart
                data={averageSessions}
            >
                <XAxis dataKey="day" tickLine={false} axisLine={false}/>
                {/*<YAxis/>*/}
                <Tooltip color={"#000"} stroke={"#000"}/>
                <Line type="monotone" dataKey="sessionLength" stroke="#FFF" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AverageSessionsChart;