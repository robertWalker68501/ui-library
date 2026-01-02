import Button from './components/Button.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <main>
      <Navbar />
      <div className='space-x-2'>
        <Button>Default</Button>
        <Button variant={'primary'}>Primary</Button>
        <Button variant={'success'}>Success</Button>
        <Button variant={'info'}>Info</Button>
        <Button variant={'warning'}>Warning</Button>
        <Button variant={'destructive'}>Destructive</Button>
      </div>
    </main>
  );
}

export default App;
