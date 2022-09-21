import {getUserInfos} from "../utils/apiCalls";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';
import '../styles/ScoreChart.scss';
import {CustomLegendScore} from "./Custom";


function ScoreChart() {
    let {id} = useParams()

    const [score, setScore] = useState(0);
    useEffect(() => {
        getUserInfos(id).then((res) => {
            setScore(res.score ?? res.todayScore);
        });
    }, []);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <RadialBarChart startAngle={140} endAngle={180 + 180 * score} cx='50%' cy='50%' innerRadius={70}
                            barSize={10} outerRadius={120} data={[{todayScore: 100}]}>
                <RadialBar cornerRadius='50%' dataKey='todayScore' fill='red' background={"#FFF"}/>

                <text
                    x="20"
                    y="20"
                    textAnchor="start"
                    dominantBaseline="hanging"
                    className={"label"}
                >
                    Score
                </text>
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={"value"}
                >
                    {score * 100}%
                </text>
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={"helpText"}
                >
                    de votre
                </text>
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={"helpText"}
                >
                    objectif
                </text>

            </RadialBarChart>
        </ResponsiveContainer>

    );
}

export default ScoreChart;