import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import Link from "next/link";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React, { Fragment, useEffect, useRef, useState } from 'react';
import {
  EVMAddressValue,
  WalletButtonShowState,
  WalletListShowState,
  AccountConfigPageState,
  AfterEvmAddressValue, AccountChooseValue, AfterNearAddressValue, TaskState,
} from '../../jotai';
import { useAtom } from 'jotai';
import Login from '../login';
import Account from '../account';
import {useRouter} from "next/router";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const navigation = [
  { id:2 ,name: 'Square', href: '/square' },
  { id:3 ,name: 'Faucet', href: '/faucet' },
  // { id:4 ,name: 'Airdrop', href: '/airdrop' },
  { id:5 ,name: 'Docs', href: 'https://mirror.xyz/dashboard/edit/ah9Si352xjL6wSE2fv7eEIwRKEm5fdi0KgW4wq_NORE' },
  // { id:6 ,name: 'Token', href: '/token' },
  // { id:7 ,name: 'Team', href: '/team' },
]
const Bound = () =>{
  const [OpenTaskState,SetOpenTaskState]=useAtom(TaskState)

  return(
    <>
      <Transition.Root show={OpenTaskState} as={Fragment}>
        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={SetOpenTaskState}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 -mt-40 md:-mt-0 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg  px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  p-6  ">

                <div className="md:flex">
                  <Link  href="/claim" >
                  <a className="text-center hover:bg-gray-200 p-5 px-24 transition duration-300">
                    <img className="w-32 mx-auto" src='/task.png' alt='' />
                    <div className="text-3xl pt-3">
                      Claim
                    </div>
                  </a>
                  </Link>
                  <Link href="/create">
                  <a  className="text-center hover:bg-gray-200 p-5 px-24 transition duration-300">
                    <img className="w-32 mx-auto" src='/submit.png' alt='' />
                    <div className="text-3xl pt-3">
                      Create
                    </div>
                  </a>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

const WalletList = () => {
  const router = useRouter()
  const [WalletButtonShow,SetWalletButtonShow]=useAtom(WalletButtonShowState)
  const [,SetOpenWalletListState] = useAtom(WalletListShowState)
  const [,SetAccountConfig] = useAtom(AccountConfigPageState)
  const [AfterEVMAddress,] = useAtom(AfterEvmAddressValue)
  const [AfterNearAddress,] = useAtom(AfterNearAddressValue)
  const [AccountChoose,] = useAtom(AccountChooseValue)
  const [,SetOpenTaskState]=useAtom(TaskState)
  useEffect(()=>{
    if (AccountChoose != 0){
      SetWalletButtonShow(true)
    }
  },[router.isReady])


  const WalletLogin = () =>{
    SetOpenWalletListState(true)
  }

  const accountConfig = () =>{
    SetAccountConfig(true)
  }

  function OpenTask() {
    SetOpenTaskState(true)
  }
  return (
      <>
        <Popover className="relative bg-white  ">
          <div className="flex  fixed z-20 inset-x-0 bg-black    transition duration-700 mb-10 pl-5  justify-between items-center  p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10  xl:pl-16">

            <div className=" flex w-full justify-between lg:justify-start">
              <div className="flex justify-start  ">
                <Link  href="/home">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <img
                        className=" w-auto h-8 md:mt-3.5 "
                        src="/logo.png"
                        alt=""
                    />
                  </a></Link>
              </div>
              <Tab.Group as="nav" className="hidden  lg:flex  space-x-10 py-3 pt-3 pl-10">
                {navigation.map((item) => (
                    <Tab.List key={item.name}>
                      <Link  href={item.href}>
                        <a  className=" ">
                          <Tab  className={({ selected }) =>
                              classNames(
                                  'w-full py-2.5 text-sm leading-5  rounded-lg text-base font-medium   text-gray-100 ',
                                  ' focus: ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                  selected
                                      ? 'text-black font-semibold '
                                      : ''
                              )
                          }>
                            {item.name}
                          </Tab>
                        </a>
                      </Link>
                    </Tab.List>
                ))}
                <button onClick={OpenTask} className="w-full py-2.5 text-sm leading-5  rounded-lg text-base font-medium text-gray-100
                                  focus: ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60">
                  Bounty
                </button>
              </Tab.Group>
            </div>

            <div className="-mr-2  my-0.5 lg:hidden">
              <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>


            <div className="hidden lg:flex w-full  md:flex-1 ">
              <div className={WalletButtonShow ? "hidden": ""}>
                <button  onClick={WalletLogin} className="bg-blue-600 transition duration-700  w-36 px-4 py-2 text-white rounded-lg  flex justify-center">
                  Connect Wallet
                </button>
              </div>
              <div className={WalletButtonShow ? "": "hidden"}>
                <div className="flex bg-gray-800 rounded-full p-1 justify-center">
                  <div className="flex items-center mr-4 p-2">
                    <img className="w-6 h-6 rounded-lg mx-1"
                         src='https://portal.web3games.org/_next/image?url=%2Fnetworks%2Fethereum-network.jpg&w=48&q=75' alt='' />
                    <div className=" text-white w-16">
                      Ethereum
                    </div>
                  </div>
                  <button  onClick={accountConfig} className=" bg-gray-600 rounded-full truncate  w-40 px-4 py-2 text-white rounded-lg  flex  ">
                    {AfterEVMAddress}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed z-20 inset-x-0">
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                  focus
                  className="absolute my-auto  fixed z-20 inset-x-0  min-h-screen  inset-y-auto   p-2 transition transform origin-top-right lg:hidden"
              >
                <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-black    transition duration-700 divide-y-2 divide-gray-400">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                            className="h-8 w-auto"
                            src='/logo.png'
                            alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>

                  </div>
                  <div className="py-6 ">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center ">
                      {navigation.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a
                                className="text-base font-medium text-white     transition duration-700 "
                            >
                              {item.name}
                            </a>
                          </Link>
                      ))}
                      <div onClick={OpenTask} className="text-base font-medium text-white    transition duration-700">
                        Bounty
                      </div>
                    </div>

                  </div>
                  <div className="flex justify-center p-5 items-center">
                    <div className=" w-full   ">
                      <div className="flex justify-center ">
                        <button  className="bg-gray-800 w-36 p-2 text-center text-white rounded-lg   ">
                          Connect Wallet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>

            </Transition>

          </div>
        </Popover>
      </>
  )
}

const Header=()=>{
  return(
    <header>
      <Login/>
      <WalletList/>
      <Account/>
     <Bound/>
    </header>
  )
}

export default Header
