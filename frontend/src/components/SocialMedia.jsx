import React from 'react'
import {BsTwitterX, BsInstagram, } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { MdEmail, MdPhone } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="mailto:neela05.dev@gmail.com">
            <MdEmail />
          </a>
        </div>
        <div>
          <a href="tel:+6593506338">
            <MdPhone />
          </a>
        </div>
        <div>
          <a href="#">
            <BsTwitterX />
          </a>
        </div>
        <div>
          <a href="https://github.com/neela-sankar" target='_blank'>
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="#">
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia