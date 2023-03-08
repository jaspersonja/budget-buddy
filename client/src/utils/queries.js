import { gql } from '@apollo/client';


export const QUERY_ME = gql`
    query me {
        me{
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
