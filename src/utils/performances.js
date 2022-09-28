const kind = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
}

/**
 * @param {Array} data
 */

class Performances {
    constructor(data) {
        for (let perf of data.data) {
            perf.subject = kind[perf.kind]
        }
        data.data.reverse()
        this.data = data
    }
}

export default Performances;