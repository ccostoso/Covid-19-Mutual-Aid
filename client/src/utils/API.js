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
    createCommunity: function(newCommunity) {
        console.log("New community is:", newCommunity);
        return axios.post("/api/community/create", newCommunity);
    },
    getCommunity: function(id) {
        console.log("Community id is:", id);
        return axios.get("/api/community/getCommunity/" + id);
    },
    createThread: function(newThread) {
        console.log("New thread is:", newThread);
        return axios.post("/api/thread/create", newThread);
    },
    getThread: function(threadId) {
        console.log("Thread id is:", threadId);
        return axios.get("/api/thread/getThread/" + threadId);
    },
    getThreads: function(communityId) {
        console.log("Community id is:", communityId);
        return axios.get("/api/thread/getThreads/" + communityId);
    }
    // putUser: function(id) {
    //     return axios.put("/api/account/user/" + id);
    // },
    // deleteUser: function(id) {
    //     return axios.delete("/api/account/user/" + id);
    // }
}