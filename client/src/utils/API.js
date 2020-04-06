import axios from "axios";

export default {
    // getUser: function(id) {
    //     return axios.get("/api/user/" + id);
    // },
    // getUsers: function() {
    //     return axios.get("/api/user/");
    // },
    postUser: function(newUser) {
        return axios.post("/api/user/", newUser);
    },
    putUser: function(id) {
        return axios.put("/api/user/" + id);
    },
    deleteUser: function(id) {
        return axios.delete("/api/user/" + id);
    }
}