const getUserInfos = async(id) => {
    let response = await fetch(`/mock.json`)
    let data = await response.json()
    let result = data.USER_MAIN_DATA.find(user => user.id == id)
    return result;
}

export { getUserInfos }

