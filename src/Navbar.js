import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
    console.log(linksHeight)
  }, [show])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Logo' />
          <button
            className='nav-toggle'
            onClick={() => {
              setShow(!show)
            }}
          >
            <FaBars />
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className={`${
            show ? 'links-container show-container' : 'links-container'
          }`}
        >
          <ul className='links' ref={linksRef}>
            {links.map((item) => {
              const { id, url, text } = item
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((media) => {
            const { id, url, icon } = media
            return (
              <li key={id}>
                <a href={url} target='blank'>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar