import { createContext, useContext, useReducer } from 'react';

const UserConext = createContext();

const initialeState = {
    userName: '',
    email: '',
    password: '',
    balance: 0,
    loan: 0,
    transactions: [],
    savings: [],
};

function getUserFromLoacalStorage(key, oldUsername) {
    const users = JSON.parse(localStorage?.getItem(key));
    return users.find(user => user.userName === oldUsername);
}

function updateLocalStorage(key, oldUsername, data) {
    // getting the users from local storage
    const users = JSON.parse(localStorage.getItem(key));
    // finding the current user from the users collection
    const user = users.find(user => user.userName === oldUsername);
    // updating the current user from the users collection
    const userUpdated = { ...user, ...data };
    // updating the users collection
    const usersUpdated = users.map(user =>
        user.userName === oldUsername
            ? { ...user, ...userUpdated }
            : { ...user }
    );

    // updating the local storage
    localStorage.setItem(key, JSON.stringify(usersUpdated));
}

function reducer(state, action) {
    switch (action.type) {
        case 'user/singup':
            // payload = the new user info = {}
            const {
                userName: newUsername,
                email: newEmail,
                password: newPassword,
            } = action.payload;

            return {
                ...state,
                userName: newUsername,
                email: newEmail,
                password: newPassword,
            };

        case 'user/login':
            // payload = the user info that exists in the local storage = {}
            const { userName: oldUsername } = action.payload;
            // getting the user's data from the local storage based on the username
            const oldUserLogin = getUserFromLoacalStorage('users', oldUsername);

            //updating the state of the user from the local storage
            return {
                ...oldUserLogin,
            };

        case 'account/deposit':
            const stateUpdatedDeposit = {
                ...state,
                balance: state.balance + action.payload,
                transactions: [
                    {
                        amount: action.payload,
                        action: 'Deposit',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                    ...state.transactions,
                ],
            };
            updateLocalStorage('users', state.userName, stateUpdatedDeposit);

            return { ...stateUpdatedDeposit };

        case 'account/withdraw':
            const stateUpdatedWithdraw = {
                ...state,
                // checking if the current amount that the user want to withdraw is grater than the current balance
                balance:
                    action.payload > state.balance
                        ? state.balance
                        : state.balance - action.payload,
                transactions: [
                    {
                        amount: action.payload,
                        action: 'Withdraw',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                    ...state.transactions,
                ],
            };
            updateLocalStorage('users', state.userName, stateUpdatedWithdraw);

            return { ...stateUpdatedWithdraw };

        case 'account/requestLoan':
            // checking if the user has requested loan
            if (state.loan > 0) return { ...state };

            const stateUpdatedRequestLoan = {
                ...state,
                loan: action.payload,
                balance: state.balance + action.payload,
                transactions: [
                    {
                        amount: action.payload,
                        action: 'Request loan',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                    ...state.transactions,
                ],
            };
            updateLocalStorage(
                'users',
                state.userName,
                stateUpdatedRequestLoan
            );

            return { ...stateUpdatedRequestLoan };

        case 'account/payLoan':
            if (state.loan === 0) return { ...state };

            const stateUpdatedPayLoan = {
                ...state,
                loan: 0,
                balance: state.balance - state.loan,
                transactions: [
                    {
                        amount: state.loan,
                        action: 'Pay loan',
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                    },
                    ...state.transactions,
                ],
            };
            updateLocalStorage('users', state.userName, stateUpdatedPayLoan);

            return { ...stateUpdatedPayLoan };

        case 'account/saving':
            const newSaving = { ...action.payload };
            const stateUpdatedSavings = {
                ...state,
                savings: [newSaving, ...state.savings],
            };
            updateLocalStorage('users', state.userName, stateUpdatedSavings);

            return { ...stateUpdatedSavings };

        case 'account/savedAmount':
            const newSavedAmount = { ...action.payload };
            let { savings } = state;
            savings = savings.map(saving =>
                saving.object !== newSavedAmount.object
                    ? { ...saving }
                    : { ...newSavedAmount }
            );

            const stateUpdatedSavedAmount = {
                ...state,
                savings,
            };
            updateLocalStorage(
                'users',
                state.userName,
                stateUpdatedSavedAmount
            );

            return { ...stateUpdatedSavedAmount };

        case 'account/removeObject':
            const objectName = action.payload;
            updateLocalStorage(
                'users',
                state.userName,
                {
                    ...state,
                    savings: state.savings.filter(
                        saving => saving.object !== objectName
                    ),
                }
            );

            return {
                ...state,
                savings: state.savings.filter(
                    saving => saving.object !== objectName
                ),
            };

        default:
            return { ...state };
    }
}
function UserProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialeState);

    return (
        <UserConext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserConext.Provider>
    );
}

function useUser() {
    const context = useContext(UserConext);

    if (!context) throw new Error('The contexte was used outside the profider');
    return context;
}

export { useUser, UserProvider };
