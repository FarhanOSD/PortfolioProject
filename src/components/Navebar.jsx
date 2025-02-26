import React from 'react'
import { CiFacebook } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubAlt } from 'react-icons/fa';

import farhan from "../assets/pig.jpg"
function Navebar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 gap-5 items-center text-center ">
        <img
          src={farhan}
          alt="Farhan Ahmed"
          width={100}
          className="rounded-full mx-2"
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4">
        <a href="https://x.com/Tamkin325819">
        <FaSquareXTwitter size={24} />
        </a>

        <a href="https://www.linkedin.com/in/farhan-ahmed10">
          <FaLinkedin size={24} />
        </a>

        <a href="https://github.com/FarhanOSD">
          <FaGithubAlt size={24} />
        </a>
      </div>
    </nav>
  );
}

export default Navebar