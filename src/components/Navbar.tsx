import { Moon, Sun } from 'lucide-react';

import Button from './Button';
import { useTheme } from '../providers/theme-provider';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className='flex items-center justify-between px-12 py-8'>
      <h1 className='font-bold'>Neumorphism UI</h1>
      <Button
        shape='circle'
        size='icon'
        onClick={() => {
          // setTheme(theme === 'dark' ? 'light' : 'dark');

          if (theme === 'light') {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }}
      >
        {theme === 'light' ? (
          <Sun className='text-warning h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        ) : (
          <Moon className='text-primary absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        )}

        <span className='sr-only'>Toggle theme</span>
      </Button>
    </nav>
  );
};

export default Navbar;
