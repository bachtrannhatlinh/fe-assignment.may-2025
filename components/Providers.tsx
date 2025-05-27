'use client';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store';
import { useEffect, useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Provider store={store}>
        <div suppressHydrationWarning={true}>
          {children}
        </div>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div suppressHydrationWarning={true}>
          {children}
        </div>
      </PersistGate>
    </Provider>
  );
}