import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Header = () => {
    return (
        <div className='flex justify-between p-2 bg-white ml-20'>
            <h2>Welcome Parag,</h2>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>PG</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Header