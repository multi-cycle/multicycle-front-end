import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import Tail from '../../../components/tail';
import Sort from '../../../components/sort';
import { Level_border,StateStyle } from '../../../constant';
import axios from 'axios';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BountyConduct = () => {
  const [bountyconduct, set_bountyconduct] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_create_bounty_conduct_all', {
        params: {
          github_user_name: "davidxing1liu"
        }
      })
      set_bountyconduct(data.data.data)
    }
    fetchUserBounty()
  }, [])
  if (bountyconduct == []) {
    return (
      <div>

      </div>
    )
  } else {
    return (
      <div className="mx-auto  dark:bg-current  transition duration-700">
        <Header />
        <div className="relative pt-16">
          <div className="absolute inset-x-0 bottom-0    " />
          <div className="bg-black bg-opacity-90 mx-auto">
            <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
              <div className=" mb-32">
                <div className="flex justify-between">
                  <div className="text-white text-3xl">
                    Bounty Conduct
                  </div>
                </div>
                <div  className={bountyconduct.length?"mt-16 flex md:grid md:grid-cols-2 gap-4   xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible":"hidden"}>
                  {bountyconduct.map(item=>(
                    <Link key={item.id} href='/createbounty/review'>
                      <a  className={classNames(Level_border[item.bounty_level],"border-2  bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  py-10 px-9  transform transition duration-300  hover:scale-105")}>
                        <div className="flex  mb-5 justify-between">
                          <div className="flex">
                            <div>
                              <img className="w-10 h-10 border rounded-lg" src={item.bounty_finish_nft_image} alt='' />
                            </div>
                            <div>
                              <div className="mt-2 ml-2  bg-gradient-to-r from-green-400 to-blue-500 rounded-lg px-2">
                                {item.bounty_name}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 text-gray-400 hover:text-white transform transition duration-300 ">
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="flex text-left">
                          <div className="mr-5">
                            <div className="">
                              {item.participants_number}
                            </div>
                            <div className="text-gray-400 text-sm">
                              Members
                            </div>
                          </div>
                          <div className="mr-5">
                            <div>
                              {item.submissions_number}
                            </div>
                            <div className="text-gray-400 text-sm">
                              Created
                            </div>
                          </div>

                          <div className="">
                            <div className={classNames(StateStyle[item.bounty_state],"font-semibold")}>
                              {item.bounty_state}
                            </div>
                            <div className="text-gray-400 text-sm">
                              State
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 h-12   overflow-hidden overflow-ellipsis">
                          {item.bounty_content}
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>

                <div className={bountyconduct.length?"hidden":"mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>
                  <a href=''>
                    <div
                      className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
                      <div className="flex justify-center mb-5">
                        <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
                      </div>
                      <div className="text-base ">
                        The task is completed, please go on to claim a new task
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className={bountyconduct.length ? "" : "hidden"}>
                <Sort />
              </div>
            </div>
          </div>
        </div>
        <Tail />
      </div>
    )
  }
}

export default BountyConduct


