import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';

// Import pages
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import TripDetails from '../pages/TripDetails';

// Placeholder pages for now
const AddTrip: React.FC = () => <div>Add Trip Page</div>;
const AddEntry: React.FC = () => <div>Add Entry Page</div>;
const ExpenseTracker: React.FC = () => <div>Expense Tracker Page</div>;
const MapView: React.FC = () => <div>Map View Page</div>;
const Profile: React.FC = () => <div>Profile Page</div>;

const AppRouter: React.FC = () => {
    const { state } = useAppContext();

    if (!state.isAuthenticated) {
        return <Login />;
    }

    switch (state.currentPage) {
        case Page.Dashboard:
            return <Dashboard />;
        case Page.AddTrip:
            return <AddTrip />;
        case Page.TripDetails:
            return <TripDetails />;
        case Page.AddEntry:
            return <AddEntry />;
        case Page.ExpenseTracker:
            return <ExpenseTracker />;
        case Page.MapView:
            return <MapView />;
        case Page.Profile:
            return <Profile />;
        default:
            return <Dashboard />;
    }
};

export default AppRouter;
