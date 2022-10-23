import Performances from './performances.js'
import AverageSessions from "./averageSessions";
import Activity from "./activity";
import Error from "../components/Error";

/**
 * Retrieves the user's informations from the API
 * @param {Number} id - The user's id
 * @returns {Promise<Object>} - The user's informations
 */

const getUserInfos = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}`)
    let data = await response.json()

    if (response.status !== 200) {
        console.log(`Error ${response.status}: ${data.message}`)
        return <Error/>
    } else {
        return data.data;
    }
}

export { getUserInfos }

/**
 * Retrieves the user's activity from the API
 * @param {Number} id - The user's id
 * @returns {Promise<Activity>} - The user's activity
 */

const getUserActivity = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/activity`)
    let data = await response.json()
    let result = new Activity(data.data)
    return result;
    console.log(result);
}

export { getUserActivity }

/**
 * Retrieves the user's average sessions from the API
 * @param {Number} id - The user's id
 * @returns {Promise<AverageSessions>} - The user's average sessions
 */

const getUserAverageSession = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    let data = await response.json()
    let result = new AverageSessions(data.data)
    return result;
}

export { getUserAverageSession }

/**
 * Retrieves the user's performances from the API
 * @param {Number} id - The user's id
 * @returns {Promise<Performances>} - The user's performances
 */

const getRadarInfos = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/performance`)
    let data = await response.json()
    let result = new Performances(data.data)
    return result.data;
}

export { getRadarInfos }




