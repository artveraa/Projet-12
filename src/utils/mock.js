/**
 * Retrieves the user's informations from the mock
 * @param {Number} id - The user's id
 * @returns {Promise<Object>} - The user's informations
 */

const getUserInfos = async(id) => {
    let response = await fetch(`/mock.json`)
    let data = await response.json()
    let result = data.USER_MAIN_DATA.find(user => user.id == id)
    return result;
}

export { getUserInfos }

