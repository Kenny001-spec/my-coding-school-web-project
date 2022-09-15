import React from 'react'

const  About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-9 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who We Are</h2>
                <p className='py-2 text-grey-600'>We are passionate about building the people that will build the companies that will build Africa. We are problem solvers, technologists and optimists of a better future for Africa. We bring this to life by identifying talented minds, guiding them through innovative training, deploying them effectively and collaborating with others to build sustainable solutions for society.
</p>
                <p className='py-2 text-grey-600 underline cursor-pointer'>Check Out some of my latest project'</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
            </div>
        </div>
    </div>
  )
}

export default About