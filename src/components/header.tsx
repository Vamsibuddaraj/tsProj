import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useTheme } from '@/context/theme-provider'
import { Moon, Sun } from 'lucide-react'


const Header = () => {
   const {theme,setTheme}= useTheme()
   const isDark = theme==="dark"
  return (
    <header className='sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30 py-2'>
            <div className='container mx-auto flex h-16 items-center justify-between px-4'>
                <Link to={"/"}>
                    <img className='h-14' src={theme==="dark"?"/logo.png":"/weather.png"} alt='weather logo' />
                </Link>
                <div>
                    {/* {search} */}
                    <div className='cursor-pointer py-4' onClick={()=>setTheme(isDark?"light":"dark")} >
                        {isDark?(<Sun className='h-6 w-6 transition duration-500 rotate-0 hover:rotate-45'/>):(<Moon className='h-6 w-6 transition duration-500 rotate-0 hover:rotate-45'/>)}
                    </div>
                </div>
            </div>
    </header>
  )
}

export default Header