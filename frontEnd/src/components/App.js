import Footer from './Footer/Footer';
import FormSection from './FormSection/FormSection';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <FormSection />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
