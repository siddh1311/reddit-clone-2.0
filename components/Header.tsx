'use client';

import Image from 'next/image'
import React from 'react'
import { 
  Bars3Icon,
  ChevronDownIcon, 
  HomeIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/24/solid'
import {
   BellIcon,
   ChatBubbleBottomCenterIcon,
   GlobeAltIcon,
   PlusIcon,
   SparklesIcon,
   MegaphoneIcon,
   VideoCameraIcon
} from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession();
  return (
  <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
    <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Image objectFit='contain' fill src="https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg" alt='reddit-icon'/>
    </div>

    <div className='flex items-center mx-7 xl:min-w-[300px]'>
      <HomeIcon className='h-5 w-5' />
      <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
      <ChevronDownIcon className='h-5 w-5' />
    </div>

    {/* Search Box */}
    <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100
    px-3 py-1'>
      <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
      <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit'/>
      <button hidden type='submit' />
    </form>

    <div className='text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex'>
      <SparklesIcon className='icon' />
      <GlobeAltIcon className='icon' />
      <VideoCameraIcon className='icon' />
      <hr className='h-10 border border-gray-100'/>
      <ChatBubbleBottomCenterIcon className='icon' />
      <BellIcon className='icon' />
      <PlusIcon className='icon' />
      <MegaphoneIcon className='icon' />
    </div>

    <div className='ml-5 flex items-center lg:hidden'>
      <Bars3Icon className='icon' />
    </div>

    {/* Sign in / Sign out Button */}
    {session ? (
      <div onClick={() => signOut()} className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer'>
        <div className='relative h-5 w-5 flex-shrink-0'>
          <Image objectFit='contain' src="https://links.papareact.com/23l" fill alt=''/>
        </div>

        <p className='text-gray-400'>Sign Out</p>
      </div>
    ): (
      <div onClick={() => signIn()} className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer'>
        <div className='relative h-5 w-5 flex-shrink-0'>
          <Image objectFit='contain' src="https://links.papareact.com/23l" fill alt=''/>
        </div>

        <p className='text-gray-400'>Sign In</p>
      </div>
    )}
    
  </div>
  )
}

export default Header