import axios from "axios";

export default {
    // getUser: function(id) {
    //     return axios.get("/api/user/" + id);
    // },
    // getUsers: function() {
    //     return axios.get("/api/user/");
    // },
    signUp: function(newUser) {
        return axios.post("/api/account/register", newUser);
    },
    signIn: function(user) {
        return axios.post("/api/account/login", user)
    },
    getUser: function(id) {
        console.log("API.js id", id);
        return axios.get("/api/account/user/" + id);
    },
    // putUser: function(id) {
    //     return axios.put("/api/account/user/" + id);
    // },
    // deleteUser: function(id) {
    //     return axios.delete("/api/account/user/" + id);
    // }
}