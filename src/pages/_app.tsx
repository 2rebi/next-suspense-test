import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            suspense: true,
            useErrorBoundary: true,
            cacheTime: 1000 * 60 * 5,
            staleTime: 1000 * 60 * 3,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
        </Hydrate>
    </QueryClientProvider>;
}
