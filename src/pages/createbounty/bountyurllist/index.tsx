import Header from "../../../components/header";
import React, {Fragment, useState} from "react";
import Link from "next/link";
import Tail from "../../../components/tail";
import { Dialog, Transition } from '@headlessui/react';



const user = [
  {
    rank:"1",
    name:"davidxing1",
    url:"https://github.com/Davidxing1/Bounty/tree/main/template",
  },
  {
    rank:"2",
    name:"Able",
    url:"https://github.com/playerlinkio",
  },
  {
    rank:"3",
    name:"Join",
    url:"https://github.com/Davidxing1?tab=repositories",
  },
  {
    rank:"4",
    name:"David",
    url:"https://www.tailwindcss.cn/docs/hover-focus-and-other-states#visited",
  },
  {
    rank:"5",
    name:"FengFeng",
    url:"https://web3games.org/",
  },
  {
    rank:"6",
    name:"BoBo",
    url:"https://www.google.com.hk/",
  },
  {
    rank:"7",
    name:"Guanghui",
    url:"https://near.org/zh/",
  },

]
const Rank=()=>{
  const [openConfirm,setOpenConfirm] = useState(false)
  const [URL_ID,setURL_ID]=useState("")
  const Confirm = (e) =>{
    const url_id =(document.getElementById(e) as HTMLInputElement).innerText
    console.log(e)
    setURL_ID(url_id)
    setOpenConfirm(true)
  }
  return (
    <div className='bg-black bg-opacity-90 mx-auto  transition duration-700'>
      <Header></Header>
      <div className='max-w-7xl mx-auto py-16  px-4 '>
        <div className='my-20 mb-14'>
          <div>
            <div className="lg:flex justify-between ">
              <div className="text-xl text-white my-2 lg:my-0 lg:text-4xl font-bold  ">
                Month Ranking
              </div>
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
                    URL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-500  "
                  >
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
                    <td id={item.rank} className="px-6 py-4 whitespace-nowrap text-base text-blue-400">
                      <Link href={item.url}>
                      <a>
                      {item.url}
                      </a>
                      </Link>
                    </td>
                    <td>
                    <button onClick={()=>Confirm(item.rank)} className="px-6 py-4 whitespace-nowrap text-base bg-green-300 rounded-lg px-1 py-0.5 -mt-0.5">
                      Confirm
                    </button>
                    </td>

                  </tr>
                ))}
                </tbody>
              </table>


            </div>
          </div>

          <Transition.Root show={openConfirm} as={Fragment}>
            <Dialog as="div" className="fixed z-30 inset-0 overflow-y-auto "  onClose={()=>{setOpenConfirm(false)}}>
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
                  <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:p-6">
                    <div>

                      <div className="mt-3 text-center text-xl font-semibold sm:mt-5">
                        Please confirm that the content of this URL has been saved
                        <div className="my-3">
                        <Link href={URL_ID}>
                        <a  className="mt-2 text-base text-blue-400 truncate mt-4">
                          {URL_ID}
                        </a>
                        </Link>
                        </div>
                        <div className="xl:flex justify-center">
                          <button onClick={()=>{setOpenConfirm(false)}} className=" bg-slate-300 rounded-lg px-3 py-0.5 mt-5 mr-7">
                            Cancel
                          </button>
                          <button className=" bg-green-300 rounded-lg px-3 py-0.5 mt-5">
                            Submit
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>

      </div>
      <Tail></Tail>
    </div>
  );

}
export default Rank
