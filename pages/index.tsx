import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import flowers from '../public/alaindargentflowers.png'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alain D&apos;Argent</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='flex flex-col min-h-screen md:justify-center items-center mb-10'>
        <div className='mt-5 md:mt-20'>
          <figure className='pb-4'>
            <Image src={flowers} alt='Welcome to my website' ></Image>
          </figure>
          <p className='text-base text-white'>
            <Link href="/poetry"><a className="border-b border-white border-dotted">As intermittent forms become distorted through emergent and critical practice,<br />the observer is left with a tribute to the edges of our era.</a></Link>
          </p>
          <h1 className='text-3xl font-bold text-white mt-10 pb-2 font-serif'>
            Commune with me
          </h1>
          <p className='text-base text-white'>
            instagram &raquo; <span className='font-mono'>@alaindargent_</span><br />
            email&nbsp; &nbsp; &nbsp; &nbsp; &raquo; <span className='font-mono'>troubadour@alaindargent.com</span>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
