import { gql } from '@apollo/client';


export const QUERY_ME = gql`
    query me {
        me{
            _id
            username
            email
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
