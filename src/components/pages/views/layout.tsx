import { Header } from './header'
// import Footer from './Footer'
import React, {Component} from 'react'

export function Layout() {
  return (
      <div>
          <Header />
          {this.props.children}
          {/* <Footer /> */}
      </div>
  )
}
