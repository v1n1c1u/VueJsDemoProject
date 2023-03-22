const Profile = require('../models/Profile');

module.exports = class User {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.picture = obj.picture;
        this.profile = new Profile(obj.profile);
        this.registrationDate = obj.registrationDate;
    }
}