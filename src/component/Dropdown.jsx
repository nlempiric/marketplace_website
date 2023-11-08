import React from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = () => {



  return (
  
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center w-full justify-center rounded-md text-[#505072] text-lg gap-1 hover:text-[#050515]">
          Explore
          <PiCaretDownBold/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -left-12  z-50 mt-2 w-56 origin-top-right rounded-md bg-gray-200 shadow-lg focus:outline-none">
          <div>
            <Menu.Item >
              {({ active }) => (
                <Link
                  to="/MintNftPage"
                  className={classNames(
                    active && 'bg-[#050515] text-white' ,
                    'block px-4 py-3 text-base rounded-t-md'
                  )}
                >
                  Mint Nft
                </Link>
              )}
            </Menu.Item>
            {/* <Menu.Item >
              {({ active }) => (
                <Link
                to="/TransferNftPage"
                  className={classNames(
                    active && 'bg-[#050515] text-white' ,
                    'block px-4 py-3 text-base'
                  )}
                >
                  Transfer Nft
                </Link>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <Link
                to="/MyCollection"
                  className={classNames(
                    active && 'bg-[#050515] text-white' ,
                    'block px-4 py-3 text-base rounded-b-md'
                  )}
                >
                  My Collection
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
