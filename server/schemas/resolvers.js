const { AuthenticationError } = require('apollo-server-express');
const { User, Budget } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { username }) => {
            return User.findOne({ username }).populate('budget')
        },

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

            return { toekn, user };
        },
        login: async (parent, { email, password}) => {
            const user = await user.findone({email});

            if (!user) {
                throw new AuthenticationError('No user is found with this email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){ throw new AuthenticationError ('Incorrect Password');
            }

            const token = signToken(user);
            return { token, user };
        },
        addBudget: async (parent, { BudgetId, Budget }, context) => {
            if (context.Budget) {
                return Budget.findOneAndUpdate(
                    {_id: BudgetId},
                    {
                        $addToSet: { Budget: Budget},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addBills: async (parent, { BillsId, Bills }, context) => {
            if (context.bills) {
                return Bills.findOneAndUpdate(
                    {_id: BillsId},
                    {
                        $addToSet: { Bills: Bills},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addShopping: async (parent, { ShoppingId, Shopping }, context) => {
            if (context.Shopping) {
                return Shopping.findOneAndUpdate(
                    {_id: ShoppingId},
                    {
                        $addToSet: { Shopping: Shopping},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addGrocery: async (parent, { GroceryId, Grocery }, context) => {
            if (context.Grocery) {
                return Grocery.findOneAndUpdate(
                    {_id: GroceryId},
                    {
                        $addToSet: { Grocery: Grocery},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addPet: async (parent, { PetId, Pet }, context) => {
            if (context.Pet) {
                return Pet.findOneAndUpdate(
                    {_id: PetId},
                    {
                        $addToSet: { Pet: Pet},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addDining: async (parent, { DiningId, Dining }, context) => {
            if (context.Dining) {
                return Dining.findOneAndUpdate(
                    {_id: DiningId},
                    {
                        $addToSet: { Dining: Dining},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
        addRecurringInvestment: async (parent, { RecurringInvestmentId, RecurringInvestment }, context) => {
            if (context.RecurringInvestment) {
                return RecurringInvestment.findOneAndUpdate(
                    {_id: RecurringInvestmentId},
                    {
                        $addToSet: { RecurringInvestment: RecurringInvestment},
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('you need to be logged in');
        }, 
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
        removeBudget: async (parent, { Budget }, context) => {
            if (context.Budget) {
                return Budget.findOneAndUpdate(
                    {_id: context.Budget._id},
                    { $pull: { Budget: Budget}},
                    {new: true}
                );
            }
            throw new AuthenticationError ('you need to be logged in');
        },
        removeBills: async (parent, { Bills }, context) => {
            if (context.Bills) {
                return Bills.findOneAndUpdate(
                    {_id: context.Bills._id},
                    { $pull: { Bills: Bills}},
                    {new: true}
                );
            }
            throw new AuthenticationError ('you need to be logged in');
        },
        removeShopping: async (parent, { Shopping }, context) => {
            if (context.Shopping) {
                return Shopping.findOneAndUpdate(
                    {_id: context.Shopping._id},
                    { $pull: { Shopping: Shopping}},
                    {new: true}
                );
            }
            throw new AuthenticationError ('you need to be logged in');
        },
        removeGrocery: async (parent, { Grocery }, context) => {
            if (context.Grocery) {
                return Grocery.findOneAndUpdate(
                    {_id: context.Grocery._id},
                    { $pull: { Grocery: Grocery}},
                    {new: true}
                );
            }
            throw new AuthenticationError ('you need to be logged in');
        },
        removePet: async (parent, { Pet }, context) => {
            if (context.Pet) {
                return Pet.findOneAndUpdate(
                    {_id: context.Pet._id},
                    { $pull: { Pet: Pet}},
                    {new: true}
                );
            }
            throw new AuthenticationError ('you need to be logged in');
        },
        removeDining: async (parent, { Dining }, context) => {
            if (context.Dining) {
                return Dining.findOneAndUpdate(
                    {_id: context.Dining._id},
                    { $pull: { Dining: Dining}},
                    {new: true}
                );
            }
            throw new AuthenticationError ('you need to be logged in');
        },
        removeRecurringInvestment: async (parent, { RecurringInvestment }, context) => {
            if (context.RecurringInvestment) {
                return RecurringInvestment.findOneAndUpdate(
                    {_id: context.RecurringInvestment._id},
                    { $pull: { RecurringInvestment: RecurringInvestment}},
                    {new: true}
                );
            }
            throw new AuthenticationError ('you need to be logged in');
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


    },
};

module.exports = resolvers; 