import React, { ReactNode } from 'react';
import BottomNav from './BottomNav';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';

interface LayoutProps {
    title: string;
    children: ReactNode;
    showBackButton?: boolean;
    onBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ title, children, showBackButton, onBack }) => {
    const { state } = useAppContext();
    const showNav = state.isAuthenticated && state.currentPage !== Page.Login;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col max-w-4xl mx-auto">
            <header className="bg-white shadow-sm sticky top-0 z-10 w-full">
                <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                    {showBackButton && (
                        <button onClick={onBack} className="mr-4 text-gray-600 hover:text-cyan-600" aria-label="Go back">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                    )}
                    <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                </div>
            </header>
            <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-6">
                {children}
            </main>
            {showNav && <BottomNav />}
        </div>
    );
};

export default Layout;
