import Link from "next/link"
import React from "react"

const ends =[
    {
        title:"Explore",
        content:[
            {
                h1:"Home",
                href:"/",
            },
            {
                h1:"Team",
                href:"/",
            },
            {
                h1:"Token",
                href:"",
            }
        ]

    },
    {
        title:"Resources",
        content:[
            {
                h1:"Docs",
                href:"",
            },
            {
                h1:"Mirror",
                href:"",
            },
            {
                h1:"GitHub",
                href:"",
            }
        ]

    },
    {
        title:"Participate",
        content:[
            {
                h1:"Discord",
                href:"",
            },
            {
                h1:"Twitter",
                href:"",
            },
            {
                h1:"Telegram",
                href:"",
            }
        ]

    }
]
const participate=[
    {
        href:"",
        icon:"fa fa-telegram"
    },
    {
        href:"",
        icon:"fa fa-twitter",
    },
    {
        href:"",
        icon:"fa fa-reddit",
    },
    {
        href:"",
        icon:"fa fa-medium",
    }

]
const Tail=()=>{
    return(
        <div className="bg-black pt-12 pb-1 px-10   ">
            <div className="md:flex justify-between  max-w-7xl mx-auto">
                <div className="text-center md:flex justify-between mb-10">
                    {ends.map(end=>(
                    <div key={end.title} className="mx-10" >
                    <div className="text-gray-700 font-semibold text-base dark:text-gray-300">
                        {end.title}
                    </div>
                        {end.content.map(item=>(
                    <div key={item.h1} className="my-3 text-gray-500 text-sm transition  duration-300 transform hover:translate-x-2 dark:text-gray-400">

                        <Link href={item.href}>
                        <a>
                            {item.h1}
                        </a>
                        </Link>
                    </div>))}
                    </div>
                    ))}
                </div>
                <div>
                    <div  className="flex justify-center md:justify-end " >
                    <img className="w-64" src="/logo.png" alt=""/>
                    </div>
                    <div className="my-5 text-gray-500 text-sm text-center xl:-ml-2">
                        The best block explorer of MultiCycle
                    </div>
                    <div className="flex justify-center md:justify-start mt-10">
                        {participate.map(item=>(
                    <div key={item.icon} className="mr-5">
                        <Link href={item.href}>
                        <a  className="text-gray-500 hover:text-gray-500">
                        <i className={item.icon} aria-hidden="true"></i></a></Link>

                    </div> ))}
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto flex justify-center md:block md:pl-10 my-10 text-gray-500 pb-24 md:pb-0">
            © 2022 MultiCycle</div>
        </div>
    )
}
export  default Tail
