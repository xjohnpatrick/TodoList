import React from 'react'

import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

interface Props {
  children: React.ReactNode
  name: string
  setSelectedProject: (val: string | null) => void
}

const SettingsLink = ({ children, name, setSelectedProject }: Props) => {
  const handleClick = () => {
    setSelectedProject(null)
    setTimeout(() => {
      setSelectedProject(name)
    }, 250)
  }

  return (
    <a
      onClick={handleClick}
      className="flex text-lg font-poppins p-2 rounded cursor-pointer stroke-[0.75] hover:bg-blue text-blue hover:text-white place-items-center gap-3 transition-colors duration-100"
    >
      {children}
        <p className="flex items-center gap-4 text-inherit whitespace-nowrap tracking-wide overflow-hidden">
          {name}
          <FaChevronRight size={16}/>
        </p>
    </a>
  )
}

export default SettingsLink