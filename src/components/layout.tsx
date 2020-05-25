import { Header } from './header'
// import Footer from './Footer'
import React, {Component} from 'react'
// const props: Element

interface Props {
  childrens: Element,
}
export function Layout(props: Props) {
  return (
      <div>
          <Header />
          {props.childrens}
          {/* <Footer /> */}
      </div>
  )
}
