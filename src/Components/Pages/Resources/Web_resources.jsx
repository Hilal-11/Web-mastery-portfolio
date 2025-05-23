import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import {resoursesCoursesLists} from '../../Config'
import { BsSearchHeart } from "react-icons/bs";
import { toast, ToastContainer } from 'react-toastify';
import {newYoutubedata} from '../../Config'
import jsIcon from '../../../assets/ReposImages/javascriptIcon.png';
import tsIcon from '../../../assets/ReposImages/typescript.png';
import reactIcon from '../../../assets/ReposImages/react.png';
import nodeIcon from '../../../assets/ReposImages/nodejs.png';
import Hilal_11 from '../../../assets/ReposImages/Hilal-11.png'
const Web_resources = () => {

    function findUserQuaryVideo(quary , data) {
        return data.filter((data) => data?.title?.toLowerCase()?.includes(quary?.toLowerCase()))
    }
    const [userInput , setUserInput] = useState('');
    const [filteredYoutubeData , setFilterdYoutubeData] = useState(newYoutubedata)
    function searchCourcesHandler(event) {
        setUserInput(event.target.value)
    }
    function searchHandler () {
        if(userInput !== '') {
            const recevedDataFromSrch = findUserQuaryVideo(userInput , newYoutubedata);
            setFilterdYoutubeData(recevedDataFromSrch);
            setUserInput('')
        }else {
             toast.error('Please enter a search query' , {
                position: "top-right",
                draggable: true,
            })
        }
    }
    
    return (
        <div className="w-full h-auto px-4 my-10 lg:my-20">
            <div className="relative w-full lg:h-[500px] h-[300px] bg-slate-800 shadow-2xl rounded-xl flex justify-center">
            <img className="lg:w-[150px] lg:h-[150px] w-[60px] h-[60px] absolute lg:left-20 lg:bottom-20 left-5 bottom-10" src={jsIcon}></img>
            <img className="lg:w-[150px] lg:h-[150px] w-[60px] h-[60px] absolute lg:right-20 lg:top-10 right-5 top-5" src={tsIcon}></img>
            <img className="lg:w-[150px] lg:h-[150px] w-[60px] h-[60px] absolute lg:right-52 lg:bottom-20 right-5 bottom-10" src={reactIcon}></img>
            <img className="lg:w-[150px] lg:h-[150px] w-[60px] h-[60px] absolute lg:left-60 left-5 " src={nodeIcon}></img>
            <div>
                <img className="h-full mix-blend-multiply" src={Hilal_11} alt="" />
                    </div>
                <div className="absolute w-[88%] h-[60px] lg:h-[80px] rounded-xl -bottom-7 lg:-bottom-10 bg-slate-900"> 
             
                    <div className="relative w-full lg:w-full mx-auto">
                        <input 
                            type="text"
                            className="px-4 lg:py-6 py-4 w-full rounded-xl bg-slate-900 h-full font-bold text-md lg:text-lg focus:outline-none" 
                            placeholder="Search Course :-"
                            onChange={searchCourcesHandler}
                            value={userInput}
                        />
                        <button 
                            onClick={searchHandler}
                            className="absolute right-2 lg:right-6 top-1/2 transform -translate-y-1/2 text-4xl"
                        >
                            <BsSearchHeart />
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-20 flex justify-start lg:justify-center gap-10 overflow-x-auto px-4">
               {
                resoursesCoursesLists.map((dataItem) => (
                    <div key={dataItem.id} className=" bg-slate-900 rounded-md px-10 py-3 font-bold text-sm lg:text-lg hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:duration-700 cursor-pointer">
                        <NavLink to={''}>{dataItem.item}</NavLink>
                    </div>
                ))
               }
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 ">

               {
                filteredYoutubeData.map((item , index) => (
                    <Link key={item.id} target="_blank" to={`https://www.youtube.com/watch?v=${item.id.videoId}`}><div className="relative w-full h-auto bg-slate-900 shadow-2xl rounded-xl -my-6 px-2 py-2">
                        <div>
                            <img className="w-full rounded-xl" src={item.thumbnails.medium.url} alt="error" />
                        </div>
                    
                        <div className=" w-full rounded-xl flex justify-between px-0 lg:px-10 my-2">
                            <button className="px-10 py-2 rounded-md inline-block font-bold  bg-gradient-to-r from-sky-500 to-indigo-500  text-transparent bg-clip-text ">Frontend</button>
                            <button className="px-10 py-2 rounded-md inline-block font-bold  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text ">Watch Now</button>
                        </div>
                    </div></Link>
                ))
               }
            </div>
            <ToastContainer />
            <br />
        </div>
    )
}
export default Web_resources;