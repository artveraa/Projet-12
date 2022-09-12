import {getRadarInfos} from "../utils/apiCalls";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function PerformancesChart() {
    let {id} = useParams();

    const [performances, setPerformances] = useState([]);
    useEffect(() => {
        getRadarInfos(id).then((res) => {
            setPerformances(res);
        });
    });

    return (
        <ResponsiveContainer width='100%' height='100%'>
        <RadarChart

            outerRadius={100}
            width={300}
            height={400}
            data={performances.data}
        >
            <PolarGrid stroke='#FFF' />
            <PolarAngleAxis dataKey="kind" />
            {/*<PolarRadiusAxis />*/}
            <Radar
                dataKey="value"
                stroke="#FF0101"
                fill="#FF0101"
                fillOpacity={0.7}
            />
        </RadarChart>
            </ResponsiveContainer>
    );


}

export default PerformancesChart;