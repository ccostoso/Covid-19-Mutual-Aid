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
    logout: function(user) {
        return axios.post("/api/account/logout", user)
    },
    getUser: function(id) {
        console.log("API.js id", id);
        return axios.get("/api/account/user/" + id);
    },
    putUser: function(id, data) {
        console.log("User id is:", id);
        return axios.put("/api/acount/user/" + id, data);
    },
    createCommunity: function(newCommunity) {
        console.log("New community is:", newCommunity);
        return axios.post("/api/community/create", newCommunity);
    },
    getCommunity: function(communityName) {
        console.log("Community name is:", communityName);
        return axios.get("/api/community/getCommunity/" + communityName);
    },
    getCommunityById: function(id) {
        console.log("Community id is:", id);
        return axios.get("/api/community/getCommunityById/" + id);
    },
    getCommunities: function() {
        console.log("Getting communities...");
        return axios.get("/api/community/getCommunities");
    },
    putCommunity: function(communityName, data) {
        console.log("PUT Community name is:", communityName);
        return axios.put("/api/community/putCommunity/" + communityName, data);
    },
    putCommunityPending: function(communityName, data) {
        console.log("PUT PENDING Community name is:", communityName);
        return axios.put("/api/community/putCommunityPending/" + communityName, data);
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
    },
    deleteThread: function(threadId) {
        console.log("Thread id to delete is:", threadId);
        return axios.delete("/api/thread/delete/" + threadId);
    },
    createReply: function(newReply) {
        console.log("New reply is:", newReply);
        return axios.post("/api/replies/create", newReply);
    },
    getReplies: function(threadId) {
        console.log("For getReplies, thread id is:", threadId);
        return axios.get("/api/replies/getReplies/" + threadId);
    },
}