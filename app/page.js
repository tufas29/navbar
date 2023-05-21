"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import { GrClose } from "react-icons/GR"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-300 py-2">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </Link>
          {open ? (
            <GrClose
              className="sm:hidden block h-6 w-6 cursor-pointer"
              onClick={() => setOpen((value) => !value)}
            />
          ) : (
            <FiMenu
              className="sm:hidden block h-6 w-6 cursor-pointer"
              onClick={() => setOpen((value) => !value)}
            />
          )}
          <nav
            className={`${
              open ? "block" : "hidden"
            } sm:flex sm:items-center sm:w-auto w-full`}
          >
            <ul className="text-base text-gray-600 sm:flex sm:justify-between">
              <li className="sm:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="sm:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/about">About</Link>
              </li>
              <li className="sm:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/register">Register</Link>
              </li>
              <li className="py-2 px-4 sm:px-6 sm:py-2 bg-blue-700 text-white rounded-xl font-semibold">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav
