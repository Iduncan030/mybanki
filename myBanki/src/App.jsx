import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { UserProvider } from './contexts/UserProvider';
import { AuthenticationProvider } from './contexts/AuthenticationProvider';

import SpinnerFullPage from './components/SpinnerFullPage';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import RequestLoan from './components/RequestLoan';
import PayLoan from './components/PayLoan';

const Homepage = lazy(() => import('./pages/Homepage'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

function App() {

    return (
        <UserProvider>
            <AuthenticationProvider>
                <BrowserRouter>
                    <Suspense fallback={<SpinnerFullPage />}>
                        <Routes>
                            <Route index element={<Homepage />} />
                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                            <Route
                                path="dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            >
                                <Route
                                    index
                                    element={<Navigate replace to="deposit" />}
                                />
                                <Route path="deposit" element={<Deposit />} />
                                <Route path="withdraw" element={<Withdraw />} />
                                <Route
                                    path="loan/request"
                                    element={<RequestLoan />}
                                />
                                <Route path="loan/pay" element={<PayLoan />} />
                            </Route>
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </AuthenticationProvider>
        </UserProvider>
    );
}

export default App;
