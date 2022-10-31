import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image';
import profilePhoto from '../public/pf-transformed.png';
import { Canvas } from '@react-three/fiber';
import Floor from '../components/3js';
import Box from '../components/box';
import LightBulb from '../components/lightBulb';
import OrbitControls from '../components/OrbitControls';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Hayden Walker Portfolio</title>
        <meta name="description" content="Generated by create next app + tailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id='bg' className=' bg-white px-10'>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>designedbyhwalk1</h1>
            <ul className='flex items-center '>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl mr-6'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hayden Walker</h2>
            <h3 className='text-2xl py-2'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Hi, I'm a software developer working in Melbourne, Australia.
              I love to solve problems to help people, below is some of the work I am most proud of.
              <br></br>Reach out if you want to learn more!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden mt-20'>
            <Image src={profilePhoto} layout='fill'objectFit='cover' alt='profile-photo'/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>My Stack</h3>
            <Canvas 
              shadows={true}
              camera={{
                position: [-6, 7, 7],
              }}
              >
                <ambientLight color='white' intensity={0.3}/>
                <LightBulb position={[0, 3, 0]} />
                  <Box rotateX={3} rotateY={0.2} />
                <OrbitControls />
                <Floor postion={[0, -1, 0]}/>
            </Canvas>
            <p>Extra</p>
          </div>
        </section>
      </main>
    </div>
  )
}
