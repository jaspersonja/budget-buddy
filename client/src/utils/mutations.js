import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!) {
        addUser(username: $username){
            _id
            username
            email
            password
            budget
        }
    }
`;

export const ADD_BUDGET = gql`
    mutation addBudget($BudgetId: ID!, $Budget: String!) {
        addBudget(BudgetId: $BudgetId, Budget: $Budget){
            _id
            income
            bills
            shopping
            groceries
            pet
            dining
            recurringInvestments
        }
    }
`;

export const ADD_BILLS = gql`
    mutation addBills($BillsId: ID!, $Bills: String!){
        addBills(BillsId: $BillsId, Bills: $Bills){
            _id
            billName
            billAmount
        }
    }
`;

export const ADD_SHOPPING = gql`
    mutation addShopping($ShoppingId: ID!, $Shopping: String!){
        addShopping(ShoppingId: $ShoppingId, Shopping: $Shopping){
            _id
            shoppingItem
            shoppingItemCost
        }
    }
`;

export const ADD_GROCERY = gql`
    mutation addGrocery($GroceryId: ID!, $Grocery: String!){
        addGrocery(GroceryId: $GroceryId, Grocery: $Grocery){
            _id
            groceryItem
            groceryItemCost
        }
    }
`;

export const ADD_PETS = gql`
    mutation addPets($PetId: ID!, $Pet: String!){
     addPet(PetId: $PetId, Pet: $Pet)
            _id
            petName
            petFood
        }
    }
`;

export const ADD_DINING = gql`
    mutation addDining($DiningId: ID!, $Dining: String!){
       addDining(DiningId: $DiningId, Dining: $Dining){
            _id
            diningRestaurant
            diningBill
        }
    }
`;

export const ADD_RECURRINGINVESTMENTS = gql`
    mutation addRecurringInvestment($RecurringInvestmentId: ID!, $RecurringInvestment: String!){
         addRecurringInvestment(RecurringInvestmentId: $RecurringInvestmentId, RecurringInvestment: $RecurringInvestment{{
            _id
            brokerName
            brokerageDeposit
        }
    }
`;

export const ADD_AUTH = gql`
    mutation addAuth($AuthToken: TOKEN!, $Auth: String!){
        addAuth(AuthToken: $AuthToken, Auth: $Auth)
            token
            user
        }
    }
`;
