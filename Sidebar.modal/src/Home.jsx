import './App.css'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
        <div>
        <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
        </div>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;
