import Header from "../../../components/header";
import React, {Fragment, useState} from "react";
import Link from "next/link";
import Tail from "../../../components/tail";



const navigation = [
  { id:1 ,name: 'Month', href:'/rank' },
  { id:2 ,name: 'Season', href:'/rank/season' },
  { id:3 ,name: 'Year', href:'/rank/year'},
]
const user = [
  {
    rank:"1",
    name:"davidxing1",
    growthvalue:"99999",
  },
  {
    rank:"2",
    name:"Able",
    growthvalue:"88888",
  },
  {
    rank:"3",
    name:"Join",
    growthvalue:"77777",
  },
  {
    rank:"4",
    name:"David",
    growthvalue:"66666",
  },
  {
    rank:"5",
    name:"FengFeng",
    growthvalue:"55555",
  },
  {
    rank:"6",
    name:"BoBo",
    growthvalue:"44444",
  },
  {
    rank:"7",
    name:"Guanghui",
    growthvalue:"33333",
  },

]
const Year=()=>{
  return (
    <div className='bg-black bg-opacity-90 mx-auto  transition duration-700'>
      <Header></Header>
      <div className='max-w-7xl mx-auto py-16  px-4 '>
        <div className='my-20 mb-14'>
          <div>
            <div className="lg:flex justify-between ">
              <div className="text-xl text-white my-2 lg:my-0 lg:text-4xl font-bold  ">
                Year Ranking
              </div>

            </div>
            <div className="flex justify-start mt-10   text-xs lg:text-lg ">
              {navigation.map(item=>(
                <div key={item.id} className="pr-8">
                  <Link href={item.href}>
                    <a className="text-gray-200">
                      {item.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className=' mx-auto mt-10 rounded-lg mt-2'>
            <div className=''>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 dark:bg-gray-300">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-500  "
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-500  "
                  >
                   Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-500  "
                  >
                    Growth Value
                  </th>

                </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-300 divide-y divide-gray-200">
                {user.map(item=>(
                  <tr key={item.rank} className="hover:bg-gray-200" >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {item.growthvalue}
                    </td>

                  </tr>
                ))}
                </tbody>
              </table>


            </div>
          </div>


        </div>

      </div>
      <Tail></Tail>
    </div>
  );

}
export default Year
