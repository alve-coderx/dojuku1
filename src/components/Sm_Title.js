import React from 'react'

const Sm_Title = () => {
    return (
            <p className="text-[80px] text-[white] block lg:hidden md:hidden text-center font-apocalypse leading-[6rem] pt-10">
                {
                    ["D", "O", "J", "U", "K", "U"].map((word) => <span>{word} <br /></span>)
                }
            </p>
    )
}

export default Sm_Title