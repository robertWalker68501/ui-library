import Button from './components/Button.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/Card.tsx';
import NeuCheckBox from './components/CheckBox.tsx';
import Navbar from './components/Navbar.tsx';
import { NeuSlider } from './components/Slider.tsx';
import NeuSwitch from './components/Switch.tsx';

function App() {
  return (
    <main>
      <Navbar />
      <div className='flex flex-wrap items-center gap-4 px-6'>
        <Button>Default</Button>
        <Button variant={'primary'}>Primary</Button>
        <Button variant={'success'}>Success</Button>
        <Button variant={'info'}>Info</Button>
        <Button variant={'warning'}>Warning</Button>
        <Button variant={'destructive'}>Destructive</Button>
      </div>

      <div className='m-6'>
        <Card>
          <CardHeader>
            <CardTitle>This is my title</CardTitle>
            <CardDescription>This is the price of my product</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Benefit 1</li>
              <li>Benefit 2</li>
              <li>Benefit 3</li>
            </ul>
          </CardContent>
          <CardFooter className='flex flex-col gap-6'>
            <NeuSwitch />
            <NeuCheckBox />
            <NeuSlider />
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

export default App;
