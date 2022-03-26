import {useRouter} from "next/router";
import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/header";
import { level_color, level_img } from '../../constant';
import {Dialog, Transition} from "@headlessui/react";
import {ExclamationIcon} from "@heroicons/react/solid";
import Tail from "../../components/tail";
import axios from "axios";
import { useAtom } from 'jotai';
import { WalletAddress } from '../../jotai';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Bounty = () => {
    const router = useRouter()
    const [openload ,setOpenload]= useState(false)
    const [bounty_url,set_bounty_url] = useState("Enter a Github Bound URL")
    const [participants_number,setParticipants_number] = useState("0")
    const [submissions_number,setSubmissions_number] = useState("0")
    const [walletAddress,] =useAtom(WalletAddress)
    const data_template = {
        bounty_name:"",
        git_level:"",
        start_nft_image:"",
        finish_nft_image:"",
        token_name:"",
        token_number:"",
        start_time:"",
        finish_time:"",
        content:"",
    }
    const [data,set_data] = useState(data_template)


    useEffect( ()=>{
        setOpenload(true)
        if(router.isReady){
            const user_name = router.query.slug[0]
            const bounty_name = router.query.slug[1]

            if (user_name != '' && bounty_name != ''){
                console.log(user_name,bounty_name)
                const bounty_url = `https://github.com/${user_name}/Bounty/tree/main/${bounty_name}`
                const new_url = bounty_url.replace('tree', 'raw')
                const content_url = `https://raw.githubusercontent.com/${user_name}/Bounty`
                const index = bounty_url.indexOf("Bounty") + 6
                const user_url = bounty_url.substring(index, bounty_url.length)
                const new_user_url = user_url.replace('/tree', '');
                (document.getElementById("user_url") as HTMLInputElement).value= bounty_url
                const fetchData = async () => {
                    try {
                        const token_name_state = (await axios.get(`${content_url}${new_user_url}/award/name.md`)).status
                        if (token_name_state == 200) {
                            const token_name = await (await axios.get(`${content_url}${new_user_url}/award/name.md`)).data
                            const token_number = await (await axios.get(`${content_url}${new_user_url}/award/${token_name}.md`)).data
                            const start_time = await (await axios.get(`${content_url}${new_user_url}/time/start.md`)).data
                            const finish_time = await (await axios.get(`${content_url}${new_user_url}/time/finish.md`)).data
                            const content = await (await axios.get(`${content_url}${new_user_url}/README.md`)).data
                            const git_level = await (await axios.get(`${content_url}${new_user_url}/level/level.md`)).data
                            set_data({
                                bounty_name,
                                git_level,
                                start_nft_image: `${new_url}/images/start.png`,
                                finish_nft_image: `${new_url}/images/finish.png`,
                                token_name,
                                token_number,
                                start_time,
                                finish_time,
                                content,
                            })
                            set_bounty_url(`https://github.com/${user_name}/Bounty/tree/main/${bounty_name}`)
                        }
                        // const fetchUserBounty = async () => {
                        //     const data = await axios.get('http://localhost:3004/api/get_create_bounty_verify', {
                        //         params: {
                        //             github_user_name: "davidxing1liu",
                        //             bounty_name:{bounty_name}
                        //         }
                        //     })
                        //     console.log(data.data.data)
                        // }
                        // fetchUserBounty()
                    }catch (error){
                        console.log("no data")
                    }
                };
                fetchData()
            }
            setOpenload(false)
        }
    },[router.isReady])


    const Claim =() =>{
        const url = (document.getElementById("user_url") as HTMLInputElement).value
        if(url!==""){
            const github_user_name ="davidxing1liu";
            const claim_github_user_name="davidxing1"
            const claim_bounty_url = bounty_url;
            const claim_bounty_state = "Pending";
            const participants_number = "0";
            const submissions_number = "0"
            const insert_time = "2022/3/20";
            const update_time = "2022/3/31";
            const bounty_level = data.git_level;
            const bounty_finish_nft_image = data.finish_nft_image;
            const bounty_content = data.content;
            const bounty_name = data.bounty_name
            axios.post('http://localhost:3004/api/claim_bounty', {
                claim_github_user_name,
                github_user_name,
                claim_bounty_url,
                claim_bounty_state,
                participants_number,
                submissions_number,
                insert_time,
                update_time,
                bounty_level,
                bounty_name,
                bounty_finish_nft_image,
                bounty_content
            })
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              });
        }

    }

    const checkUrl = ()=>{
        const url = (document.getElementById("user_url") as HTMLInputElement).value
        router.push(url)
    }
    function alwaystrue(){
        return false
    }

    if (data != data_template){
            return (
                <div className="mx-auto  dark:bg-current  transition duration-700">
                    <Header/>
                    <div className="relative pt-16">
                        <div className="absolute inset-x-0 bottom-0    "/>
                        <div className="bg-black bg-opacity-90 mx-auto">
                            <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
                                <div className="text-white text-5xl">
                                    Bounty
                                </div>

                                <div className="mt-16 text-sm md:text-xl">
                                    <div className="bg-gray-700 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10   ">
                                        <div className="xl md:text-2xl mb-10">
                                            Bounty Information
                                        </div>
                                        <div className=" mb-10 xl:flex">
                                            <div className="flex">
                                            <div className="mr-4">Bounty Name</div>
                                            <div className={classNames(level_color[data.git_level])}>{data.bounty_name}</div>
                                            </div>
                                            <div className=" xl:ml-64 mt-10 xl:mt-0 xl:flex">
                                                <div className="flex  ">
                                                    <div>The number of participants</div>
                                                    <div className={classNames(level_color[data.git_level], "ml-2")}>{participants_number}</div>
                                                </div>
                                                <div className="flex mt-10 xl:mt-0 xl:ml-16">
                                                    <div> Number of submissions</div>
                                                    <div className={classNames(level_color[data.git_level], "ml-2  mr-10")}>{submissions_number}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:flex   ">
                                            <div>
                                                Start Bounty NFT
                                                <div
                                                    className=" mt-3  w-28 h-28 flex justify-center text-4xl rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                                                    <img className="rounded-2xl" src={data.start_nft_image} alt=""/>
                                                </div>
                                            </div>
                                            <div className="mt-5 xl:mt-0  xl:ml-16 ">
                                                Finish Bounty NFT
                                                <div
                                                    className=" mt-3  w-28 h-28 flex justify-center text-4xl rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                                                    <img className="rounded-2xl" src={data.finish_nft_image} alt=""/>
                                                </div>
                                            </div>
                                            <div className="flex  mb-10 xl:ml-24 mt-10 xl:mt-0">
                                                <div> Award</div>
                                                <div className={classNames(level_color[data.git_level], "ml-2")}>{data.token_name} {data.token_number}</div>
                                            </div>
                                            <div className="flex  mb-10 xl:ml-16">
                                                <div>Time</div>
                                                <div
                                                    className={classNames(level_color[data.git_level], "ml-2  mr-10")}>Start:{data.start_time}</div>
                                                <div
                                                    className={classNames(level_color[data.git_level], "ml-2 ")}>Finish:{data.finish_time}</div>
                                            </div>
                                        </div>
                                        <div className=" mt-10">
                                            Bounty Introduction
                                            <div className="md:flex justify-between">
                                                <div className="mt-3 flex ">
                          <textarea
                              className="bg-gray-700 bg-opacity-30 text-xs md:text-sm break-normal h-80 rounded-2xl p-3  border-black w-80 md:w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                              // placeholder="Enter Task Introduction"
                              placeholder={data.content}
                              id="Introduction"
                              readOnly={true}
                          />
                                                </div>
                                                <div className="mt-8 lg:mt-0 ml-5 my-auto xl:mr-36">
                                                    <img className="w-80 rounded-xl animate-pulse" src={classNames(level_img[data.git_level])} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xl mt-10  md:flex">
                                            <div>
                                                Bounty URL
                                                <div className="mt-3 flex">
                                                    <input type="text"
                                                           className="bg-gray-700 bg-opacity-30 text-xs md:text-sm   rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                                                           placeholder=""
                                                           id="user_url"
                                                           readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:mt-5">
                                                <button onClick={checkUrl}
                                                        className="px-2 h-8 md:h-11  md:ml-5  text-sm  text-black mt-5 bg-gray-400  rounded-xl md:rounded-2xl">
                                                    View GitHub
                                                </button>
                                            </div>
                                        </div>
                                        <div  className="mt-3 flex justify-end">
                                            <button  onClick={Claim} className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                                                <div className="">
                                                    Claim
                                                </div>
                                            </button>
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
                    <Tail/>
                </div>
            )
    }else{
        return (
          <div>
              1
          </div>
        )
    }
}

export default Bounty
