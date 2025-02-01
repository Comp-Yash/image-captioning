"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  // Removed useState hooks for isPlatformOpen and isIntegrationOpen

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-purple-500">AI</span>Caption
          </Link>
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center hover:text-purple-400 transition-colors">
              Platform <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  role="menuitem"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  role="menuitem"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  role="menuitem"
                >
                  Option 3
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center hover:text-purple-400 transition-colors">
              Integration <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  role="menuitem"
                >
                  API
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  role="menuitem"
                >
                  Webhooks
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  role="menuitem"
                >
                  SDKs
                </a>
              </div>
            </div>
          </div>
        </div>
        <Button className="rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
          <User className="mr-2 h-4 w-4" /> Account
        </Button>
      </div>
    </nav>
  )
}

export default Navbar

