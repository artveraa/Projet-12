const day = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
}

class AverageSessions {
    constructor(data) {

        for (let session of data.sessions) {
            session.subject = day[session.day];
        }
        this.data = data ;
    }

}

export default AverageSessions;