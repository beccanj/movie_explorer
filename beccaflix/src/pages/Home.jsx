import React, { useState, useEffect } from "react";
import Navbar from '../components/GeneralOnes/Navbar';
import {
    Card,
    CardContent,
} from "@/components/ui/card";

const Home = () => {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://jsonfakery.com/movies/paginated?page=1&limit=5')
            .then(res => res.json())
            .then(data => {
                setSlides(data.data.slice(0, 5));
                setMovies(data.data);
            })
            .catch(err => {
                console.error('Failed to load slides:', err);
            });
    }, []);

    useEffect(() => {
        const fetchAllMovies = async () => {
            let allMovies = [];
            let page = 1;
            let hasMore = true;

            while (hasMore) {
                const res = await fetch(`https://jsonfakery.com/movies/paginated?page=${page}`);
                const data = await res.json();

                if (data.data && data.data.length > 0) {
                    allMovies = [...allMovies, ...data.data];
                    page++;
                } else {
                    hasMore = false;
                }
            }

            setSlides(allMovies.slice(0, 5));
            setMovies(allMovies);
        };

        fetchAllMovies();
    }, []);


    return (
        <>
            <Navbar />


            {slides.length > 0 && (
                <div
                    className="h-[600px] relative"
                    style={{
                        background: `linear-gradient(to right top, rgba(3, 10, 27, 1), rgba(3, 10, 27, 0.06)), url(${slides[current].poster_path || slides[current].backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 1,
                    }}
                >
                    <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-4 font-['Inter'] max-w-xl">
                        <div className="text-[#EBFAFF] font-bold text-[48px]">
                            {slides[current].original_title}
                        </div>
                        <div className="text-[#EBFAFF]">
                            <p className="text-white line-clamp-3">{slides[current].overview}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between w-1/4">
                            <img src="/rates.svg" alt="" />
                            <img className="pr-1" src="/Mask group.svg" alt="" />
                            <p className='text-white pr-2 text-[16px]'>8.1</p>
                            <img src="/image 41.svg" alt="" />
                        </div>
                        <div className="flex flex-row justify-start gap-4 text-white items-center">
                            <button className="rounded-full bg-[#228EE5] h-[40px] w-[128px] flex flex-row items-center justify-center gap-4 hover:bg-cyan-500">
                                <img src="/play.svg" alt="" />
                                Watch
                            </button>
                            <button className="rounded-full border border-[#228EE5] h-[40px] w-[128px] hover:bg-[#228EE5] flex flex-row items-center justify-center gap-4">
                                Play
                            </button>
                        </div>
                    </div>
                </div>
            )}


            <div className='flex flex-col gap-[24px] items-center justify-between p-6'>

                <div className='flex flex-row justify-between w-full px-[80px] mt-[21px] items-center font-["Inter"] text-white'>
                    <h1 className='text-[48px]'>Movies</h1>
                    <div className="flex flex-row justify-between gap-2">
                        <h1 className='text-[24px]'>See more</h1>
                        <img src="/Frame 153.svg" alt="" />
                    </div>

                </div>


                <div className='flex flex-row justify-between items-center gap-[50px]'>
                    {[...Array(5)].map((_, i) => (
                        <button
                            key={i}
                            className='rounded-full border border-solid bg-[#030A1B] border-[#EF76B9] w-[107px] h-[41px] hover:bg-[#EC5BAA] text-white'>
                            Thriller
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-5 justify-between gap-10">
                    {movies.map((movie, i) => (
                        <div
                            key={i}
                            className="group relative w-[208px] h-[296px] rounded-xl shadow-md overflow-hidden"
                            style={{
                                backgroundImage: `url(${movie.poster_path || movie.backdrop_path})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Top-left corner icon */}
                            <div className="absolute top-0 left-0 w-14 h-14 rounded-[12px] bg-[linear-gradient(227.66deg,rgba(0,0,0,0.52)_-15.08%,rgba(0,0,0,0.22)_90.95%)] backdrop-blur-sm z-10 flex justify-center items-center">
                                <img src="/Group 24.svg" alt="" />
                            </div>

                            {/* Hover details overlay */}
                            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white font-['Inter']">
                                <h3 className="text-lg font-bold mb-1">{movie.original_title}</h3>
                                <p className="text-sm mb-2 line-clamp-3">{movie.overview}</p>
                                <img src="/rates.svg" alt="rating" className="w-16" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Home;
