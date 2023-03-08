import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username email: $email, password: $password){
            token
            user {
                _id
                username
                email
                password
                budget {
                    income
                    bills{
                        _id
                        billName
                        billAmount
                    }
                    shopping{
                        _id
                        shoppingItem
                        shoppingItemCost
                    }
                    grocery{
                        _id
                        groceryItem
                        groceryItemCost
                    }
                    pets{
                        _id
                        petName
                        petFood
                        petCost
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningCost
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                    }

                }
            }
        }    
    }
`;

export const ADD_BUDGET = gql`
    mutation addBudget($budgetId: ID!, $budget: String!) {
        addBudget(budgetId: $BudgetId, budget: $Budget){
                _id
                username
                email
                password
                budget {
                    income
                    bills{
                        _id
                        billName
                        billAmount
                    }
                    shopping{
                        _id
                        shoppingItem
                        shoppingItemCost
                    }
                    grocery{
                        _id
                        groceryItem
                        groceryItemCost
                    }
                    pets{
                        _id
                        petName
                        petFood
                        petCost
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningCost
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                    }

                }
            }
        } 
`;

export const ADD_BILLS = gql`
    mutation addBills($billsId: ID!, $bills: String!){
        addBills(billsId: $billsId, bills: $bills){
                _id
                username
                email
                password
                budget {
                    income
                    bills{
                        _id
                        billName
                        billAmount
                    }
                    shopping{
                        _id
                        shoppingItem
                        shoppingItemCost
                    }
                    grocery{
                        _id
                        groceryItem
                        groceryItemCost
                    }
                    pets{
                        _id
                        petName
                        petFood
                        petCost
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningCost
                    }
                    RecurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                    }

                }
            }
        } 
`;

export const ADD_SHOPPING = gql`
    mutation addShopping($shoppingId: ID!, $shopping: String!){
        addShopping(shoppingId: $shoppingId, shopping: $shopping){
            _id
            username
            email
            password
            budget {
                income
                bills{
                    _id
                    billName
                    billAmount
                }
                shopping{
                    _id
                    shoppingItem
                    shoppingItemCost
                }
                grocery{
                    _id
                    groceryItem
                    groceryItemCost
                }
                pets{
                    _id
                    petName
                    petFood
                    petCost
                }
                dining{
                    _id
                    diningRestaurant
                    diningCost
                }
                recurringInvestment{
                    _id
                    brokerName
                    brokerageDeposit
                }
            }
        }
    } 
`;

export const ADD_GROCERY = gql`
    mutation addGrocery($groceryId: ID!, $grocery: String!){
        addGrocery(groceryId: $groceryId, grocery: $grocery){
            _id
            username
            email
            password
            budget {
                income
                bills{
                    _id
                    billName
                    billAmount
                }
                shopping{
                    _id
                    shoppingItem
                    shoppingItemCost
                }
                grocery{
                    _id
                    groceryItem
                    groceryItemCost
                }
                pets{
                    _id
                    petName
                    petFood
                    petCost
                }
                dining{
                    _id
                    diningRestaurant
                    diningCost
                }
                recurringInvestment{
                    _id
                    brokerName
                    brokerageDeposit
                }
            }
        }
    } 
`;

export const ADD_PET = gql`
    mutation addPet($petId: ID!, $pet: String!){
     addPet(petId: $petId, pet: $pet){
            _id
            username
            email
            password
            budget {
                income
                bills{
                    _id
                    billName
                    billAmount
                }
                shopping{
                    _id
                    shoppingItem
                    shoppingItemCost
                }
                grocery{
                    _id
                    groceryItem
                    groceryItemCost
                }
                pets{
                    _id
                    petName
                    petFood
                    petCost
                }
                dining{
                    _id
                    diningRestaurant
                    diningCost
                }
                recurringInvestment{
                    _id
                    brokerName
                    brokerageDeposit
                }
            }
        }
    } 
`;

export const ADD_DINING = gql`
    mutation addDining($diningId: ID!, $dining: String!){
       addDining(diningId: $diningId, dining: $dining){
            _id
            username
            email
            password
            budget {
                income
                bills{
                    _id
                    billName
                    billAmount
                }
                shopping{
                    _id
                    shoppingItem
                    shoppingItemCost
                }
                grocery{
                    _id
                    groceryItem
                    groceryItemCost
                }
                pets{
                    _id
                    petName
                    petFood
                    petCost
                }
                dining{
                    _id
                    diningRestaurant
                    diningCost
                }
                recurringInvestment{
                    _id
                    brokerName
                    brokerageDeposit
                }

            }
        }
    } 
`;

export const ADD_RECURRINGINVESTMENTS = gql`
    mutation addRecurringInvestment($recurringInvestmentId: ID!, $recurringInvestment: String!){
         addRecurringInvestment(recurringInvestmentId: $recurringInvestmentId, recurringInvestment: $recurringInvestment){
                _id
                username
                email
                password
                budget {
                    income
                    bills{
                        _id
                        billName
                        billAmount
                    }
                    shopping{
                        _id
                        shoppingItem
                        shoppingItemCost
                    }
                    grocery{
                        _id
                        groceryItem
                        groceryItemCost
                    }
                    pets{
                        _id
                        petName
                        petFood
                        petCost
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningCost
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                    }

                }
            }
        } 
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                email
                password
                budget {
                    income
                    bills{
                        _id
                        billName
                        billAmount
                    }
                    shopping{
                        _id
                        shoppingItem
                        shoppingItemCost
                    }
                    grocery{
                        _id
                        groceryItem
                        groceryItemCost
                    }
                    pets{
                        _id
                        petName
                        petFood
                        petCost
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningCost
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                    }

                }
            }
        } 
    }
`;
