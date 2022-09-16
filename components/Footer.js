import React from 'react'

const Footer = () => {

    return (
        <div>
            <footer className="px-4 py-8 bg-gray-800 text-white">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-purple-400">
                        <img src="https://img.icons8.com/office/80/000000/diabetes.png"/>
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <a rel="noopener noreferrer" className='hover:text-orange-400 font-bold duration-200' href="/terms">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" className='hover:text-orange-400 font-bold duration-200' href="/privacy">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="hidden md:flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a href='https://facebook.com' target="_blank"><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" /></a>
                        </li>
                        <li>
                            <a href='https://twitter.com' target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png" /></a>
                        </li>
                        <li>
                            <a href='https://instagram.com' target="_blank"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" /></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer