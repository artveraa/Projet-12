import {getUserInfos} from "../utils/apiCalls";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


function ScoreChart() {
    let {id} = useParams()

    const [score, setScore] = useState([]);
    useEffect(() => {
        getUserInfos(id).then((res) => {
            setScore(res.todayScore);
        });
    }, []);

    return (
            <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={score}>
                    <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#FF0000' />
                </RadialBarChart>
            </ResponsiveContainer>

    );
}

export default ScoreChart;