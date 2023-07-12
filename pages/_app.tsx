import '../styles/globals.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { galleryReducer } from './redux/gallerySlice';

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp