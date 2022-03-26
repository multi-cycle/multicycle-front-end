import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/router";


const TopContent = () =>{
    return (
        <>
            <div className="relative sm:overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-cover"
                        src="https://cdn.discordapp.com/attachments/876498266550853642/949201321112780810/beij_.png"
                        alt="People working on laptops"
                    />


                </div>

                <div className="max-w-7xl relative px-5 py-16 sm:px-6 sm:py-24 lg:py-32 mx-auto md:flex justify-between ">
                    <div>
                        <h1 className=" md:max-w-xs xl:max-w-xl mb-16">
                            <span className="block text-white text-4xl  tracking-tight sm:text-5xl pb-6">THRIVE WITH</span>
                            <span className="block text-white text-4xl  tracking-tight sm:text-5xl pb-6">BEST MULTICYCLE</span>
                            <span className="block text-white text-4xl  tracking-tight sm:text-5xl pb-12 flex" >
                      IN
                      <div className="ml-2 text-blue-400">
                        WEB3</div></span>

                        </h1>
                        <div className="flex text-white text-xl">
                            <div className="  mr-10 rounded-tl-md  rounded-bl-3xl rounded-br-md  rounded-tr-3xl  bg-gradient-to-r bg-blue-800">
                                <div className=" px-7 py-3.5  rounded-tl-md  rounded-bl-3xl rounded-br-md  rounded-tr-3xl  bg-gradient-to-r from-blue-400 to-blue-600 transform transition duration-300  -translate-x-1 -translate-y-0.5 hover:-translate-x-0.5 hover:-translate-y-0">
                                    <Link href='/explore'>
                                        EXPLORE
                                    </Link>
                                </div>
                            </div>
                            <div className="rounded-tl-md  rounded-bl-3xl rounded-br-md  rounded-tr-3xl border-2 border-indigo-600">
                                <div className="px-7 py-3 rounded-tl-md  rounded-bl-3xl rounded-br-md  rounded-tr-3xl bg-indigo-800 border-2 border-blue-500 transform transition duration-300  -translate-x-1 -translate-y-1 hover:-translate-x-0 hover:-translate-y-0">
                                    <Link href='/identity'>
                                        CLAIM
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="md:flex mt-24">
                            <div  className="flex  rounded-full bg-blue-600 bg-opacity-60 px-4 py-1  transform transition duration-300 hover:-translate-x-1 hover:bg-opacity-80 " >
                                <div className="text-white font-semibold mr-3">
                                    News:
                                </div>
                                <a href="https://dfinity.org" className="text-gray-400 text-sm mt-0.5 truncate">
                                    Project MultiCycle Presents: 2022 is gonna be ICP Cool
                                </a>
                                <div>
                                    <i className="fa fa-arrow-right text-gray-200 ml-3" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0.5 md:ml-8  text-white">
                                <a href="" className="px-2.5 py-2 rounded-full bg-blue-600 bg-opacity-40 mr-5 transition duration-300 hover:bg-opacity-80">
                                    <i className="fa fa-twitter mt-1.5 " aria-hidden="true"></i>
                                </a>
                                <a href="" className="px-2.5 py-2 rounded-full bg-blue-600 bg-opacity-40 mr-5 transition duration-300 hover:bg-opacity-80">
                                    <i className="fa fa fa-medium mt-1.5 " aria-hidden="true"></i>
                                </a>
                                <a href="" className="px-2.5 py-2 rounded-full bg-blue-600 bg-opacity-40 mr-5 transition duration-300 hover:bg-opacity-80">
                                    <i className="fa fa-telegram mt-1.5 " aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


const SpaceContent = () =>{
    const router = useRouter();
    const getproject = async (e) =>{
        await router.push(`/project/${e.target.id}`)
    };
    const spaces=[
        {
            name:"Galaxy",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/galaxyspace/galaxyspace-logo-1640145282.png",
            title:"Galaxy Space",
        },
        {
            name:"BNB",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/bsc-logo.png",
            title:"BNB Chain",
        },
        {
            name:"Polygon",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1635133810/1635133810-logo-1635133810.jpeg",
            title:"Polygon Studios",
        },
        {
            name:"Solana",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1643707204/1643707204-logo-1643707204.png",
            title:"Solana",
        },
        {
            name:"CoinList",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1639437714/1639437714-logo-1639437713.png",
            title:"CoinList",
        },
        {
            name:"Yearn",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/yearn-icon.png",
            title:"Yearn Finance",
        },
        {
            name:"Finance",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/alpaca-icon.png",
            title:"Alpaca Finance",
        },
        {
            name:"CoinGecko",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1642609357/1642609357-logo-1642609356.png",
            title:"CoinGecko",
        },
        {
            name:"Protocol",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/perp-logo.png",
            title:"Perpetual Protocol",
        },
        {
            name:"Capital",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/multicoin-logo.jpg",
            title:"Multicoin Capital",
        },
        {
            name:"Injective",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/injective-logo.png",
            title:"Injective",
        },
        {
            name:"Defiant",
            img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1634534074/1634534074-logo-1634534073.jpeg",
            title:"The Defiant",
        },
    ]

    return (
        <>
            <div>
                <div className="flex justify-between">
                    <div className="text-white text-3xl">
                        Hot Bounty
                    </div>
                    <div className="text-blue-400 text-xl mt-2">
                        <Link href="/square" >
                            View All
                        </Link>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {spaces.map(item=>(
                        <button key={item.name} onClick={getproject} className="bg-gray-700  rounded-lg p-5 transform transition duration-300  hover:scale-105">
                            <div className="">
                                <img id={item.name} className="rounded-full mx-auto w-24 h-24"
                                     src={item.img} alt='' />
                            </div>
                            <div className="text-white text-center mt-2">
                                {item.title}
                            </div>
                        </button>
                    ))}

                </div>
            </div>
        </>
    )
}

const NewsContent = () =>{
    const news=[
        {
            id:"1",
            href:"/",
            img:"https://miro.medium.com/max/1400/1*S0H-5YYsChjLNXdcgSRrhw.jpeg",
            title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
            h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
            time:" Friday, February 11, 2022",
        },
        {
            id:"2",
            href:"/",
            img:"https://miro.medium.com/max/1400/1*S0H-5YYsChjLNXdcgSRrhw.jpeg",
            title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
            h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
            time:" Friday, February 11, 2022",
        },
        {
            id:"3",
            href:"/",
            img:"https://miro.medium.com/max/1400/1*S0H-5YYsChjLNXdcgSRrhw.jpeg",
            title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
            h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
            time:" Friday, February 11, 2022",
        },
        {
            id:"4",
            href:"/",
            img:"https://miro.medium.com/max/1400/1*v0AzFkdVAk657wOSEFBvdg.png",
            title:" Project Galaxy Presents: 2022 is gonna be SOL Cool  ",
            h1:" A Multichain Feast with over $1,000,000 Prize Pool, hosted by Galaxy, powered by Solana, featuring 27 top-notched protocols in the Solana universe",
            time:" Friday, February 11, 2022",
        },
    ]
    return (
        <>
            <div className="mt-32">
                <div className="flex justify-between">
                    <div className="text-white text-3xl">
                        Hot News
                    </div>
                </div>
                <div className="mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-4 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible">
                    {news.map(item=>(

                        <a key={item.id} href={item.href} className="bg-gray-700    rounded-lg  transform transition duration-300  hover:scale-105">
                            <div className="w-80 md:w-full">
                                <img className="  rounded-t-lg"
                                     src={item.img} alt='' />
                            </div>
                            <div className="py-3 xl:py-5  px-7 ">
                                <div  className=" text-white h-12 overflow-ellipsis overflow-hidden ">
                                    {item.title}
                                </div>
                                <div className="text-gray-400 pt-2 h-20 overflow-ellipsis overflow-hidden">
                                    {item.h1}
                                </div>
                                <div className="pt-5  text-gray-400">
                                    {item.time}
                                </div>
                            </div>
                        </a> ))}
                </div>
            </div>
        </>
    )
}


const HomeContent = () =>{
    return (
        <>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <TopContent/>
                    <div className="bg-black bg-opacity-90">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                           <SpaceContent/>
                            <NewsContent/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent
