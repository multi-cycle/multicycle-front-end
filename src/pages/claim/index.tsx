import React, { useEffect, useState } from 'react';
import Header from "../../components/header"
import Tail from "../../components/tail"
import Link from "next/link";
import {Level_border,StateStyle}from "../../constant"
import axios from 'axios';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BountyInProgress = () => {
  const [bountyinprogress,setBountyinprogress]=useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_claim_bounty_pending', {
        params: {
          claim_github_user_name: "davidxing1"
        }
      })
      console.log(data.data.data)
      setBountyinprogress(data.data.data)
    }
    fetchUserBounty()
  }, [])

  if (bountyinprogress == []) {
    return
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Bounty in progress
            </div>
            <Link href="/claim/bountyinprogress">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
          </div>
          <div className={bountyinprogress.length ? "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible" : "hidden"}>
            {bountyinprogress.map(item => (
              <Link key={item.id} href="/claimbounty/progress">
                <a
                  className={classNames(Level_border[item.bounty_level], "bg-gray-500 bg-opacity-20 text-white rounded-3xl border-2  cursor-auto  py-10 px-9  transform transition duration-300  hover:scale-105   ")}>
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
                    <div className="ml-5">
                      <div className={classNames(StateStyle[item.claim_bounty_state], "font-semibold")}>
                        {item.claim_bounty_state}
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
          <div className={bountyinprogress.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible"}>
            <div
              className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The bounty has not been completed, please claim a new bounty
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const BountyWithdraw = () => {
  const [bountywithdraw, setBountywithdraw] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_claim_bounty_withdraw', {
        params: {
          claim_github_user_name: "davidxing1"
        }
      })
      console.log(data.data.data)
      setBountywithdraw(data.data.data)
    }
    fetchUserBounty()
  }, [])

  if (bountywithdraw == []) {
    return
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Bounty Withdraw
            </div>
            <Link href="/claim/bountywithdraw">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
          </div>
          <div className={bountywithdraw.length ? "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible" : "hidden"}>
            {bountywithdraw.map(item => (
              <Link key={item.id} href="/claimbounty/progress">
                <a
                  className={classNames(Level_border[item.bounty_level], "bg-gray-500 bg-opacity-20 text-white rounded-3xl border-2  cursor-auto  py-10 px-9  transform transition duration-300  hover:scale-105   ")}>
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
                    <div className="ml-5">
                      <div className={classNames(StateStyle[item.claim_bounty_state], "font-semibold")}>
                        {item.claim_bounty_state}
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
          <div className={bountywithdraw.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible"}>
            <div
              className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The bounty has not been completed, please claim a new bounty
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const BountyReview = () => {
  const [bountyreview, setBountyreview] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_claim_bounty_review', {
        params: {
          claim_github_user_name: "davidxing1"
        }
      })
      console.log(data.data.data)
      setBountyreview(data.data.data)
    }
    fetchUserBounty()
  }, [])

  if (bountyreview == []) {
    return
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Bounty Review
            </div>
            <Link href="/claim/bountyreview">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
          </div>
          <div className={bountyreview.length ? "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible" : "hidden"}>
            {bountyreview.map(item => (
              <Link key={item.id} href="/claimbounty/progress">
                <a
                  className={classNames(Level_border[item.bounty_level], "bg-gray-500 bg-opacity-20 text-white rounded-3xl border-2  cursor-auto  py-10 px-9  transform transition duration-300  hover:scale-105   ")}>
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
                    <div className="ml-5">
                      <div className={classNames(StateStyle[item.claim_bounty_state], "font-semibold")}>
                        {item.claim_bounty_state}
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
          <div className={bountyreview.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible"}>
            <div
              className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The bounty has not been completed, please claim a new bounty
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const CompletedBounty = () => {
  const [completedbounty, setCompletedbounty] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_claim_bounty_completed', {
        params: {
          claim_github_user_name: "davidxing1"
        }
      })
      console.log(data.data.data)
      setCompletedbounty(data.data.data)
    }
    fetchUserBounty()
  }, [])

  if (completedbounty == []) {
    return
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Completed Bounty
            </div>
            <Link href="/claim/completedbounty">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
          </div>
          <div className={completedbounty.length ? "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible" : "hidden"}>
            {completedbounty.map(item => (
              <Link key={item.id} href="/claimbounty/progress">
                <a
                  className={classNames(Level_border[item.bounty_level], "bg-gray-500 bg-opacity-20 text-white rounded-3xl border-2  cursor-auto  py-10 px-9  transform transition duration-300  hover:scale-105   ")}>
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
                    <div className="ml-5">
                      <div className={classNames(StateStyle[item.claim_bounty_state], "font-semibold")}>
                        {item.claim_bounty_state}
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
          <div className={completedbounty.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible"}>
            <div
              className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The bounty has not been completed, please claim a new bounty
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const Task = () =>{

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>
      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
          <div className="bg-black bg-opacity-90 mx-auto">
            <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                  <div className="text-white text-3xl">
                    Claim Bounty
                  </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  <Link href='/square'>
                  <a>
                  <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10 px-24 xl:px-10  transform transition duration-300  hover:scale-105 text-center ">
                    <div className="text-xl md:text-2xl mb-2">
                      Claim In Progress
                    </div>
                    <div className="text-base ">
                      Please click Square Receive the Bounty.
                    </div>

                    <Link href='/square'>
                    <a>
                    <button className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                      <div className="">
                      Claim Bounty
                      </div>
                    </button>
                    </a>
                    </Link>
                  </div>
                  </a>
                  </Link>
                </div>
              <BountyInProgress/>
              <BountyReview/>
              <BountyWithdraw/>
              <CompletedBounty/>
            </div>
          </div>
        </div>
      <Tail/>
    </div>
  )
}

export default Task

