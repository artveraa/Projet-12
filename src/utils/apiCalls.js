import Performances from './performances.js'
import AverageSessions from "./averageSessions";
import Activity from "./activity";

const getUserInfos = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}`)
    let data = await response.json()
    return data.data;
}

export { getUserInfos }

const getUserActivity = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/activity`)
    let data = await response.json()
    let result = new Activity(data.data)
    return result;
    console.log(result);
}

export { getUserActivity }

const getUserAverageSession = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    let data = await response.json()
    let result = new AverageSessions(data.data)
    return result;
}

export { getUserAverageSession }

const getRadarInfos = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/performance`)
    let data = await response.json()
    let result = new Performances(data.data)
    return result.data;
}

export { getRadarInfos }




