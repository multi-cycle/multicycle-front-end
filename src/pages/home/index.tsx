import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import HomeContent from "../../components/homecontent";

const Home = () =>{
    return (
      <div className="mx-auto  dark:bg-current  transition duration-700">
        <Header/>
        <HomeContent/>
        <Tail/>
      </div>
    )
}

export default Home

