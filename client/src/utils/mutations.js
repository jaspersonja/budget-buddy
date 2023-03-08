import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
            _id
            username
            }
        }
    }
`;

export const ADD_BUDGET = gql`
    mutation addBudget($input: BudgetInput) {
        addBudget(input: $input){
                _id
                username
                email
                password
                budget {
                    income
                    bill{
                        _id
                        billName
                        billAmount
                        billDate
                    }
                    shopping{
                        _id
                        shoppingPlace
                        shoppingCost
                        shoppingDate
                    }
                    grocery{
                        _id
                        groceryPlace
                        groceryCost
                        groceryDate
                    }
                    pet{
                        _id
                        petItem
                        petItemCost
                        petDate
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningBill
                        diningDate
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                        brokerageDate
                    }

                }
            }
        } 
`;

export const ADD_BILL = gql`
    mutation addBill($input: BillInput){
        addBill(input: $input){
            _id
                username
                email
                password
                budget {
                    income
                    bill{
                        _id
                        billName
                        billAmount
                        billDate
                    }
                    shopping{
                        _id
                        shoppingPlace
                        shoppingCost
                        shoppingDate
                    }
                    grocery{
                        _id
                        groceryPlace
                        groceryCost
                        groceryDate
                    }
                    pet{
                        _id
                        petItem
                        petItemCost
                        petDate
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningBill
                        diningDate
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                        brokerageDate
                    }

                }
            }
        } 
`;

export const ADD_SHOPPING = gql`
    mutation addShopping($input: ShoppingInput){
        addShopping(input: $input){
            _id
                username
                email
                password
                budget {
                    income
                    bill{
                        _id
                        billName
                        billAmount
                        billDate
                    }
                    shopping{
                        _id
                        shoppingPlace
                        shoppingCost
                        shoppingDate
                    }
                    grocery{
                        _id
                        groceryPlace
                        groceryCost
                        groceryDate
                    }
                    pet{
                        _id
                        petItem
                        petItemCost
                        petDate
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningBill
                        diningDate
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                        brokerageDate
                    }

                }
            }
        } 
`;

export const ADD_GROCERY = gql`
    mutation addGrocery($input: GroceryInput){
        addGrocery(input: $input){
            _id
                username
                email
                password
                budget {
                    income
                    bill{
                        _id
                        billName
                        billAmount
                        billDate
                    }
                    shopping{
                        _id
                        shoppingPlace
                        shoppingCost
                        shoppingDate
                    }
                    grocery{
                        _id
                        groceryPlace
                        groceryCost
                        groceryDate
                    }
                    pet{
                        _id
                        petItem
                        petItemCost
                        petDate
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningBill
                        diningDate
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                        brokerageDate
                    }

                }
            }
        } 
`;

export const ADD_PET = gql`
    mutation addPet($input: GroceryInput){
     addPet(input: $input){
        _id
                username
                email
                password
                budget {
                    income
                    bill{
                        _id
                        billName
                        billAmount
                        billDate
                    }
                    shopping{
                        _id
                        shoppingPlace
                        shoppingCost
                        shoppingDate
                    }
                    grocery{
                        _id
                        groceryPlace
                        groceryCost
                        groceryDate
                    }
                    pet{
                        _id
                        petItem
                        petItemCost
                        petDate
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningBill
                        diningDate
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                        brokerageDate
                    }

                }
            }
        } 
`;

export const ADD_DINING = gql`
    mutation addDining($input: DiningInput){
       addDining(input: $input){
            _id
            username
            email
            password
            budget {
                income
                bill{
                    _id
                    billName
                    billAmount
                    billDate
                }
                shopping{
                    _id
                    shoppingPlace
                    shoppingCost
                    shoppingDate
                }
                grocery{
                    _id
                    groceryPlace
                    groceryCost
                    groceryDate
                }
                pet{
                    _id
                    petItem
                    petItemCost
                    petDate
                }
                dining{
                    _id
                    diningRestaurant
                    diningBill
                    diningDate
                }
                recurringInvestment{
                    _id
                    brokerName
                    brokerageDeposit
                    brokerageDate
                }

            }
        }
    } 
`;

export const ADD_RECURRINGINVESTMENTS = gql`
    mutation addRecurringInvestment($input: RecurringInvestmentInput){
         addRecurringInvestment(input: $input){
            _id
                username
                email
                password
                budget {
                    income
                    bill{
                        _id
                        billName
                        billAmount
                        billDate
                    }
                    shopping{
                        _id
                        shoppingPlace
                        shoppingCost
                        shoppingDate
                    }
                    grocery{
                        _id
                        groceryPlace
                        groceryCost
                        groceryDate
                    }
                    pet{
                        _id
                        petItem
                        petItemCost
                        petDate
                    }
                    dining{
                        _id
                        diningRestaurant
                        diningBill
                        diningDate
                    }
                    recurringInvestment{
                        _id
                        brokerName
                        brokerageDeposit
                        brokerageDate
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
            }
        } 
    }
`;
