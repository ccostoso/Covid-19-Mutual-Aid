import axios from "axios";

export default {
    getUser: function(user) {
        return axios.get("/api/user/" + user)
    }
}