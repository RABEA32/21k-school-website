import { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const OnlineSchool = lazy(() => import('./pages/OnlineSchool.jsx'))
const OnCampus = lazy(() => import('./pages/OnCampus.jsx'))
const Floww = lazy(() => import('./pages/Floww.jsx'))
const Admission = lazy(() => import('./pages/Admission.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Garage = lazy(() => import('./pages/Garage.jsx'))
const Inside21K = lazy(() => import('./pages/Inside21k.jsx'))

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
          {/* Imported pages: their styles (components/ui.css) apply only inside .zip-page. */}
          <Route element={<div className="zip-page"><Outlet /></div>}>
            <Route path="admission" element={<Admission />} />
            <Route path="blog" element={<Blog />} />
            <Route path="garage" element={<Garage />} />
            <Route path="inside-21k" element={<Inside21K />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}
