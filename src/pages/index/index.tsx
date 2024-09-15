import { View } from '@tarojs/components'
import * as React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <View className="drawer-box">
          <View className="box-item">
            <Link to="/pages/index/index/view1?a=1&b=2">view1</Link>
          </View>
          <View className="box-item">
            <Link to="/pages/index/index/view2#a=3&b=4">view2</Link>
          </View>
          <View className="box-item">
            <Link to="/pages/index/index/2?a=1&b=2#a=3&b=4">view3</Link>
          </View>
        </View>

        <Routes>
          <Route path="/pages/browser-router/index" element={<Home />}></Route>
          <Route path="/pages/index/index/view1" element={<About />}></Route>
          <Route path="/pages/index/index/view2" element={<Dashboard />}></Route>
          <Route path="/pages/index/index/:id" element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>当前链接：{window.location.href}</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>当前链接：{window.location.href}</p>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>当前链接：{window.location.href}</p>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>当前链接：{window.location.href}</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}