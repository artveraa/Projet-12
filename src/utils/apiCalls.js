const getUserInfos = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}`)
    let data = await response.json()
    return data.data;
}

export { getUserInfos }

const getUserActivity = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/activity`)
    let data = await response.json()
    return data.data;
}

export { getUserActivity }

const getUserAverageSession = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    let data = await response.json()
    return data.data;
}

export { getUserAverageSession }

const getRadarInfos = async(id) => {
    let response = await fetch(`http://localhost:3000/user/${id}/performance`)
    let data = await response.json()
    return data.data;
}

export { getRadarInfos }




