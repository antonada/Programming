class User{
    constructor(login, email, password){
        this.login = login;
        this.email = email;
        this.password = password;
    }
    changePassword(pass1, pass2){
        if (pass1 === this.password){
            this.password = pass2;
            console.log("You change password!")
        }
        else {
            console.log("Incorrect password")
        }
    }
}