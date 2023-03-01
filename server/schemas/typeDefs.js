const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        budget: [Budget]!  
    }

    type Budget {
        _id: ID
        income: Number
        bills: [Bills]!
        shopping: [Shopping]!
        groceries: [Grocery]!
        pet: [Pet]!
        dining: [Dining]!
        recurringInvestment: [RecurringInvestment]!
    }

    type Bills {
        _id: ID
        billName: String
        billAmount: Number
    }

    type Shopping {
        _id: ID
        shoppingItem: String
        shoppingItemCost: Number
    }

    type Grocery {
        _id: ID
        groceryItem: String
        groceryItemCost: Number
    }

    type Pet {
        _id: ID
        petName: String
        petFood: Number
    }

    type Dining {
        _id: ID
        diningRestaurant: String
        diningBill: Number
    }

    type RecurringInvestment {
        _id: ID
        brokerName: String
        brokerageDeposit: Number
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        budget(username: String): [Budget]
    }

    type Mutation {

    }
`
//^^^need queries and mutations, both are incomplete! ^^^
module.exports = typeDefs;