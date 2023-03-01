const { AuthenticationError } = require('apollo-server-express');
const { User, Budget } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('budget')
        },

        //budget and down is work in progress
        budget: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Budget.find(params).sort()
        },
        bills: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Budget.find(params).sort()
        },
        shopping: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Budget.find(params).sort()
        },
        grocery: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Budget.find(params).sort()
        },
        pet: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Budget.find(params).sort()
        },
        dining: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Budget.find(params).sort()
        },
        recurringinvestment: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Budget.find(params).sort()
        },


    },

    Mutation: {


    }
}