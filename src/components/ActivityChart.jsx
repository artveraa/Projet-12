import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserActivity} from "../utils/apiCalls";
import {CustomTooltipActivity} from "./Custom";
import '../styles/ActivityChart.scss';

/**
 * un graphique représentant un diagramme en barres avec
 * l'évolution du poids
 * et des calories brûlées.
 * @component
 */

function ActivityChart() {
    let {id} = useParams();

    const [activity, setActivity] = useState([]);
    useEffect(() => {
        getUserActivity(id).then(res => {
            setActivity(res.data.sessions);
            console.log(res.data.sessions)
        });
    }, []);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart width='50%' height='50%' data={activity}>
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <XAxis dataKey='day' tickLine={false} axisLine={false} />
                <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
                <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
                <Tooltip content={<CustomTooltipActivity />} />
                <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} formatter={(value, entry, index) => <span className='text-color'>{value}</span>} />
                <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30' />
                <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7} yAxisId='calorie' fill='#E60000' />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ActivityChart;

