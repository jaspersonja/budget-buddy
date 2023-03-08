const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        budget: [Budget]!  
    }

    type Budget {
        _id: ID!
        income: Int!
        bills: [Bills]!
        shopping: [Shopping]!
        groceries: [Grocery]!
        pet: [Pet]!
        dining: [Dining]!
        recurringInvestment: [RecurringInvestment]!
    }

    type Bills {
        _id: ID!
        billName: String!
        billAmount: Int!
    }

    type Shopping {
        _id: ID!
        shoppingItem: String!
        shoppingItemCost: Int!
    }

    type Grocery {
        _id: ID!
        groceryItem: String!
        groceryItemCost: Int!
    }

    type Pet {
        _id: ID!
        petName: String!
        petFood: Int!
    }

    type Dining {
        _id: ID!
        diningRestaurant: String!
        diningBill: Int!
    }

    type RecurringInvestment {
        _id: ID!
        brokerName: String!
        brokerageDeposit: Int!
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Query {
        me: User!

    }

    type Mutation {
        addUser(username: String!, email: String!, password: String! ): Auth
        login(email: String!, password: String!): Auth
        addBudget(budgetId: ID!, budget: String!): User
        addBills(billsId: ID!, bills: String!): User
        addShopping(shoppingId: ID!, shopping: String!): User
        addGrocery(groceryId: ID!, grocery: String!): User
        addPet(petId: ID!, pet: String!): User
        addDining(diningId: ID!, dining: String!): User
        addRecurringInvestment(recurringInvestmentId: ID!, recurringInvestment: String!): User
        removeBudget(budgetId: ID!, budget: String!): User
        removeBills(billsId: ID!, bills: String!): User
        removeShopping(shoppingId: ID!, shopping: String!): User
        removeGrocery(groceryId: ID!, grocery: String!): User
        removePet(petId: ID!, pet: String!): User
        removeDining(diningId: ID!, dining: String!): User
        removeRecurringInvestment(recurringInvestmentId: ID!, recurringInvestment: String!): User

    }
`;



module.exports = typeDefs;