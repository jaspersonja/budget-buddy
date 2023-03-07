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
        addBudget(budgetId: ID!, Budget: String!): User
        addBills(billsId: ID!, Bills: String!): User
        addShopping(ShoppingId: ID!, Shopping: String!): User
        addGrocery(GroceryId: ID!, Grocery: String!): User
        addPet(PetId: ID!, Pet: String!): User
        addDining(DiningId: ID!, Dining: String!): User
        addRecurringInvestment(RecurringInvestmentId: ID!, RecurringInvestment: String!): User
        removeBudget(budgetId: ID!, Budget: String!): User
        removeBills(billsId: ID!, Bills: String!): User
        removeShopping(ShoppingId: ID!, Shopping: String!): User
        removeGrocery(GroceryId: ID!, Grocery: String!): User
        removePet(PetId: ID!, Pet: String!): User
        removeDining(DiningId: ID!, Dining: String!): User
        removeRecurringInvestment(RecurringInvestmentId: ID!, RecurringInvestment: String!): User

    }
`;



module.exports = typeDefs;