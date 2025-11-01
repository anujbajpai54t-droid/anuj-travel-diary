import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';

const NavItem: React.FC<{
    page: Page;
    // Fix for line 7: Changed type from JSX.Element to React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
    icon: React.ReactNode;
    label: string;
}> = ({ page, icon, label }) => {
    const { state, dispatch } = useAppContext();
    const isActive = state.currentPage === page;

    const navigate = () => {
        dispatch({ type: 'NAVIGATE', payload: { page } });
    };

    return (
        <button
            onClick={navigate}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-sm transition-colors duration-200 ease-in-out ${
                isActive ? 'text-cyan-600' : 'text-gray-500 hover:text-cyan-500'
            }`}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Go to ${label}`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
};


const BottomNav: React.FC = () => {
    return (
        <footer className="sticky bottom-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] w-full z-10">
            <nav className="flex justify-around h-16">
                <NavItem
                    page={Page.Dashboard}
                    label="Trips"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>}
                />
                <NavItem
                    page={Page.MapView}
                    label="Map"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
                />
                <NavItem
                    page={Page.Profile}
                    label="Profile"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                />
            </nav>
        </footer>
    );
};

export default BottomNav;