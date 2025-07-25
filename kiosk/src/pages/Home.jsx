import React from 'react'
import Navbar from '../components/GeneralOnes/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <section
                className="h-screen w-screen"
                style={{
                    background: `linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('./movie_poster.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1
                }}
            >

                <div className="
  fixed
  left-[4.58%]
  right-[57.01%]
  top-[350px]
  h-[148px]
  flex
  flex-wrap
  items-center
  content-start
  gap-[10px]
  p-0
  justify-between
  font-['Inter']
">
                    <div className='flex items-center  text-[#EBFAFF] font-bold  text-[48px] '>
                        The Witcher

                    </div>

                    <p className='text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas molestiae eaque ipsam vero ad distinctio. Delectus nostrum omnis excepturi amet perspiciatis, soluta aliquid perferendis cumque corporis nulla a praesentium dolorem.</p>
                    {/* <div class="group-30 flex  items-center">
                        <div class="rates">
                            <img class="heroicons-solid-star" src="heroicons-solid-star0.svg" />
                            <img class="heroicons-solid-star2" src="heroicons-solid-star1.svg" />
                            <img class="heroicons-solid-star3" src="heroicons-solid-star2.svg" />
                            <img class="heroicons-solid-star4" src="heroicons-solid-star3.svg" />
                            <img class="subtract" src="subtract0.svg" />
                        </div>
                        <div class="iimdb">
                            <div class="_8-1">8.1</div>
                            <img class="mask-group" src="mask-group0.svg" />
                            <img class="mask-group2" src="mask-group1.svg" />
                        </div>
                        <img class="image-41" src="image-410.png" />
                    </div> */}

                    <div className='flex flex-row justify-between gap-4 text-white  '>
                        <button className='rounded-full bg-[#228EE5] h-[40px] w-[128px]' >
                            Watch
                        </button>

                        <button className='rounded-full border border-[#228EE5] h-[40px] w-[128px] hover:bg-[#228EE5]'>
                            Play

                        </button>

                    </div>
                </div>



            </section>

        </>

    )
}

export default Home
