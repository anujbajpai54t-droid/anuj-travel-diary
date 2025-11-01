import React from 'react';
import { useAppContext } from '../context/AppContext';
import Layout from '../components/Layout';
import { Page } from '../types';

const TripDetails: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const trip = state.trips.find(t => t.id === state.currentTripId);
    const entries = state.entries.filter(e => e.tripId === state.currentTripId);

    const goBack = () => {
        dispatch({ type: 'NAVIGATE', payload: { page: Page.Dashboard } });
    };

    if (!trip) {
        return (
            <Layout title="Trip Not Found" showBackButton onBack={goBack}>
                <p>The trip you are looking for does not exist.</p>
            </Layout>
        );
    }
    
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Layout title={trip.name} showBackButton onBack={goBack}>
            <div className="pb-20">
                <img src={trip.coverImage} alt={trip.name} className="w-full h-56 object-cover rounded-2xl mb-4 shadow-lg" />
                <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
                    <h2 className="text-xl font-bold text-gray-800">{trip.destination}</h2>
                    <p className="text-gray-500 text-sm mt-1">{formatDate(trip.startDate)} to {formatDate(trip.endDate)}</p>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Diary Entries</h3>
                
                <div className="space-y-4">
                    {entries.length > 0 ? (
                        entries.map(entry => (
                            <div key={entry.id} className="bg-white p-4 rounded-xl shadow-sm transition-shadow hover:shadow-md">
                                <p className="font-semibold text-cyan-700">{formatDate(entry.date)}</p>
                                <p className="text-gray-700 my-2">{entry.text}</p>
                                {entry.photos.length > 0 && (
                                    <img src={entry.photos[0]} alt="Diary entry" className="mt-2 rounded-lg w-full h-auto max-w-sm"/>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <p className="text-gray-500">No entries for this trip yet.</p>
                             <button 
                                onClick={() => dispatch({type: 'NAVIGATE', payload: { page: Page.AddEntry, tripId: trip.id }})}
                                className="mt-4 bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
                            >
                                Add First Entry
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default TripDetails;
