
export interface Trip {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    coverImage: string;
}

export interface DiaryEntry {
    id: string;
    tripId: string;
    date: string;
    text: string;
    photos: string[]; // URLs or base64 strings
    location?: { lat: number; lng: number; name: string };
}

export enum ExpenseCategory {
    Food = 'Food',
    Travel = 'Travel',
    Stay = 'Stay',
    Activities = 'Activities',
    Other = 'Other'
}

export interface Expense {
    id: string;
    tripId: string;
    date: string;
    amount: number;
    category: ExpenseCategory;
    description: string;
}

export interface User {
    name: string;
    email: string;
    avatar: string;
}

export enum Page {
    Login = 'Login',
    Dashboard = 'Dashboard',
    AddTrip = 'AddTrip',
    TripDetails = 'TripDetails',
    AddEntry = 'AddEntry',
    ExpenseTracker = 'ExpenseTracker',
    MapView = 'MapView',
    Profile = 'Profile'
}
   