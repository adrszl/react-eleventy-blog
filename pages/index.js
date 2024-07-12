import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/Link";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="/../public/logo.svg" className="App-logo" alt="logo" width={300} height={300} />
        <span>Adrian Szlegel - blog based on NextJS</span>
        <p>Another cool project will be here 😊</p>
      </header>
      <Link href="/posts/hello">Hello post</Link>
    </div>
  )
}
