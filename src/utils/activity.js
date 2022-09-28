/**
 * @param {Array} sessions
 */

class Activity {
    constructor(data) {
        for (let i = 0; i < data.sessions.length; i++) {
            data.sessions[i].day = i + 1;
        }

        this.data = data;

        console.log(this.data);
    }

}

export default Activity;