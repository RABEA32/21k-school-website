import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const OnlineSchool = lazy(() => import('./pages/OnlineSchool.jsx'))
const OnCampus = lazy(() => import('./pages/OnCampus.jsx'))
const Floww = lazy(() => import('./pages/Floww.jsx'))

export default function App() {
  return (
    // Above Layout so its scroll-to-#hash effect runs only once the lazy page is in the DOM.
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="online-school" element={<OnlineSchool />} />
          <Route path="on-campus" element={<OnCampus />} />
          <Route path="floww" element={<Floww />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
