/* import { render, screen } from '@testing-library/react'; */
import App from './App';
import { createRoot } from 'react-dom/client';

test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container); 
    root.render(<App tab="home" />);
    root.unmount();
}); ///изменения в test-ах компонентов, теперь нужно в сюда писать этот кусок кода



/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
