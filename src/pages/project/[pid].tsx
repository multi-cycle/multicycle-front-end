import React, {useEffect} from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import {useRouter} from "next/router";

const news=[
  {
    id:"1",
    href:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/galaxyspace/1640313049911053590.JPG",
    title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
    h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
    time:" Friday, February 11, 2022",
  },
  {
    id:"2",
    href:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/galaxyspace/1643522237993809110.png",
    title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
    h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
    time:" Friday, February 11, 2022",
  },
  {
    id:"3",
    href:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/shadowycoders/shadowycoder.jpg",
    title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
    h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
    time:" Friday, February 11, 2022",
  },
  {
    id:"4",
    href:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/shadowycoders/shadowycoder.jpg",
    title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
    h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
    time:" Friday, February 11, 2022",
  },


]




const ProjectTop = () =>{
  return(
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.discordapp.com/attachments/876498266550853642/934010734264844318/-1.png"
            alt="People working on laptops"
          />
        </div>
        <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24  mx-auto ">
          <div className="flex py-16 justify-between">
            <div>
              <div className="flex ">
                <div className="mr-5">
                  <img className="w-10 h-10  border rounded-full " src='https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png' alt='' />
                </div>
                <div className="text-white mt-0.5 text-2xl font-semibold">
                  PlayerLink Task
                </div>
              </div>
              <div className="text-white mt-3 text-gray-400">
                This list was created by PlayerLink to post bounty tasks.
              </div>
            </div>
            <div className="mt-5 md:mt-0   text-white">
              <a href="" className="p-2.5 py-2 rounded-full bg-black bg-opacity-40 mr-5 transition duration-300 hover:bg-opacity-80">
                <i className="fa fa-twitter mt-1.5 " aria-hidden="true"></i>
              </a>
              <a href="" className="p-2.5 py-2 rounded-full bg-black bg-opacity-40 mr-5 transition duration-300 hover:bg-opacity-80">
                <i className="fa fa fa-medium mt-1.5 " aria-hidden="true"></i>
              </a>
              <a href="" className="p-2.5 py-2 rounded-full bg-black bg-opacity-40 mr-5 transition duration-300 hover:bg-opacity-80">
                <i className="fa fa-telegram mt-1.5 " aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Project = () =>{
  const router = useRouter()

  useEffect(()=>{
    const {pid} = router.query
    console.log(pid)
  },[router.isReady])

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>

      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
        <div className="bg-black bg-opacity-90 mx-auto">
          <ProjectTop/>
            <div className="max-w-7xl relative px-5 py-8 md:py-12 xl:py-24 sm:px-6  mx-auto ">
              <div className="flex ">
                <div className="flex justify-center z-10 text-gray-700 text-3xl py-3 ml-4 -mr-11">
                  <i className="fa fa-search" aria-hidden="true"></i></div>
                <input type="text"
                       className="pl-12 bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-full p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                       placeholder="Search Task"
                /> </div>

              <div className="mt-16 flex grid md:grid-cols-2 gap-8  xl:grid xl:grid-cols-4  xl:gap-10  md:overflow-visible">
                {news.map(item=>(

                  <a key={item.id} href={item.href} className="bg-gray-700    rounded-lg  transform transition duration-300  hover:scale-105">
                    <div className=" w-full">
                      <img className="  rounded-t-lg"
                           src={item.img} alt='' />
                    </div>
                    <div className="py-3 xl:py-5  px-7 ">
                      <div  className=" text-white  h-12 overflow-ellipsis overflow-hidden  font-semibold">
                        {item.title}
                      </div>
                      <div className="text-gray-400 pt-2 h-20 overflow-ellipsis overflow-hidden">
                        {item.h1}
                      </div>

                    </div>
                  </a> ))}
              </div>
            </div>
          </div>
      </div>
      <Tail/>
    </div>
  )
}

export default Project
