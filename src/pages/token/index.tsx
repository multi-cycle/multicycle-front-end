import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const PLToken=[
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/950697343743836160/fang.png",
    types:"Platform",
    usefulness:"Service Fee Pay  ",
    h1:"For games built by PlayerLink Studios, PL Stakers can earn game tokens/NFTs.",
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/950697620072972318/sanjiao.png",
    types:"Foundation",
    usefulness:"Earn IMO Tickets",
    h1:"To participate in IMO, users need to stake PL to enter the lottery.",
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/950698338238468126/yuanyuanyuan.png",
    types:"Community",
    usefulness:"Payment Currency",
    h1:"PL will be accepted as one of the currencies within the Community.",
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/950697023974277130/yuanfang.png",
    types:"NetWork",
    usefulness:"Chain Native Token",
    h1:"PL is the native token and acts as gas fee in our PlayerLink Chain.",
  },
  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/950697024246919208/yuanyuan.png",
    types:"Ventures",
    usefulness:"Investment Usage",
    h1:"Community members can use PL and Venture funds to invest in external projects together.",
  },

  {
    img:"https://cdn.discordapp.com/attachments/876498266550853642/950697024699912192/sanjiaoyuan.png",
    types:"Community",
    usefulness:"Token Governance",
    h1:"Community treasury will be governed by PL holders in the future.",
  },
]
const PLDistribution=[
  {
    title:"Total Supply",
    amount:"10,000,000",
  },
  {
    title:"Supply at TGE",
    amount:"170,000 (1.7%)",
  },
  {
    title:"Small Backers ",
    amount:"100,000 (1.0%)",
  },
  {
    title:"Small Backers Price",
    amount:"2 USD",
  },
]
const PLDetails=[
  {
    color:"",
    purpose:"",
    totalsupply:"",
    vesting:"",
  },
  {
    color:"",
    purpose:"",
    totalsupply:"",
    vesting:"",
  },
  {
    color:"",
    purpose:"",
    totalsupply:"",
    vesting:"",
  },
  {
    color:"",
    purpose:"",
    totalsupply:"",
    vesting:"",
  },
  {
    color:"",
    purpose:"",
    totalsupply:"",
    vesting:"",
  },
  {
    color:"",
    purpose:"",
    totalsupply:"",
    vesting:"",
  },
]


const Team = () =>{

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>
      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0" />
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5 pb-16 pt-24 sm:pt-32 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
            <div>
            <div className="text-center flex justify-center text-2xl md:text-4xl text-white font-semibold">
              Introduction to  <div className="ml-2 text-indigo-400">PlayerLink Token</div>
            </div>
            <div className=" md:text-xl text-gray-400 mt-2 text-center md:w-11/12 xl:w-1/2 mx-auto">
              The PlayerLink Token (PL) is the backbone of the PlayerLink ecosystem.
            </div>
            <div className="mt-10 grid md:grid-cols-2  xl:grid-cols-3 gap-10">
              {PLToken.map(item=>(
              <div key={item.usefulness} className="rounded-2xl bg-black bg-opacity-80 p-5">
                <div className="flex">
                  <div className="mt-2 ">
                    <img className="w-10 mr-4" src={item.img} alt='' />
                  </div>
                  <div>
                    <div className="text-base text-indigo-400 mb-5">
                      {item.types}
                      <div className="text-2xl text-white font-semibold">
                        {item.usefulness}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="text-gray-400">
                  {item.h1}
                </div>
              </div> ))}
            </div>
            </div>

            <div className="mt-32">
              <div className="text-center flex justify-center text-2xl md:text-4xl text-white font-semibold">
                <div className="mr-2 text-indigo-400">PlayerLink Token</div>  Distribution
              </div>
              <div className="mt-10 grid md:grid-cols-2  xl:grid-cols-4 gap-10">
                {PLDistribution.map(item=>(
                  <div key={item.title} className="rounded-2xl bg-black bg-opacity-80 p-5">
                    <div className="text-base text-gray-400 mb-5">
                      {item.title}
                    </div>
                    <div className="text-white text-2xl">
                      {item.amount}
                    </div>
                  </div> ))}
              </div>
              <div className="mt-10 flex justify-center">
                <img className=" xl:w-7/12"
                 src='https://cdn.discordapp.com/attachments/876498266550853642/950964463090167808/c05de8b1e3013d15.png' alt='' />
              </div>

              <div className="flex flex-col mt-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 xl:px-56">
                    <div className="shadow overflow-hidden border-b border-gray-600 border-opacity-60">
                      <table className="min-w-full divide-y divide-gray-600 divide-opacity-60">
                        <thead className="">
                        <tr>
                          <th scope="col"
                              className="px-6 py-3 text-left text-sm  text-white font-semibold  tracking-wider">Purpose
                          </th>
                          <th scope="col"
                              className="px-6 py-3 text-left text-sm  text-white font-semibold  border-gray-700  border-opacity-60 border-r border-l  tracking-wider">Total Supply
                          </th>
                          <th scope="col"
                              className="px-6 py-3 text-left text-sm  text-white font-semibold  tracking-wider">Vesting
                          </th>
                        </tr>
                        </thead>
                        <tbody className="  divide-y divide-gray-600 divide-opacity-60">
                        {PLDetails.map(item=>(

                        <tr key={item.color}>
                          <td className="px-6 py-3  whitespace-nowrap text-sm font-medium text-gray-200 flex">
                            <div className={classNames([item.color],"w-4 h-4  rounded-sm mr-1")}></div>
                            {item.purpose}</td>
                          <td className="px-6 py-3 w-36 border-gray-700 border-opacity-60 border-r border-l whitespace-nowrap text-sm text-gray-200">
                            {item.totalsupply}
                          </td>
                          <td className="px-6 py-3  whitespace-nowrap text-sm text-gray-200">
                            {item.vesting}</td>
                        </tr>
                        ))}

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tail/>
    </div>
  )
}

export default Team

