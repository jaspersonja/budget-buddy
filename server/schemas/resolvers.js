const { AuthenticationError } = require('apollo-server-express');
const { User, Budget } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({_id: context.user._id})
            }
            throw new AuthenticationError('You need to be logged in!');
        }

        //budget and down is work in progress
        // Budget: async (parent, { BudgetId }) => {
        //     const params = BudgetId ? {BudgetId} : {};
        //     return Budget.find(params).sort()
        // },
        // Bills: async (parent, { BillsId }) => {
        //     const params = BillsId ? {BillsId} : {};
        //     return Bills.find(params).sort()
        // },
        // Shopping: async (parent, { ShoppingId }) => {
        //     const params = ShoppingId ? {ShoppingId} : {};
        //     return Shopping.find(params).sort()
        // },
        // Grocery: async (parent, { GroceryId }) => {
        //     const params = GroceryId ? {GroceryId} : {};
        //     return Grocery.find(params).sort()
        // },
        // Pet: async (parent, { PetId }) => {
        //     const params = PetId ? {PetId} : {};
        //     return Pet.find(params).sort()
        // },
        // Dining: async (parent, { DiningId }) => {
        //     const params = DiningId ? {DiningId} : {};
        //     return Dining.find(params).sort()
        // },
        // Recurringinvestment: async (parent, { RecurringInvestmentId }) => {
        //     const params = RecurringInvestmentId ? {RecurringInvestmentId} : {};
        //     return RecurringInvestment.find(params).sort()
        // },


    },
// will need to add each mutation and removed each mutation. 
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password}) => {
            const user = await User.findOne({email});

            if (!user) {
                throw new AuthenticationError('No user is found with this email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){ throw new AuthenticationError ('Incorrect Password');
            }

            const token = signToken(user);
            return { token, user };
        }, 
        addBill: async (parent,  BillInput , context) => {
            console.log(BillInput.input)
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: { [`budget.bill`]: BillInput.input},},
                    {new: true, runValidators: true,}
                );
                return updatedUser;
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addShopping: async (parent, ShoppingInput , context) => {
            console.log('Trigger')
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {
                        $addToSet: { [`budget.shopping`]: ShoppingInput.input},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
                return updatedUser;
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addGrocery: async (parent, GroceryInput , context) => {
            console.log('Trigger')
            if (context.user) {
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {
                        $addToSet: { [`budget.grocery`]: GroceryInput.input},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addPet: async (parent, PetInput, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {
                        $addToSet: { [`budget.pet`]: PetInput.input},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addDining: async (parent, DiningInput , context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {
                        $addToSet: { [`budget.dining`]: DiningInput.input},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addRecurringInvestment: async (parent, RecurringInvestmentInput, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {
                        $addToSet: { [`budget.recurringInvestment`]: RecurringInvestmentInput.input},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        updateIncome: async (parent, income, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {[`budget.income`]: income},
                    {}
                )
            }
        }
        // addAuth: async (parent, { AuthToken, Auth }, context) => {
        //     if (context.Auth) {
        //         return Auth.findOneAndUpdate(
        //             {token: AuthToken},
        //             {
        //                 $addToSet: { Auth: Auth},
        //             },
        //             {
        //                 new: true,
        //                 runValidators: true,
        //             }
        //         );
        //     }

        //     throw new AuthenticationError('you need to be logged in');
        // },
        // removeUser: async (parent, args, context) => {
        //     if (context.User) {
        //         return User.findOneandDelete({_id: context.user._id });
        //     }
        //     throw new AuthenticationError('You need to be logged in.');
        // },
        // removeBudget: async (parent, { BudgetId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $pull: { Budget: BudgetId}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        // },
        // removeBill: async (parent, { BillId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $pull: { Bills: BillsId}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        // },
        // removeShopping: async (parent, { ShoppingId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $pull: { Shopping: ShoppingId}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        // },
        // removeGrocery: async (parent, { GroceryId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $pull: { Grocery: GroceryId}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        // },
        // removePet: async (parent, { PetId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $pull: { Pet: PetId}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        // },
        // removeDining: async (parent, { DiningId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $pull: { Dining: DiningId}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        // },
        // removeRecurringInvestment: async (parent, { RecurringInvestmentId }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             {_id: context.user._id},
        //             { $pull: { RecurringInvestment: RecurringInvestmentId}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        },
        // removeAuth: async (parent, { Auth }, context) => {
        //     if (context.Auth) {
        //         return Auth.findOneAndUpdate(
        //             {token: context.Auth.token},
        //             { $pull: { Auth: Auth}},
        //             {new: true}
        //         );
        //     }
        //     throw new AuthenticationError ('you need to be logged in');
        // },


    // },
};

module.exports = resolvers; 