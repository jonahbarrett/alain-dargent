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
      <main className='flex flex-col min-h-screen justify-center items-center mb-10'>
        <div className=''>
          <figure className='pb-4'>
            <Image src={flowers} alt='Welcome to my website' ></Image>
          </figure>
          <h1 className='text-3xl font-bold text-white mt-10 pb-2 font-serif'>
            About
          </h1>
          <p className='text-base text-white'>
            Lil blurb maybe
          </p>
          <p className='text-base text-white mt-5'>
            Check out my <Link href="/poetry"><a className="border-b-2 border-white border-dotted">poetry</a></Link>.
          </p>
          <h1 className='text-3xl font-bold text-white mt-10 pb-2 font-serif'>
            Contact
          </h1>
          <p className='text-base text-white'>
            Send me an email
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
