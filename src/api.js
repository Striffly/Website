export default class CareApi {
    static tryRequest(method, data, npath) {
        var content;

        (async() => {
            const response = await fetch('localhost:8080/' + npath, {
                method: method,
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
    static login(email, passwd) {
        const data = {
            "login": email,
            "password": passwd
        };
        var content = this.tryRequest('POST', data, 'login');
        console.log(content);
        return content;
    }
    static register(name, lastName, email, passwd) {
        const data = {
            "name": name,
            "last_name": lastName,
            "email": email,
            "password": passwd
        };
        var content = this.tryRequest('POST', data, 'register');
        console.log(content);
        return content;
    }
    static confirmAccount(token) {
        const data = {
            "token": token
        };
        var content = this.tryRequest('POST', data, 'confirm');
        console.log(content);
        return content;
    }
    static sendResetPassword(email) {
        const data = {
            "email": email
        };
        var content = this.tryRequest('GET', data, 'reset');
        console.log(content);
        return content;
    }
    static resetPassword(emailToken, email, passwd) {
        const data = {
            "token": emailToken,
            "email": email,
            "password": passwd
        };
        var content = this.tryRequest('POST', data, 'reset');
        console.log(content);
        return content;
    }
}