import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"


const team=[
  {
    img:"https://cdn.discordapp.com/attachments/897398778166906911/950273329422553128/unknown.png",
    name:"davidxing1",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/897398778166906911/950273947147059230/unknown.png",
    name:"Joan",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/897398778166906911/950274267470233620/unknown.png",
    name:"Able",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/897398778166906911/950273846894813234/unknown.png",
    name:"David",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/897398778166906911/950273679881814016/unknown.png",
    name:"BoBo",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/897398778166906911/950273522666700830/unknown.png",
    name:"FengFeng",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/951105871990095942/88e3df7984f9ffc7.png",
    name:"George",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/951105873785257994/7bf40378b0f5849b.png ",
    name:"Ben",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/951105872912850964/7ed7da1aad5eb36a.png",
    name:"GuangHui",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/951105873202262146/t.png",
    name:"XueYou",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/951105873533632554/t.png",
    name:"Bonnie",
    position:"Core Contributor"
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/951105872455692348/cc2165ae4a05d3e5.png",
    name:"DuoDuo",
    position:"Core Contributor"
  },


]
const Mediatext=[
  {
    id:"1",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fmedia%2Fcoindesk.png&w=1920&q=75",
    h1:'CoinDesk',
    h2:"NEAR Protocol is working with Web3Games and Chinese artist Heshan Huang to sell NFT-based “real estate.”",
  },
  {
    id:"2",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fmedia%2Fcointelegraph.png&w=2048&q=75",
    h1:'Cointelegraph',
    h2:"Chinese artist showcases NFT real estate at Alibaba-sponsored innovation festival",
  },
  {
    id:"3",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fmedia%2Fyahoo-finance.png&w=1920&q=75",
    h1:'Yahoo! Finance',
    h2:"Alibaba’s E-Commerce Website Taobao to Include NFT Arts in Its Market Festival",
  },
  {
    id:"4",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fmedia%2Fdecrypt.png&w=1920&q=75",
    h1:'Decrypt',
    h2:"Alibaba Brings NFT Real Estate to Chinese Entrepreneur Festival",
  },
  {
    id:"5",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fmedia%2Fnasdaq.png&w=1920&q=75",
    h1:'Nasdaq',
    h2:"NEAR Protocol is working with blockchain gaming firm Web3Games to sell non-fungible token",
  },
  {
    id:"6",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fmedia%2Fcoinmarketcap.png&w=1920&q=75",
    h1:'CoinMarketCap',
    h2:"Alibaba's SCMP follows TIME Magazine, Launches ARTIFACTs NFTs to Tokenize Media Assets",
  },
]
const awards=[
  {
    id:"1",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fteam-awards%2Fpolkadot.png&w=1080&q=75",
    h1:'Developers Choice Award',
    h2:"1st Official Polkadot Hackathon",
  },
  {
    id:"2",
    href:"#",
    img:"https://web3games.org/_next/image?url=%2Fteam-awards%2Fhellolayer2.png&w=1080&q=75",
    h1:'Commercial Excellence Award',
    h2:"Hello Layer 2! Let's roll up! Ethereum Hackathon ",
  },
]

const Media = () =>{
  return(
    <>
      <div className="bg-black bg-opacity-30 mx-auto">
        <div className="max-w-7xl  relative px-5 pb-16 pt-24 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
          <div>
            <h1 className="text-blue-400  text-base md:text-lg mb-3">Media</h1>
            <h2 className="text-white text-2xl md:text-4xl font-medium">PlayLink in  Media</h2>
          </div>
          <div className="mt-5 flex grid md:grid-cols-2 xl:grid-cols-3 ">
            {Mediatext.map((item)=>(
              <a key={item.id} className="transform hover:scale-105 duration-300" href={item.href}>
                <div  className="mx-2 my-4">
                  <img className="rounded-lg   "
                       src={item.img} alt=""/>
                  <div className="mt-4">
                    <h1 className="text-white text-lg font-semibold mb-2">{item.h1}</h1>
                    <h2 className="text-gray-400">{item.h2}</h2>
                  </div>
                </div></a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const TeamAwards = () =>{
  return(
    <>
      <div className="bg-black bg-opacity-30 mx-auto">
        <div className="max-w-7xl  relative px-5 pb-16 pt-24 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
          <div>
            <h2 className="text-white text-2xl md:text-4xl font-medium text-center">
              Team Awards
            </h2>
          </div>
          <div className="mt-5 md:flex grid md:grid-cols-2 justify-between  mx-auto ">
            {awards.map((item)=>(
              <a key={item.id} className="transform hover:scale-105 duration-300" href={item.href}>
                <div  className="md:mx-10 my-4  md:w-10/12">
                  <img className="rounded-t-lg  bg-black "
                       src={item.img} alt=""/>
                  <div className="p-10 bg-black bg-opacity-70 h-44 rounded-b-lg">
                    <h1 className="text-white text-xl font-semibold mb-2">{item.h1}</h1>
                    <h2 className="text-gray-400 ">{item.h2}</h2>
                  </div>
                </div></a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const Team = () =>{

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>
      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5 pb-16 pt-24 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
            <div className="flex justify-start md:justify-center text-4xl text-white">
              Community Team
               </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {team.map(item=>(
                <div key={item.name}  className="  rounded-lg p-5 transform ">
                  <div className=" ">
                    <img className="border-4 rounded-full mx-auto w-24 h-24"
                         src={item.img} alt='' />
                  </div>
                  <div className="text-white text-center mt-2 font-semibold">
                    {item.name}
                  </div>
                  <div className="text-indigo-400 text-center mt-2 font-semibold">
                    {item.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Media/>
          <TeamAwards/>
          </div>
      </div>
      <Tail/>
    </div>
  )
}

export default Team

