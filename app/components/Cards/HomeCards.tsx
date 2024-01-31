import React from 'react'

function HomeCards() {
  return (
    <div className="bg-slate-800 text-white px-10 items-center flex flex-col py-10">
        <div className='text-4xl px-10 py-10 '>
        Where X marks the spot for personal growth.
        </div>

        <div className='flex flex-col justify-evenly '>
            <div className='flex flex-row justify-between'> 
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Mind Mastery</text>
                </div>
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Body Bliss</text>
                </div>
            </div>
            <div className='flex flex-row justify-between'> 
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Skill Sprout</text>
                </div>
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Career Catalyst</text>
                </div>
            </div>
            <div className='flex flex-row justify-between'> 
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Relationship Renaissance</text>
                </div>
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Financial Freedom</text>
                </div>
            </div>
            <div className='flex flex-row justify-between'> 
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Creativity Constellation</text>
                </div>
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Digital Detox Delight</text>
                </div>
            </div>
            <div className='flex flex-row justify-between'> 
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Sustainable Soul</text>
                </div>
                <div className='border border-white rounded-2xl p-4 h-[500px] w-[500px] mx-10 text-center text-2xl my-10 '>
                    <text>Gratitude Groove</text>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCards