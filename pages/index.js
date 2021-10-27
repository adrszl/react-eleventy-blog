import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="/../public/logo.svg" className="App-logo" alt="logo" width={300} height={300} />
        <span>Adrian Szlegel</span>
        <p>Another cool project will be here 😊</p>
      </header>
    </div>
  )
}
