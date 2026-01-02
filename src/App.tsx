import Button from './components/Button.tsx';

function App() {
  return (
    <main>
      <h1 className='text-3xl font-semibold'>Home Page</h1>
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
