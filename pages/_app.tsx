import '~/styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '~/store';
import { PortalManager } from '@chakra-ui/portal';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PortalManager>
                <Component {...pageProps} />
            </PortalManager>
        </Provider>
    );
}

export default MyApp;
