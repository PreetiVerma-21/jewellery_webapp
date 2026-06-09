import React, { Suspense } from 'react';
import AppRoutes from './component/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Spinner from './utilities/Spinner';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner/>}>
    <AppRoutes/>
    </Suspense>
    {/* </Spinner> */}
    </QueryClientProvider>
    </>
  );
}

export default App;
