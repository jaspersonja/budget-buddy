import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query User {
        user{
            _id
            username
            email
            password
            budget
        }
    } 
`;

export const QUERY_BUDGET = gql`
    query budget{
        budget{
            _id
            income
            bills
            shopping
            groceries
            pet
            dining
            recurringInvestment
        }
    }
`;

export const QUERY_BILLS = gql`
    query Bills{
        bills{
            _id
            billName
            billAmount
        }
    }
`;

export const QUERY_SHOPPING = gql`
    query Shopping{
        shopping{
            _id
            shoppingItem
            shoppingItemCost
        }
    }
`;

export const QUERY_GROCERY = gql`
    query Grocery{
        Grocery{
            _id
            groceryItem
            groceryItemCost
        }
    }
`;

export const QUERY_PETS = gql`
    query Pets{
        Pets{
            _id
            petName
            petFood
        }
    }
`;

export const QUERY_DINING = gql`
    query Dining{
        dining{
            _id
            diningRestaurant
            diningBill
        }
    }
`;

export const QUERY_RECURRINGINVESTMENTS = gql`
    query RecurringInvestments{
        RecurringInvestments{
            _id
            brokerName
            brokerageDeposit
        }
    }
`;

export const QUERY_AUTH = gql`
    query Auth{
        Auth{
            token
            user
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me{
            _id
            username
            email
            password
        }
    }
`;
