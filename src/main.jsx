import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

import { Navbar } from './compounts/Navbar.jsx'
import { Banner } from './compounts/Banner.jsx'
import { Wcu } from './compounts/Wcu.jsx'
import { TrainerCard } from './compounts/TrainerCard .jsx'
import { Pricing } from './compounts/Pricing.jsx'
import { Contact } from './compounts/Contact.jsx'
import { Footer } from './compounts/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Navbar />
    <Banner />
    <Wcu />
    <TrainerCard />
    <Pricing />
    <Contact />
    <Footer />
  </StrictMode>,
)
