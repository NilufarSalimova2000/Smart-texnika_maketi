import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { MainLayout } from './layout/main-layout'
import { MainRouter } from './components/router/main-router'
import { ProfileLayout } from './components/profile-layout'
import { ProductCard } from './components/product-card'
import { ProductDetail } from './components/product-detail'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path="product/:id" element={<ProductDetail />}/>
          {MainRouter.map(({id, path, component:Comp}) => (
            <Route key={id} index={!path && true} path={path} element={<Comp/>}></Route>
          ))}
          <Route path='profile' element={<ProfileLayout />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
