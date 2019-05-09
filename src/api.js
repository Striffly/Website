export default class CareApi {
    static tryRequest(data, npath) {
        var content;

        (async () => {
            const response = await fetch('http://user.epicare.fr/' + npath, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data
            });
            content = await response.json();
        })();
        return content;
    }
    static tryLogin(email, passwd) {
        const data = {
            "login": email,
            "password": passwd
        };
        var content = this.tryRequest(data, 'login');
        console.log(content);
    }
    static tryRegister(name, last_name, email, passwd) {
        const data = {
            "name": name,
            "last_name": last_name,
            "email": email,
            "password": passwd
        };
        var content = this.tryRequest(data, 'register');
        console.log(content);
    }
}