import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser';
import App from './App.tsx'
import './index.css'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById("root")!).render(<App />);
