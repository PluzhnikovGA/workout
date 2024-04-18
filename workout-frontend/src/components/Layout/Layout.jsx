/* eslint-disable react/prop-types */
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
