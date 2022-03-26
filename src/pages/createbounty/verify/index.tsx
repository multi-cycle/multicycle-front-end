import React, { Fragment, useState } from 'react';
import Header from "../../../components/header"
import Tail from "../../../components/tail"
import Link from "next/link";
import axios from 'axios';
import { level_color } from '../../../constant';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/solid';
import router from 'next/router';
import { Animated } from 'react-native';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Verify = () => {
  const [openload ,setOpenload]= useState(false)
  const [start_nft_image, set_start_nft_image] = useState("")
  const [finish_nft_image, set_finish_nft_image] = useState("")
  const [token_name, set_token_name] = useState("")
  const [token_number, set_token_number] = useState("")
  const [start_time, set_start_time] = useState("")
  const [finish_time, set_finish_time] = useState("")
  const [level_image, set_level_image] = useState("")
  const [git_level, git_setLevel] = useState("")
  const [content, setContent] = useState("")
  const [bounty_name, set_bounty_name] = useState("")
  const checkUrl = async () => {
    const url = (document.getElementById("user_url") as HTMLInputElement).value
    if(url!==""){
      setOpenload(true)
      const user_index = url.indexOf("Bounty")
      const user_name = url.substring(19, user_index - 1)
      const bounty_name = url.substring(url.indexOf("main") +5, url.length)
      const content_url = `https://raw.githubusercontent.com/${user_name}/Bounty`
      const index = url.indexOf("Bounty") + 6
      const user_url = url.substring(index, url.length)
      const new_user_url = user_url.replace('/tree', '')
      const new_url = url.replace('tree', 'raw')

      // show bounty_name
      set_bounty_name(bounty_name)
      // show nft 2
      set_start_nft_image(`${new_url}/images/start.png`)
      // show nft 2
      set_finish_nft_image(`${new_url}/images/finish.png`)

      axios.get(`${content_url}${new_user_url}/award/name.md`)
        .then(function (response) {
          set_token_name(response.data)
          axios.get(`${content_url}${new_user_url}/award/${response.data}.md`)
            .then(function (response) {
              set_token_number(response.data)
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });

      axios.get(`${content_url}${new_user_url}/time/start.md`)
        .then(function (response) {
          set_start_time(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

      axios.get(`${content_url}${new_user_url}/time/finish.md`)
        .then(function (response) {
          set_finish_time(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

      axios.get(`${content_url}${new_user_url}/README.md`)
        .then(function (response) {
          setContent(response.data)
          setOpenload(false)
        })
        .catch(function (error) {
          console.log(error);
          setOpenload(false)
        });

      axios.get(`${content_url}${new_user_url}/level/level.md`)
        .then(function (response) {
          git_setLevel(response.data)
          set_level_image(`${new_url}/level/${response.data}_level.png`)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const View = ()=>{
    const url = (document.getElementById("user_url") as HTMLInputElement).value
    router.push(url)
  }
  function alwaystrue(){
    return false
  }

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>
      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    "/>
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
            <div className="text-white text-5xl">
              Bounty Information
            </div>

            <div className="mt-16 text-base md:text-xl">
              <div className="bg-gray-700 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10   ">
                <div className=" mb-10 xl:flex">
                  <div className="mr-10">
                    <div className="mr-4">Bounty Name</div>
                    <div className={classNames(level_color[git_level])}> {bounty_name}</div>
                  </div>
                  <div className=" xl:ml-80 mt-10 xl:mt-0 xl:flex">
                  <div className="flex  ">
                    <div>The number of participants</div>
                    <div className={classNames(level_color[git_level], "ml-2")}>400</div>
                  </div>
                    <div className="flex mt-10 xl:mt-0 xl:ml-16">
                      <div> Number of submissions</div>
                      <div className={classNames(level_color[git_level], "ml-2  mr-10")}>4</div>
                    </div>
                  </div>
                </div>

                <div className="xl:flex  ">
                  <div>
                    Tart Bounty NFT
                    <div
                      className=" mt-3  w-28 h-28 flex justify-center text-4xl rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                      <img className="rounded-2xl" src={start_nft_image} alt=""/>
                    </div>
                  </div>
                  <div className="mt-5 xl:mt-0  xl:ml-16 ">
                    Finish Bounty NFT
                    <div className=" mt-3  w-28 h-28 flex justify-center text-4xl rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                      <img className="rounded-2xl" src={finish_nft_image} alt=""/>
                    </div>
                  </div>
                  <div className="flex  mb-10 xl:ml-32 mt-10 xl:mt-0">
                    <div> Award</div>
                    <div className={classNames(level_color[git_level], "ml-2")}>{token_name} {token_number}</div>
                  </div>

                  <div className="flex  mb-10 xl:ml-16">
                    <div> Time</div>
                    <div className={classNames(level_color[git_level], "ml-2  mr-10")}>Start:{start_time}</div>
                    <div className={classNames(level_color[git_level], "ml-2 ")}>Finish:{finish_time}</div>
                  </div>
                </div>


                <div className=" mt-10">
                  Bounty Introduction
                  <div className="md:flex justify-between">
                    <div className="mt-3 flex ">
                      <textarea
                        className="bg-gray-700 bg-opacity-30 text-xs md:text-sm break-normal h-80 rounded-2xl p-3  border-black w-80 md:w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                        // placeholder="Enter Task Introduction"
                        placeholder={content}
                        id="Introduction"
                        readOnly={true}
                      />
                    </div>
                    <div className="mt-8 lg:mt-0 ml-5 my-auto xl:mr-36">
                      <img className="w-80 rounded-xl animate-pulse" src={level_image} alt=""/>
                    </div>
                  </div>
                </div>
                <div className="text-xl mt-10  md:flex">
                  <div>
                    Bounty URL
                    <div className="mt-3 flex">
                      <input type="text"
                             className="bg-gray-700 bg-opacity-30 text-xs md:text-sm   rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                             placeholder="Enter a Github Bound URL"
                             id="user_url"
                      />
                    </div>
                  </div>
                  <div className="md:mt-5">
                    <button onClick={View}
                            className="px-2 h-8 md:h-11  md:ml-5  text-sm  text-black mt-5 bg-gray-400  rounded-xl md:rounded-2xl">
                      View GitHub
                    </button>
                  </div>
                </div>
                <div>

                </div>
                <div className="mt-3 md:flex items-center  justify-between">
                  <button
                    className="px-5 py-2 text-black mt-5  bg-red-400 rounded-2xl">
                    <div className="">
                      Remove Bounty
                    </div>
                  </button>
                  <div>
                    <Link href="/createbounty/bountyurllist">
                    <a className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                        Examine
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition.Root show={openload} as={Fragment}>
            <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto "  onClose={alwaystrue}>
              <div className="flex items-end justify-center min-h-screen pt-4  px-4 pb-20 text-center sm:block sm:p-0">
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

        </div>
      </div>
      <Tail/>
    </div>
  )
}



export default Verify
