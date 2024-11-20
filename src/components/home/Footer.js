import React from "react";
import GithubLogo from "../../assets/img/home/github.png"
const Footer = () => {
    return (
        <footer className="w-full h-20 px-10 md:px-20">
            <div className="flex flex-col md:flex-row md:justify-between gap-y-3 md:gap-y-0 py-10">
                <div className="">
                    <h1 className="fontNavbar text-3xl">Darwan.</h1>
                    <h1 className="fontDeskripsi">All Right Reversed 2024.</h1>
                </div>

                <div className="">
                <div className='flex mt-2'>
                    <img src={GithubLogo} className='w-4 md:w-5' alt='Github Logo'></img>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;