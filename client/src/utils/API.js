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
        return axios.put("/api/account/user/" + id, data);
    },
    getSkillsByCommunity: function(id) {
        console.log("Community id is:", id);
        return axios.get("/api/skill/getSkillsByCommunity/" + id);
    },
    getNeedsByCommunity: function(id) {
        console.log("Community id is:", id);
        return axios.get("/api/need/getNeedssByCommunity/" + id);
    },
    getSkillsByUser: function(id) {
        console.log("User id is:", id);
        return axios.get("/api/skill/getSkillsByUser/" + id);
    },
    getNeedsByUser: function(id) {
        console.log("User id is:", id);
        return axios.get("/api/need/getNeedsByUser/" + id);
    },
    createSkill: function(skill) {
        console.log("User id for put is:", skill);
        return axios.post("/api/skill/create/", skill);
    },
    createNeed: function(need) {
        console.log("User id for put is:", need);
        return axios.post("/api/need/create/", need);
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
    getCommunitiesByUser: function(userId) {
        console.log("Getting communities for userId:", userId);
        return axios.get("/api/community/getCommunitiesByUser/" + userId);
    },
    putCommunity: function(communityName, data) {
        console.log("PUT Community name is:", communityName);
        return axios.put("/api/community/putCommunity/" + communityName, data);
    },
    getPendingCommunity: function(communityName) {
        console.log("PUT PENDING Community name is:", communityName);
        return axios.get("/api/community/getPendingCommunity/" + communityName);
    },
    putPendingPullFromPendingCommunity: function(communityName, data) {
        console.log("PUT PENDING PULL FROM PENDING (Deny Entry Request) Community name is:", communityName);
        return axios.put("/api/community/putPendingPullFromPendingCommunity/" + communityName, data);
    },
    putPendingToUserCommunity: function(communityName, data) {
        console.log("PUT PENDING TO USER (Accept Entry Request) Community name is:", communityName);
        return axios.put("/api/community/putPendingToUserCommunity/" + communityName, data);
    },
    putNonUserToPendingCommunity: function(communityName, data) {
        console.log("PUT NON USER TO PENDING (Request Entry) Community name is:", communityName);
        return axios.put("/api/community/putNonUserToPendingCommunity/" + communityName, data);
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