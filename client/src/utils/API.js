import axios from "axios";

export default {
    // getUser: function(id) {
    //     return axios.get("/api/user/" + id);
    // },
    // getUsers: function() {
    //     return axios.get("/api/user/");
    // },
    signUp: function(newUser) {
        return axios.post("/api/account/signup/", newUser);
    },
    signIn: function(user) {
        return axios.post("/api/account/signin/", user);
    },
    putUser: function(id) {
        return axios.put("/api/account/user/" + id);
    },
    deleteUser: function(id) {
        return axios.delete("/api/account/user/" + id);
    }
}