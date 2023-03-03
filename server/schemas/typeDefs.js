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
        budget(budgetId: ID!): [Budget]
        bills(billsId: ID!): [bills]
        Shopping(ShoppingId: ID!): [Shopping]
        Grocery(GroceryId: ID!): [Grocery]
        Pet(PetId: ID!): [Pet]
        Dining(DiningId: ID!): [Dining]
        RecurringInvestment(RecurringInvestmentId: ID!): [RecurringInvestment]
        Auth(AuthToken: TOKEN!): [Auth]
    }

    type Mutation {
        addUser(username: String!):User 
        addBudget(budgetId: ID!, $Budget: String!): [Budget]
        addBills(billsId: ID!, $Bills: String!): [bills]
        addShopping(ShoppingId: ID!, $Shopping: String!): [Shopping]
        addGrocery(GroceryId: ID!, $Grocery: String!): [Grocery]
        addPet(PetId: ID!, $Pet: String!): [Pet]
        addDining(DiningId: ID!, $Dining: String!): [Dining]
        addRecurringInvestment(RecurringInvestmentId: ID!, $RecurringInvestment: String!): [RecurringInvestment]
        addAuth(AuthToken: TOKEN!,  $Auth: String!): [Auth]
        removeUser(username: String!):User 
        removeBudget(budgetId: ID!, $Budget: String!): [Budget]
        removeBills(billsId: ID!, $Bills: String!): [bills]
        removeShopping(ShoppingId: ID!, $Shopping: String!): [Shopping]
        removeGrocery(GroceryId: ID!, $Grocery: String!): [Grocery]
        removePet(PetId: ID!, $Pet: String!): [Pet]
        removeDining(DiningId: ID!, $Dining: String!): [Dining]
        removeRecurringInvestment(RecurringInvestmentId: ID!, $RecurringInvestment: String!): [RecurringInvestment]
        removeAuth(AuthToken: TOKEN!,  $Auth: String!): [Auth]
    }
`
//^^^need queries and mutations, both are incomplete! ^^^


module.exports = typeDefs;