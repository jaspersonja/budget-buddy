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
        me: User

    }

    type Mutation {
        addUser(username: String!, email: String!, password: String! ): Auth
        addBudget(budgetId: ID!, $Budget: String!): User
        addBills(billsId: ID!, $Bills: String!): User
        addShopping(ShoppingId: ID!, $Shopping: String!): User
        addGrocery(GroceryId: ID!, $Grocery: String!): User
        addPet(PetId: ID!, $Pet: String!): User
        addDining(DiningId: ID!, $Dining: String!): User
        addRecurringInvestment(RecurringInvestmentId: ID!, $RecurringInvestment: String!): User
        removeBudget(budgetId: ID!, $Budget: String!): User
        removeBills(billsId: ID!, $Bills: String!): User
        removeShopping(ShoppingId: ID!, $Shopping: String!): User
        removeGrocery(GroceryId: ID!, $Grocery: String!): User
        removePet(PetId: ID!, $Pet: String!): User
        removeDining(DiningId: ID!, $Dining: String!): User
        removeRecurringInvestment(RecurringInvestmentId: ID!, $RecurringInvestment: String!): User

    }
`
//^^^need queries and mutations, both are incomplete! ^^^


module.exports = typeDefs;