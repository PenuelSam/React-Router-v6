import React from 'react'
import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import {MdEmail} from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './Contact.css'
const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente est temporibus? Odit, corporis earum!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:penuelsamuel54@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail /></a>
            <a href="https://m.me/" target="_blank" rel='noreferrer noopener'><BsMessenger /></a>
            <a href="https://wa.me/+2349057134651" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
