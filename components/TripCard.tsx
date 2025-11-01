import React from 'react';
import { Trip, Page } from '../types';
import { useAppContext } from '../context/AppContext';

interface TripCardProps {
    trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
    const { dispatch } = useAppContext();

    const handleCardClick = () => {
        dispatch({ type: 'NAVIGATE', payload: { page: Page.TripDetails, tripId: trip.id } });
    };
    
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div 
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleCardClick()}
            aria-label={`View details for trip: ${trip.name}`}
        >
            <img className="h-48 w-full object-cover" src={trip.coverImage} alt={`Cover image for ${trip.name}`} />
            <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800 truncate">{trip.name}</h2>
                <p className="text-gray-600 mt-1 truncate">{trip.destination}</p>
                <div className="flex items-center text-gray-500 text-sm mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</span>
                </div>
            </div>
        </div>
    );
};

export default TripCard;
