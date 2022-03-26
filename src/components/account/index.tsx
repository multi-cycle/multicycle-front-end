import React, {Fragment, useEffect, useState} from 'react';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import {
  AccountChooseValue,
  AccountConfigPageState,
  AfterEvmAddressValue,
  EVMAddressValue,
  WalletButtonShowState,
  WalletListShowState,
  AccountExchangeState,
  AccountDepositState, WalletAddress,
} from '../../jotai';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import axios from 'axios';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const types = [
  { id: 1, name: 'PL',img:"https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png" },
  { id: 2, name: 'USDT',img:"https://www.worldcryptoindex.com/wp-content/uploads/2018/01/usdt-logo-300.png" },
  { id: 3, name: 'USDC' ,img:"https://seeklogo.com/images/U/usd-coin-usdc-logo-CB4C5B1C51-seeklogo.com.png"},
  { id: 4, name: 'DAI',img:"https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png" },
]
const Deposit = () =>{

  const [selected, setSelected] = useState(types[0])
  const [AccountDeposit,SetAccountDeposit]=useAtom(AccountDepositState)
  return(
    <>
      <Transition.Root show={AccountDeposit} as={Fragment}>
        <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto -mt-64 md:-mt-32" onClose={SetAccountDeposit}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

            {/* This element is to trick the browser into centering the modal contents. */}
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:px-6 lg:px-12 ">
                <div>
                  <div className='flex justify-between text-xl font-light	mb-5'>
                    <div className=" font-bold  text-2xl ">
                      Deposit PL
                    </div>
                    <button  onClick={() => SetAccountDeposit(false)}
                             className="fa fa-times " aria-hidden="true"></button>
                  </div>
                  <div className="text-gray-400 mt-2 w-96 text-sm">
                    You can convert PL on different chains to native PL on PlayerLink Network
                  </div>
                  <div className="mt-5">
                    <div>
                      <div className="flex justify-center text-gray-600">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <div className="text-sm -mt-0.5 ml-1">Balance: 0</div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex">
                          <input type="text"
                                 className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48   border hover:border-black focus:border-black transition duration-300  outline-none"
                                 placeholder="0.0"
                                 id="PL"
                          />
                          <button className="-ml-8 mt-0.5 text-gray-700">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button></div>
                        <Listbox value={selected} onChange={setSelected} >
                          {({ open }) => (
                            <>
                              <div className=" relative ">
                                <Listbox.Button className="relative w-full mt-1    pl-10    text-left cursor-default   sm:text-base">
                                   <span className="block truncate text-lg w-18 xl:w-24 mr-5 xl:mr-2 flex ">
                                     <img className="w-7 rounded-full mr-2 " src={selected.img} alt='' />
                                     {selected.name}</span>
                                  <span className="absolute inset-y-0  right-0 flex items-center  pointer-events-none">
                                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                </Listbox.Button>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 mt-1 h-24 w-36  bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  sm:text-sm">
                                    {types.map((type) => (
                                      <Listbox.Option
                                        key={type.id}
                                        className={({ active }) =>
                                          classNames(
                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                            'cursor-default select-none relative py-2 pl-8 pr-4'
                                          )
                                        }
                                        value={type}
                                      >
                                        {({ selected, active }) => (
                                          <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate flex')}>
                       <img className="w-6 rounded-full mr-2 " src={type.img} alt='' /> <div className="mt-0.5">  {type.name}</div>
                        </span>

                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      </div>
                    </div>
                    <div className="my-5">
                      <button className="w-full rounded-lg bg-gradient-to-r from-blue-300  to-red-300 text-xl text-black p-2 ">
                        Deposit
                      </button>
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

const Exchange= () =>{
  const [AccountExchange,SetAccountExchange]=useAtom(AccountExchangeState)
  const[Exchange,SetExchange]=useState(false)
  const exchange = () =>{
    SetExchange(!Exchange)
    // @ts-ignore
    document.getElementById("PL").value=''
    // @ts-ignore
    document.getElementById("USD").value=''
  }
  return(
    <>
      <Transition.Root show={AccountExchange} as={Fragment}>
        <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto -mt-64 md:-mt-32" onClose={SetAccountExchange}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

            {/* This element is to trick the browser into centering the modal contents. */}
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:px-6 lg:px-12 ">
                <div>
                  <div className='flex justify-between text-xl font-light	mb-5'>
                    <div className=" font-bold  text-2xl ">
                      Wrap PL
                    </div>
                    <button  onClick={() => SetAccountExchange(false)}
                             className="fa fa-times " aria-hidden="true"></button>
                  </div>
                  <div className="text-gray-400 mt-2 w-96 text-sm">
                    Wrapping PL allows you to trade on REF. Make sure to leave 1 PL for gas fees to unwrap your PL.
                  </div>
                  <div className="mt-5">
                    <div className={Exchange?"hidden":""}>
                      <div className="flex justify-center text-gray-600">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <div className="text-sm -mt-0.5 ml-1">Balance: 0</div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex">
                          <input type="text"
                                 className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48   border hover:border-black focus:border-black transition duration-300  outline-none"
                                 placeholder="0.0"
                                 id="PL"
                          />
                          <button className="-ml-8 mt-0.5 text-gray-700">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button></div>
                        <div className="flex mt-1.5">
                          PL <img className="rounded-full w-8 h-8 ml-2 -mt-1"
                                  src='https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png' alt='' />
                        </div>
                      </div>
                    </div>

                    <div className={Exchange?"":"hidden"}>
                      <div className="flex justify-center text-gray-600">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <div className="text-sm -mt-0.5 ml-1">Balance: 0</div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex">
                          <input type="text"
                                 className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48   border hover:border-black focus:border-black transition duration-300  outline-none"
                                 placeholder="0.0"
                                 id="USD"

                          />
                          <button className="-ml-8 mt-0.5 text-gray-700">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button></div>
                        <div className="flex mt-1.5">
                          USD <img className="rounded-full w-8 h-8 ml-2 -mt-1"
                                   src='https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png' alt='' />
                        </div>
                      </div>
                    </div>


                    <div className="flex justify-center ">
                      <button onClick={exchange} className="absolute mt-4 bg-gray-400 rounded-full py-3 px-4 hover:bg-black hover:text-white transition duration-500">
                        <i className=" fa fa-exchange transform rotate-90"  aria-hidden="true"></i></button>
                    </div>
                    <div className="border-t my-10">

                    </div>

                    <div className={Exchange?"hidden":""}>
                      <div className="flex justify-center text-gray-600">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <div className="text-sm -mt-0.5 ml-1">Balance: 0</div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex">
                          <input type="text"
                                 className=" bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48   border hover:border-black focus:border-black transition duration-300  outline-none"
                                 placeholder="0.0"
                                 readOnly={true}

                          />
                        </div>
                        <div className="flex mt-1.5">
                          USD <img className="rounded-full w-8 h-8 ml-2 -mt-1"
                                   src='https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png' alt='' />
                        </div>
                      </div>
                    </div>

                    <div className={Exchange?"":"hidden"}>
                      <div className="flex justify-center text-gray-600">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <div className="text-sm -mt-0.5 ml-1">Balance: 0</div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex">
                          <input type="text"
                                 className="select-none bg-gray-700 Exchange bg-opacity-30 text-xs md:text-sm text-white  rounded-lg p-2 w-48   border hover:border-black focus:border-black transition duration-300  outline-none"
                                 placeholder="0.0"
                                 readOnly={true}

                          />
                        </div>
                        <div className="flex mt-1.5">
                          PL <img className="rounded-full w-8 h-8 ml-2 -mt-1"
                                  src='https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png' alt='' />
                        </div>
                      </div>
                    </div>

                    <div className="my-5">
                      <button className="w-full rounded-lg bg-gradient-to-r from-blue-300  to-red-300 text-xl text-black p-2 ">
                        Submit
                      </button>
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

const FunctionList = () =>{
  const [,SetAccountConfig] = useAtom(AccountConfigPageState)
  const [,ChangeEVMAddress] = useAtom(EVMAddressValue)
  const [,SetWalletButtonShow]=useAtom(WalletButtonShowState)
  const [,SetOpenWalletListState] = useAtom(WalletListShowState)
  const [,SetAccountExchange]=useAtom(AccountExchangeState)
  const [,SetAccountDeposit]=useAtom(AccountDepositState)
  const [walletAddress,] =useAtom(WalletAddress)
  function closewallet(){
    SetAccountConfig(false)
    ChangeEVMAddress("")
    SetWalletButtonShow(false)
  }

  function ChangeWallet() {
    SetOpenWalletListState(true)
    closewallet()
  }
  function DepositToken () {
    SetAccountDeposit(true)
  }
  const BindGithub = ()=>{
    const address= walletAddress
    const github_user_name ="davidxing12"
    axios.post('http://localhost:3004/api/bind_github_user', {
      address,
      github_user_name,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
      <>
        <div className="mt-5 flex-col  justify-between ">
          <div className="flex  justify-between  ">
            <div className="">
              <a href='' className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 ">
                <i className="fa fa-location-arrow mt-0.5 mr-1" aria-hidden="true"></i><div>View on explorer</div></a>
            </div>
            <div>
              <button className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                <i className="fa fa-clone mt-0.5 mr-1" aria-hidden="true"></i>
                <div>Copy Address</div></button>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <button  onClick={closewallet} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 ">
              <i className="fa fa-times mt-0.5 mr-1" aria-hidden="true"></i>
              <div>Copy Address</div></button>
            <div>
              <button onClick={BindGithub} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                <i className="fa fa-github mt-0.5 mr-1 " aria-hidden="true"></i>
                <div>Bind Github</div>
              </button>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
              <button onClick={ChangeWallet} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                <i className="fa fa-list-ul mt-0.5 mr-1 " aria-hidden="true"></i>
                <div>Change Wallet</div>
              </button>
            </div>
            <div className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
              <button onClick={()=>{SetAccountExchange(true)}} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                <i className="fa fa-exchange mt-0.5 mr-1 " aria-hidden="true"></i>
                <div>Exchange</div>
              </button>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
              <button onClick={DepositToken} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                <i className="fa fa-university mt-0.5 mr-1 " aria-hidden="true"></i>
                <div>Deposit </div>
              </button>
            </div>
            <div className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
              <Link href="/rank">
              <a  className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                <i className="fa fa-bar-chart mt-0.5 mr-1 " aria-hidden="true"></i>
                <div>Ranking</div>
              </a>
              </Link>
            </div>

          </div>
        </div>
        <Exchange/>
        <Deposit/>
      </>
  )
}

const Account=()=>{
  const [AccountConfig,SetAccountConfig] = useAtom(AccountConfigPageState)
  const [AfterEVMAddress,] = useAtom(AfterEvmAddressValue)
  const [AccountChoose,] = useAtom(AccountChooseValue)

  // console.log(Address)

  return(
    <Transition.Root show={AccountConfig} as={Fragment}>
      <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto -mt-64 md:-mt-32" onClose={SetAccountConfig}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 lg:p-12 ">
              <div>
                <div className='flex justify-between text-xl font-light	'>

                  <div className=" font-bold  text-2xl ">
                    Account
                  </div>
                  <button  onClick={() => SetAccountConfig(false)}
                           className="fa fa-times " aria-hidden="true"></button>
                </div>
                <div className="text-gray-400 mt-2">
                  Your waller address
                </div>
                <div className="mt-5">
                  <button className="bg-gray-600 p-3 text-white rounded-full w-72 md:w-96">
                    {AfterEVMAddress}
                  </button>
                </div>
                <FunctionList/>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Account
