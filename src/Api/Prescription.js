import CareApi from "./api"

export default class PrescriptionApi {
    static tryRequest(usedMethod, data, npath) {
        return CareApi.request(usedMethod, data, 'http://epicare.fr:8082/' + npath);
    }

    static tryQuery(method, query, npath) {
        let url = npath + '?';

        for (let key in query) {
            url += key.toString() + '=' + query[key].toString() + '$';
        }
        url = url.slice(0, -1);
        return this.tryRequest(method, undefined, url);
    }

    static getFileNames() {
        let token = CareApi.getSessionToken();
        if (token == null)
            token = "";
        const query = {
            token: token,
        };
        return this.tryQuery('GET', query, "download")
    }

    static getFile(fileName) {
        let token = CareApi.getSessionToken();
        if (token == null)
            token = "";
        return ("http://epicare.fr:8082/download/" + fileName + "?token=" + token)
    }

    static upload() {
        let token = CareApi.getSessionToken();
        if (token == null)
            token = "";
        return ("http://epicare.fr:8082/upload?token=" + token)
    }
}