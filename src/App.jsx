import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Photos from './pages/Photos.jsx'
import Albums from './pages/Albums.jsx'
import Tour from './pages/Tour.jsx'
import Merch from './pages/Merch.jsx'
import Press from './pages/Press.jsx'
import PageTransition from './components/PageTransition.jsx'

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <PageTransition locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/music" element={<Albums />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </PageTransition>
    </Layout>
  )
}
