import { Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import OnlineSchool from './pages/OnlineSchool.jsx'
import OnCampus from './pages/OnCampus.jsx'
import Floww from './pages/Floww.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="online-school" element={<OnlineSchool />} />
        <Route path="on-campus" element={<OnCampus />} />
        <Route path="floww" element={<Floww />} />
      </Route>
    </Routes>
  )
}
