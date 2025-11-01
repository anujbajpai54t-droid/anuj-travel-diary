
import React from 'react';
import { AppProvider } from './context/AppContext';
import AppRouter from './components/AppRouter';

const App: React.FC = () => {
    return (
        <AppProvider>
            <div className="antialiased text-gray-800">
                <AppRouter />
            </div>
        </AppProvider>
    );
};

export default App;
   