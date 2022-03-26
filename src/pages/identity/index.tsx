import React, { Fragment, useState } from 'react';
import Header from "../../components/header"
import Tail from "../../components/tail"
import { useAtom } from 'jotai';
import {WalletButtonShowState, WalletListShowState,UpgradeState} from "../../jotai";
import { Dialog, Transition } from '@headlessui/react';

const Upgrade = () =>{
  const [OpenUpgradeState,SetOpenUpgradeState]=useAtom(UpgradeState)

  return(
    <>
      <Transition.Root show={OpenUpgradeState} as={Fragment}>
        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={SetOpenUpgradeState}>
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

                <div className="flex">
                <div className="text-center hover:bg-gray-200 p-5 px-24 transition duration-300">
                  <img className="w-32" src='https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png' alt='' />
                  <div className="text-3xl pt-3">
                    PL
                  </div>
                </div>
                  <div className="text-center hover:bg-gray-200 p-5 px-24 transition duration-300">
                    <img className="w-32"
                         src='https://cdn.discordapp.com/attachments/876498266550853642/950742371304341534/3.png' alt='' />
                    <div className="text-3xl pt-3">
                      Stablecoin
                    </div>
                  </div>

              </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

const ClaimRight = () =>{
  return(
    <>
      <div className="bg-current  xl:w-8/12  md:p-32 flex  p-6  xl:px-0 xl:pl-16 ">
        <div>
          <div className="text-white font-semibold text-3xl">
            PlayerLink Community Member Exclusive
          </div>
          <div className="text-gray-400 mt-2 xl:mt-6">
            An infinitely growing and non-transferable badge of community identity
          </div>
          <div className="text-gray-400">
            This medal can be upgraded by publishing, completing tasks or consuming PL!
          </div>
          <div className="text-indigo-600">
            <a href='https://discord.com/invite/Hypkryxwsb'>
              Join PlayerLink Discord </a>
          </div>
          <div  className="text-indigo-600">
            <a href='https://twitter.com/playerlink_io'>
              Follow PlayerLink Twitter</a>
          </div>
          <div className="text-white mt-4 xl:mt-8">
            XXX medals have been claimed.
          </div>
        </div>
      </div></>
  )
}
const Claim = () =>{
  const [WalletButtonShow,] = useAtom(WalletButtonShowState)
  const [,SetOpenWalletListState] = useAtom(WalletListShowState)
  const [,SetOpenUpgradeState]=useAtom(UpgradeState)
  function OpenUpgrade() {
    SetOpenUpgradeState(true)
  }
  return (
    <div className="mx-auto bg-gray-50 dark:bg-current   transition duration-700">
      <Header/>

      <div className="px-4 w-full xl:hidden border-t border-gray-700 fixed z-20 bottom-0 bg-gray-900">
        <div className="text-center my-2 text-gray-400" >
          You are NOT Claim
        </div>
        <div className="text-sm  mb-2 text-gray-400 flex justify-center">
          Designed by the PlayerLink team
          <div className="text-blue-500 pl-1">
            <a href='https://twitter.com/playerlink_io'>PlayerLink</a>
          </div>
        </div>
        <div className={WalletButtonShow?"hidden":"flex justify-center mb-2  mx-auto"}>
          <button  className="bg-blue-600  font-semibold  w-full   py-3 text-white rounded-lg  ">
            Connect Wallet
          </button>
        </div>
        <div className={WalletButtonShow?"flex justify-center mb-2  mx-auto":"hidden"}>
          <button  className="bg-blue-600  font-semibold  w-full   py-3 text-white rounded-lg  ">
            Claim
          </button>
        </div>
      </div>

      <div className=" mx-auto pt-16    ">
        <div className="xl:flex  xl:h-screen ">
          <div className="flex justify-center px-2 bg-gradient-to-b from-gray-500 to-black  xl:w-7/12">
            <div className=" mt-4  xl:my-auto">
              <img className="  md:h-96 rounded-full" src='https://cdn.discordapp.com/attachments/876498266550853642/950667452113616927/7.png' alt='' />
              <div className=" flex justify-center my-6 xl:my-10 ">
                <img className="h-8 w-18" src="https://cdn.discordapp.com/attachments/876498266550853642/949239933556645938/Pl.png" alt=""/>
              </div>

              <div className="flex mb-5">
              <div className="relative rounded-lg w-full bg-white ">
                <div className=" w-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg animate-pulse">
                  <div className="text-center">
                    72/100
                  </div>
                </div>
              </div>

              </div>

              <div className="hidden xl:inline-block   px-12 ">
                <div  className={WalletButtonShow?"hidden":"flex justify-center mb-2  mx-auto"}>
                  <button onClick={()=>{
                    SetOpenWalletListState(true)
                  }} className="bg-blue-600 transition duration-700 font-semibold  w-full  px-4 py-3 text-white rounded-lg  flex justify-center">
                    Connect Wallet
                  </button>
                </div>
                <div className={WalletButtonShow?"":"hidden"}>
                  <button  className="bg-blue-600  font-semibold  w-full   py-3 text-white rounded-lg  ">
                    Claim
                  </button>
                </div>
                <div className="mt-1 ">
                  <button onClick={OpenUpgrade} className="bg-gradient-to-r from-blue-300  to-red-300  font-semibold  w-full   py-3 text-white rounded-lg  ">
                    Upgrade
                  </button>
                </div>
                <div className="text-center mt-6 text-gray-300" >
                  You are NOT claim
                </div>
                <div className="text-sm text-center  text-gray-300 flex">
                  Designed by the PlayerLink team
                  <div className="text-blue-500 ml-1">
                    <a href='https://twitter.com/playerlink_io'>PlayerLink</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ClaimRight/>
        </div>
        <Upgrade></Upgrade>
      </div>
      <Tail/>
    </div>
  )
}

export default Claim
