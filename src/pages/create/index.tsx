import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/header"
import Tail from "../../components/tail"
import Link from "next/link";
import { Level_border, StateStyle } from '../../constant';
import axios from "axios";
import { Animated } from 'react-native';
import divide = Animated.divide;
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const  BountyReview = () =>{
  const [bountyreview,set_bountyreview] = useState([])
  useEffect(()=>{
    const fetchUserBounty = async ()=>{
      const data  = await axios.get('http://localhost:3004/api/get_create_bounty_review',{
        params: {
          github_user_name: "davidxing1liu"
        }
      })
      console.log(data.data.data)
      set_bountyreview(data.data.data)
    }
    fetchUserBounty()
  },[])

  if(bountyreview == []){
    return (
        <div>
          1
        </div>
    )
  }else{
    return(
        <>
          <div className="mt-32">
            <div className="flex justify-between">
              <div className="text-white text-3xl">
                Bounty Review
              </div>
              <Link href="/create/bountyreview">
                <a  className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                  View All
                </a>
              </Link>
            </div>
            <div  className={bountyreview.length?"mt-16 flex md:grid md:grid-cols-2 gap-4   xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible":"hidden"}>
              {bountyreview.map(item=>(
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
            <div className={bountyreview.length?"hidden":"mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>
              <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
                <div className="flex justify-center mb-5">
                  <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
                </div>
                <div className="text-base ">
                  The task is completed, please go on to claim a new task
                </div>
              </div>
            </div>
          </div>
        </>
    )
  }

}
const  BountyVerify = () => {
  const [bountyverify, set_bountyverify] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_create_bounty_verify', {
        params: {
          github_user_name: "davidxing1liu"
        }
      })
      console.log(data.data.data)
      set_bountyverify(data.data.data)
    }
    fetchUserBounty()
  }, [])
  if (bountyverify == []) {
    return
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Bounty Verify
            </div>
            <Link href="/create/bountyverify">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
          </div>
          <div  className={bountyverify.length?"mt-16 flex md:grid md:grid-cols-2 gap-4   xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible":"hidden"}>
            {bountyverify.map(item=>(
              <Link key={item.id} href='/createbounty/verify'>
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
          <div className={bountyverify.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>
            <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The task is not completed, please Wait patiently
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const  BountyConduct = () => {
  const [bountyconduct, set_bountyconduct] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_create_bounty_conduct', {
        params: {
          github_user_name: "davidxing1liu"
        }
      })
      console.log(data.data.data)
      set_bountyconduct(data.data.data)
    }
    fetchUserBounty()
  }, [])


  if (bountyconduct == []) {
    return (
      <div>
        1
      </div>
    )
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Bounty Conduct
            </div>
            <Link href="/create/bountyconduct">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
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
          <div className={bountyconduct.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>
            <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The task is not completed, please Wait patiently
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const  BountyPending = () => {
  const [bountypending, set_bountypending] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_create_bounty_pending', {
        params: {
          github_user_name: "davidxing1liu"
        }
      })
      console.log(data.data.data)
      set_bountypending(data.data.data)
    }
    fetchUserBounty()
  }, [])

  if (bountypending == []) {
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Bounty Pending
            </div>
            <Link href="/create/bountypending">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
          </div>
          <div  className={bountypending.length?"mt-16 flex md:grid md:grid-cols-2 gap-4   xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible":"hidden"}>
            {bountypending.map(item=>(
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
          <div className={bountypending.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>
            <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The task is not completed, please Wait patiently
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const CompleteTheBounty = () => {
  const [completethebounty, set_completethebounty] = useState([])
  useEffect(() => {
    const fetchUserBounty = async () => {
      const data = await axios.get('http://localhost:3004/api/get_create_bounty_complete', {
        params: {
          github_user_name: "davidxing1liu"
        }
      })
      set_completethebounty(data.data.data);

    }
    fetchUserBounty()
  }, [])

  if (completethebounty == []) {
    return (
      <div>

      </div>
    )
  } else {
    return (
      <>
        <div className="mt-32">
          <div className="flex justify-between">
            <div className="text-white text-3xl">
              Complete the Bounty
            </div>
            <Link href="/create/bountycomplete">
              <a className="text-blue-400 text-xl mt-2 hover:text-white transform duration-300">
                View All
              </a>
            </Link>
          </div>
          <div  className={completethebounty.length?"mt-16 flex md:grid md:grid-cols-2 gap-4   xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible":"hidden"}>
            {completethebounty.map(item=>(
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
          <div className={completethebounty.length ? "hidden" : "mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>
            <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
              <div className="flex justify-center mb-5">
                <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
              </div>
              <div className="text-base ">
                The task is not completed, please Wait patiently
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
                    Create a Bounty
                  </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  <Link href='/createbounty'>
                  <a>
                  <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10 px-24 xl:px-10  transform transition duration-300  hover:scale-105 text-center ">
                    <div className="text-xl md:text-2xl mb-2">
                      Create In Progress
                    </div>
                    <div className="text-base ">
                      Please click  Create the Bounty.
                    </div>

                    <Link href='/createbounty'>
                    <a>
                    <button className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                      <div className="">
                      Create Bounty
                      </div>
                    </button>
                    </a>
                    </Link>
                  </div>
                  </a>
                  </Link>
                </div>
              <BountyReview/>
              <BountyVerify/>
              <BountyConduct/>
              <BountyPending/>
              <CompleteTheBounty/>
            </div>
          </div>
        </div>
      <Tail/>
    </div>
  )
}

export default Task

