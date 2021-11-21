import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import flowers from '../public/alaindargentflowers.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alain D&apos;Argent</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='flex flex-col min-h-screen justify-center items-center'>
        <div className=''>
          <figure className='pb-4'>
            <Image src={flowers} alt='Welcome to my website' ></Image>
          </figure>
          <h1 className='text-3xl text-white pb-1'>
            About
          </h1>
          <p className='text-base text-white'>
            Lil blurb maybe
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
