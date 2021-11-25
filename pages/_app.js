import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import '../components/nav-mobile/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      once: 'false',
      phone: 'false',
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
