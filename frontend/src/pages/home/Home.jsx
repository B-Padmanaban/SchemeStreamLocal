import React from 'react'
import {Link} from "react-router-dom"

import Lions from '../../assets/lions.png'
import Agri from '../../assets/agri.png'
import Busi from '../../assets/busi.png'
import Edu from '../../assets/edu.png'
import Law from '../../assets/law.png'
import Sci from '../../assets/sci.png'
import Bank from '../../assets/bank.png'
import House from '../../assets/house.png'
import Skill from '../../assets/skill.png'
import Tra from '../../assets/travel.png'
import Soc from '../../assets/social.png'
import Train from '../../assets/train.png'
import Safe from '../../assets/safe.png'
import Health from '../../assets/health.png'
import Child from '../../assets/child.png'
import Sports from '../../assets/sports.png'

const Username = "Username";

const Home = () => {
  return (
    <div style={{ backgroundColor: '#30347c', minHeight: '100vh' }} className="text-white ">

      <div className=' flex justify-between space-x-4 '>

        <div className='ml-5 mt-10'>
            
          <h1 className="text-5xl font-bold">Welcome, {Username} </h1>
          <h1 className="text-4xl font-bold mt-4">Your Gateway to Government Schemes <br/>and Opportunities </h1>
          <h2 className="text-2xl font-bold mt-4">Access Resources, apply easy and make informed decisions for <br/>a better tomorrow</h2>
        </div>

        <div><img src={Lions} alt="" className='w-80 h-90 mr-5' /></div>

      </div>

      <div className="flex space-x-4 ml-5">
        <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-max">
          <h1 className="text-3xl font-bold flex justify-center">740+</h1>
          <p className="text-lg">Total Schemes</p>
        </div>

        <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-max">
          <h1 className="text-3xl font-bold flex justify-center">510+</h1>
          <p className="text-lg">Central Schemes</p>
        </div>

        <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-max">
          <h1 className="text-3xl font-bold flex justify-center">230+</h1>
          <p className="text-lg">State Schemes</p>
        </div>
      </div>

      <div className='flex items-center justify-center mt-16 text-3xl '>
        Schemes based on few categories
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4'>
        
        <Link to={`/category/Agriculture, Rural & Environment`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200 ">
                <img src={Agri} alt="img" className='mr-6 w-10 h-10' />
                <p className="text-lg  cursor-pointer">Agriculture, Rural & Environment</p>
            </div>
        </Link>


        <Link to={`/category/Education & Learning`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
                <img src={Edu} alt="img" className='mr-6 w-10 h-10' />
                <p className="text-lg">Education & Learning</p>
            </div>
        </Link>

        <Link to={`/category/Business & Entrepreneurship`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Busi} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Business & Entrepreneurship</p>
            </div>
        </Link>

        <Link to={`/category/Public safety, Law & Justice`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Law} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Public Safety,Law & Justice</p>
            </div>
        </Link>

        <Link to={`/category/Science, IT & Communications`} className="block"> 
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Sci} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Science, IT & <br/>Communications</p>
            </div>
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4'>

        <Link to={`/category/Travel & Tourism`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Tra} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Travel & Tourism</p>
            </div>
        </Link>

        <Link to={`/category/Banking, Finanial services & Insurance`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Bank} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Banking,Financial <br/>Services and<br/> Insurance</p>
            </div>
        </Link>

        <Link to={`/category/Housing & Shelter`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={House} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Housing & Shelter</p>
            </div>
        </Link>

        <Link to={`/category/Skills & Employment`} className="block"> 
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Skill} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Skills & <br/>Employment</p>
            </div>
        </Link>

        <Link to={`/category/Social welfare & Empowerment`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Soc} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Social welfare & <br/>Empowerment</p>
            </div>
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4'>

        <Link to={`/category/Sports & Culture`} className="block"> 
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Sports} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Sports & Culture</p>
            </div>
        </Link>

        <Link to={`/category/Health & Weallness`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Health} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Health & Wellness</p>
            </div>
        </Link>

        <Link to={`/category/Transport & Infrastructure`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Train} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Transport & <br/>Infrastructure</p>
            </div>
        </Link>

        <Link to={`/category/Utility & Sanitation`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Safe} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Utility & Sanitation</p>
            </div>
        </Link>

        <Link to={`/category/Women & Child`} className="block">
            <div className="bg-white text-[#30347c] p-4 border border-gray-300 rounded-lg w-60 h-25 flex items-center hover:scale-105 transition-transform duration-200">
              <img src={Child} alt="img" className='mr-6 w-10 h-10' />
              <p className="text-lg">Women and Child</p>
            </div>
        </Link>
      </div>
    </div>
  )
}
export default Home