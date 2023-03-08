const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        budget: [Budget]!  
    }

    input BudgetInput {
        income: String
        bill: [BillInput]
        shopping: [ShoppingInput]
        grocery: [GroceryInput]
        pet: [PetInput]
        dining: [DiningInput]
        recurringInvestment: [RecurringInvestmentInput]
    }

    type Budget {
        _id: ID!
        income: Int!
        bill: [Bill]!
        shopping: [Shopping]!
        grocery: [Grocery]!
        pet: [Pet]!
        dining: [Dining]!
        recurringInvestment: [RecurringInvestment]!
    }

    type Bill {
        _id: ID!
        billName: String!
        billAmount: Int!
        billDate: String!
    }

    input BillInput {
        billName: String
        billAmount: Int
        billDate: String
    }

    type Shopping {
        _id: ID!
        shoppingPlace: String!
        shoppingCost: Int!
        shoppingDate: String!
    }

    input ShoppingInput {
        shoppingPlace: String!
        shoppingCost: Int!
        shoppingDate: String!
    }

    type Grocery {
        _id: ID!
        groceryPlace: String!
        groceryCost: Int!
        groceryDate: String!
    }
    

    input GroceryInput {
        groceryPlace: String!
        groceryCost: Int!
        groceryDate: String!
    }

    type Pet {
        _id: ID!
        petItem: String!
        petItemCost: Int!
        petDate: String!
    }

    input PetInput {
        petItem: String!
        petItemCost: Int!
        petDate: String!
    }

    type Dining {
        _id: ID!
        diningRestaurant: String!
        diningBill: Int!
        diningDate: String!
    }

    input DiningInput {
        diningRestaurant: String!
        diningBill: Int!
        diningDate: String!
    }

    type RecurringInvestment {
        _id: ID!
        brokerName: String!
        brokerageDeposit: Int!
        brokerageDate: String!
    }
    
    input RecurringInvestmentInput {
        brokerName: String!
        brokerageDeposit: Int!
        brokerageDate: String!
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Query {
        me: User

    }

    type Mutation {
        addUser(username: String!, email: String!, password: String! ): Auth
        login(email: String!, password: String!): Auth
        addBudget(input: BudgetInput): User
        addBill(input: BillInput): User
        addShopping(input: ShoppingInput): User
        addGrocery(input: GroceryInput): User
        addPet(input: PetInput): User
        addDining(input: DiningInput): User
        addRecurringInvestment(input: RecurringInvestmentInput): User
    }
`;



module.exports = typeDefs;