import React from 'react';
import { useAppContext } from '../context/AppContext';
import Layout from '../components/Layout';
import TripCard from '../components/TripCard';
import { Page } from '../types';

const Dashboard: React.FC = () => {
    const { state, dispatch } = useAppContext();

    const navigateToAddTrip = () => {
        dispatch({ type: 'NAVIGATE', payload: { page: Page.AddTrip } });
    };

    return (
        <Layout title="My Trips">
            <div className="space-y-6 pb-20">
                {state.trips.length > 0 ? (
                    state.trips.map(trip => <TripCard key={trip.id} trip={trip} />)
                ) : (
                    <div className="text-center py-12 bg-white rounded-lg shadow">
                        <h3 className="text-lg font-medium text-gray-700">No trips yet!</h3>
                        <p className="text-gray-500 mt-1">Start your next adventure.</p>
                        <button 
                            onClick={navigateToAddTrip}
                            className="mt-4 bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
                        >
                            Create a Trip
                        </button>
                    </div>
                )}
            </div>
             <button
                onClick={navigateToAddTrip}
                className="fixed bottom-24 right-5 md:right-1/4 transform md:translate-x-48 bg-cyan-600 text-white rounded-full p-4 shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 z-20"
                aria-label="Add new trip"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
        </Layout>
    );
};

export default Dashboard;
