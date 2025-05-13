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
            <h2>Web Developer</h2>
            <p className="subText">I build full stack accessible projects on the web</p>

            {/* socials */}
            <ul className='socials'>
                <li>
                    <a href='https://github.com/Nr1cha' target='_blank' rel='noopener noreferrer'>
                        <GithubIcon size={32} round />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/nickr1cha/' target='_blank' rel='noopener noreferrer'>
                        <LinkedinIcon size={32} round />
                    </a>
                </li>
            </ul>

        </>

    )
}