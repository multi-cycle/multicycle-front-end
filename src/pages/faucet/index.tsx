import React, {Fragment, useRef, useState} from 'react'
import Header from"../../components/header"
import Tail from '../../components/tail'
import { Listbox, Dialog,Transition } from '@headlessui/react';
import {ExclamationIcon } from "@heroicons/react/outline";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import axios from "axios";
import check_address from "../../utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const types = [
  { id: 1, name: 'ICP' },

]

export default function Faucet() {
  const cancelButtonRef = useRef(null)
  const [selected, setSelected] = useState(types[0])
  const [openload ,setOpenload]= useState(false)
  const [success, successchange] = useState(false)
  const [fail, failchange] = useState(false)
  function sendtoken(){
    let inputValue = (document.getElementById('faucet') as HTMLInputElement).value;
    let check_result = check_address(inputValue);

    if (selected.id == check_result){
      setOpenload(true);
      axios.get('http://ip-api.com/json/')
        .then(function (response) {
          if (response.data){
            let {query,country,city} = response.data
            axios.post('http://47.242.8.196:3000/api/insert/user', {
              address: inputValue,
              ip: query,
              country,
              city
            })
              .then(function (response) {
                // let error = 'Invalid Parameters (you can not get ICP ,you know why!!!!)';
                let success_data = 'Success';
                console.log(response.data.message)
                if (response.data.message == success_data){
                  successchange(true)
                  setOpenload(false);
                }else{
                  failchange(true);
                  setOpenload(false);
                }
              })
              .catch(function (error) {
                alert(error)
              });
          }else{
            alert('no ip')
          }
        })
        .catch(function (error) {
          alert(error)
        });
    }else{
      alert(`you address not conform to ${selected.name}`)
    }
  }

  function alwaystrue(){
    return true
  }
  return (
    <div className="mx-auto dark:bg-current  transition duration-700">
      <Header/>
      <div className="bg-black bg-opacity-90 pt-20">
        <div className=" text-center pt-10 ">
          <div className="text-4xl mt-16 font-extrabold  text-gray-200">
            ICP Authenticated Faucet
          </div>
          <div className="mt-5 xl:flex justify-center">
            <input type="text"
                   className="bg-gray-200 text-xs md:text-sm  2xl:text-lg rounded-lg p-3  w-9/12  xl:w-5/12  border hover:border-indigo-500 focus:bg-white dark:bg-gray-300  outline-none"
                   placeholder="Please paste the twitter link which contains your ICP account"
                   id="faucet"
            />
            <div className=" xl:-ml-44 justify-center mt-3 flex">
              <Listbox value={selected} onChange={setSelected} >
                {({ open }) => (
                  <>
                    <div className=" relative ">
                      <Listbox.Button className="relative w-full border-gray-300  xl:border-l    xl:pl-12    text-left cursor-default   sm:text-base">
                        <span className="block text-gray-100  xl:text-black truncate text-lg w-18 xl:w-24 mr-5 xl:mr-2"> {selected.name}</span>
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
                        <Listbox.Options className="absolute z-10 mt-1 w-36 xl:w-44 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  sm:text-sm">
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
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {type.name}
                        </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                      )}
                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                  ) : null}
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
            <p className="flex justify-center text-center text-base font-medium text-gray-500">

              <button  onClick={sendtoken} className="mt-10 xl:mt-0 xl:ml-10  px-5 py-3 bg-gradient-to-r from-blue-300  to-red-300 rounded-lg font-bold text-gray-100 text-base font-normal border border-black transition duration-500 hover:bg-gray-700  hover:text-white "
              >
                Give me ICP
              </button>
            </p>
          </div>
        </div>
        <div className="mt-40 max-w-5xl mx-auto  px-4 pb-32">
          <h1 className="text-2xl text-white text-center mb-5 dark:text-gray-400">How to fund</h1>
          <h2 className="text-gray-300 text-sm mb-5">This faucet is running on the ICP testnet. To prevent malicious actors from exhausting all funds, requests are tied to Twitter social network accounts. Anyone having a Twitter account may request funds within the permitted limits.</h2>
          <h3 className="text-gray-300 text-sm mb-5">To request funds via Twitter, make a tweet with your ICP account pasted into the contents.</h3>
          <h4 className="text-gray-300 text-sm mb-5">Copy-paste the tweets URL into the above input box and get your ICP. Each account can get 5 ICP every 24 hours.</h4>
        </div>
      </div>

      <Transition.Root show={openload} as={Fragment}>
        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={alwaystrue}>
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 animate-spin w-12 text-5xl ">
                    <i className="fa fa-spinner" aria-hidden="true"></i>

                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className=" text-lg leading-6 font-medium text-gray-900">
                      Loading.......
                    </Dialog.Title>
                    <div className="mt-2">
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={success} as={Fragment}>
        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={alwaystrue}>
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6  text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className=" text-lg leading-6 font-medium text-gray-900">
                      Claim ICP successful
                    </Dialog.Title>
                    <div className="mt-2">

                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => successchange(false)}
                  >
                    Go back to home
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={fail} as={Fragment}>
        <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={alwaystrue}>
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
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Claim failed
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please recheck your network and account
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={sendtoken}
                  >
                    Retry
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => failchange(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <Tail/>
    </div>

  )
}
