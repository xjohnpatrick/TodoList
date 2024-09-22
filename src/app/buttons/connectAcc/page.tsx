import React from 'react'

import { Button } from '@nextui-org/button'
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

function ConnectAccount() {
  return (
    <div className="flex w-full h-[200px] rounded-lg flex-col mt-4 items-center justify-center">
              
                <Button
                  size='lg'
                  className='flex w-[317px] rounded-md p-3 text-white gap-2 bg-lightPurple'><FaGoogle size={24} style={{ color: '#f2f7fb' }} />Connect Google Account
                </Button>
                

                <Button
                size='lg' 
                className='flex w-[317px] rounded-md mt-5 p-3 text-white gap-2 bg-lightPurple'><FaFacebook size={24} style={{ color: '#f2f7fb' }} />Connect Facebook Account
                </Button>
            </div>
  )
}

export default ConnectAccount