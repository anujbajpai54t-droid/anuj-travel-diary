
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Trip, DiaryEntry, Expense, User, Page, ExpenseCategory } from '../types';

interface AppState {
    isAuthenticated: boolean;
    user: User | null;
    trips: Trip[];
    entries: DiaryEntry[];
    expenses: Expense[];
    currentPage: Page;
    currentTripId: string | null;
}

const initialState: AppState = {
    isAuthenticated: false,
    user: null,
    trips: [
        { id: '1', name: 'Summer in Italy', destination: 'Rome, Florence, Venice', startDate: '2023-06-10', endDate: '2023-06-25', coverImage: 'https://picsum.photos/800/600?random=1' },
        { id: '2', name: 'Japan Adventure', destination: 'Tokyo, Kyoto', startDate: '2024-03-15', endDate: '2024-03-30', coverImage: 'https://picsum.photos/800/600?random=2' },
    ],
    entries: [
        { id: 'e1', tripId: '1', date: '2023-06-11', text: 'Visited the Colosseum today. It was magnificent!', photos: ['https://picsum.photos/400/300?random=3'], location: { lat: 41.8902, lng: 12.4922, name: 'Colosseum' } },
        { id: 'e2', tripId: '1', date: '2023-06-15', text: 'Enjoyed the art in Florence. The David is a masterpiece.', photos: ['https://picsum.photos/400/300?random=4'], location: { lat: 43.7731, lng: 11.2561, name: 'Galleria dell\'Accademia' } },
        { id: 'e3', tripId: '2', date: '2024-03-16', text: 'Shibuya Crossing was insane! So many people.', photos: ['https://picsum.photos/400/300?random=5'], location: { lat: 35.6595, lng: 139.7005, name: 'Shibuya Crossing' } },
    ],
    expenses: [
        { id: 'ex1', tripId: '1', date: '2023-06-11', amount: 25, category: ExpenseCategory.Food, description: 'Pizza near Colosseum' },
        { id: 'ex2', tripId: '1', date: '2023-06-11', amount: 18, category: ExpenseCategory.Activities, description: 'Colosseum Ticket' },
        { id: 'ex3', tripId: '2', date: '2024-03-16', amount: 12, category: ExpenseCategory.Food, description: 'Ramen' },
    ],
    currentPage: Page.Login,
    currentTripId: null,
};

type Action =
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' }
    | { type: 'NAVIGATE'; payload: { page: Page; tripId?: string | null } }
    | { type: 'ADD_TRIP'; payload: Trip }
    | { type: 'ADD_ENTRY'; payload: DiaryEntry }
    | { type: 'ADD_EXPENSE'; payload: Expense };

const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, user: action.payload, currentPage: Page.Dashboard };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null, currentPage: Page.Login };
        case 'NAVIGATE':
            return { ...state, currentPage: action.payload.page, currentTripId: action.payload.tripId || null };
        case 'ADD_TRIP':
            return { ...state, trips: [...state.trips, action.payload], currentPage: Page.Dashboard };
        case 'ADD_ENTRY':
            return { ...state, entries: [...state.entries, action.payload], currentPage: Page.TripDetails };
        case 'ADD_EXPENSE':
            return { ...state, expenses: [...state.expenses, action.payload] };
        default:
            return state;
    }
};

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> }>({
    state: initialState,
    dispatch: () => null
});

export const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
   