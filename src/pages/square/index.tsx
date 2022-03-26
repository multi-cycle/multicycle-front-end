import React, { Fragment, useEffect, useState } from 'react';
import Header from "../../components/header"
import Tail from "../../components/tail"
import Sort from '../../components/sort';
import { Listbox, RadioGroup, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const types = [
  { id: 1, name: 'Latest Bounty' },
  { id: 2, name: 'Hottest Bounty' },
]

const colors = [
  { name: 'All',   bgColor: 'bg-slate-200',  textColor:"text-slate-200",   selectedColor: 'ring-slate-200' },
  { name: 'D',   bgColor: 'bg-slate-400',  textColor:"text-slate-400",   selectedColor: 'ring-slate-400' },
  { name: 'C',   bgColor: 'bg-blue-400',   textColor:"text-blue-400",    selectedColor: 'ring-blue-400' },
  { name: 'B',   bgColor: 'bg-teal-500',   textColor:"text-teal-500",    selectedColor: 'ring-teal-500' },
  { name: 'A',   bgColor: 'bg-red-500',    textColor:"text-red-500",     selectedColor: 'ring-red-500' },
  { name: 'S',   bgColor: 'bg-purple-500', textColor:"text-purple-500",  selectedColor: 'ring-purple-500' },
  { name: 'SS',  bgColor: 'bg-orange-500', textColor:"text-orange-500",  selectedColor: 'ring-orange-500' },
  { name: 'SSS', bgColor: 'bg-yellow-300', textColor:"text-yellow-300", selectedColor: 'ring-yellow-300' },
]


const  RadioColors = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  return (

    <RadioGroup value={selectedColor} onChange={setSelectedColor}>
      <div className="mt-8 flex justify-end  items-center space-x-3">
        {colors.map((color) => (
          <div  key={color.name}>
          <RadioGroup.Option
            key={color.name}
            value={color}
            className={({ active, checked }) =>
              classNames(
                color.selectedColor,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
              )
            }
          >
            <span
              aria-hidden="true"
              className={classNames(color.bgColor, 'h-6 w-6 border border-black border-opacity-10 rounded-full')}
            />

          </RadioGroup.Option>
            <div  className={classNames(color.textColor, 'text-center text-xs mt-1 ')}>
              {color.name}
            </div>
          </div>

        ))}
      </div>
    </RadioGroup>
  )
}

const SquareTop = () =>{
  const [selected, setSelected] = useState(types[0])
  return(
    <>
      <div className="mt-10 md:flex justify-between">
        <div className="flex ">
          <div className="flex justify-center z-10 text-gray-700 text-3xl py-3 ml-4 -mr-11">
            <i className="fa fa-search" aria-hidden="true"></i></div>
          <input type="text"
                 className="pl-12 bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-full p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                 placeholder="Search Spaces"
          /> </div>
        <div className="mt-4">
          <Listbox value={selected} onChange={setSelected} >
            {({ open }) => (
              <>
                <div className=" relative ">
                  <Listbox.Button className="mb-5 md:mb-0  border-gray-300 flex justify-center w-30 bg-gray-700  rounded-full   px-5  py-2 text-left cursor-default   sm:text-base">
                    <span className=" text-white "> {selected.name}</span>
                    <span className="mt-0.5 inset-y-0  right-0 flex items-center   pointer-events-none">
                                                <SelectorIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                                </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-36 xl:w-44 bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  sm:text-sm">
                      {types.map((type) => (
                        <Listbox.Option
                          key={type.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'text-indigo-600 ' : 'text-gray-200',
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
                                    active ? 'text-indigo-600 ' :"text-gray-200",
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

        {/*<div>*/}
        {/*  <fieldset>*/}
        {/*    <div className="relative flex items-start mt-3">*/}
        {/*      <div className="flex items-center h-5">*/}
        {/*        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"*/}
        {/*               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600  border-gray-300 rounded"/>*/}
        {/*        <label htmlFor="comments" className="font-light text-gray-300 text-xl ml-2">*/}
        {/*          Recommended</label>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </fieldset>*/}
        {/*</div>*/}
      </div>
      <RadioColors/></>
  )
}
const Square = () => {
  const [spaces, set_spaces] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_bounty_all', {
        params: {
          github_user_name: "davidxing12"
        }
      })
      console.log(data.data.data)
      set_spaces(data.data.data)
    }
    fetchUserBounty()
  }, [])
  if (spaces == []) {
    return
  } else {
    return (
      <div className="mx-auto  dark:bg-current  transition duration-700">
        <Header />
        <div className="relative md:pt-16">
          <div className="absolute inset-x-0 bottom-0    " />
          <div className="bg-black bg-opacity-90 mx-auto">
            <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
              <SquareTop />
              <div className="my-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {spaces.map(item => (
                  <a key={item.id} href={`/bounty/${item.github_user_name}/${item.bounty_name}`}
                     className="bg-gray-700  rounded-lg p-5 transform transition duration-300  hover:scale-105">
                    <div className="">
                      <img className="rounded-full mx-auto w-24 h-24"
                           src={item.bounty_finish_nft_image} alt='' />
                    </div>
                    <div className="text-white text-center mt-2">
                      {item.bounty_name}
                    </div>
                  </a>
                ))}
              </div>
              <Sort />
            </div>
          </div>
        </div>
        <Tail />
      </div>
    )
  }
}

export default Square

