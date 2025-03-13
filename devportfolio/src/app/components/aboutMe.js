'use client'
import React from 'react';
import {
    LinkedinIcon,
    GithubIcon
} from 'next-share';
export default function About() {
    return (
        <>
            <h1 className="text-4xl font-bold text-gray-800 nameTitle">Nick Richards</h1>
            <h2>Junior Web Developer</h2>
            <p className="subText">I build full stack accessable projects on the web</p>

            {/* socials */}
            <ul className='socials'>
                <li><GithubIcon url={'https://github.com/Nr1cha'}size={32} round/></li>
                <li><LinkedinIcon url={'https://www.linkedin.com/in/nickr1cha/'} size={32} round /></li>
            </ul>

        </>

    )
}