import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserActivity} from "../utils/apiCalls";

function ActivityChart() {
    let {id} = useParams();

    const [activity, setActivity] = useState([]);
    useEffect(() => {
        getUserActivity(id).then(res => {
            setActivity(res.sessions);
        });
    }, []);

    return (
        <ResponsiveContainer>
            <BarChart
                width={300}
                height={200}
                data={activity}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#8884d8" />
                <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ActivityChart;

