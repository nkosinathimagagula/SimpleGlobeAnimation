import { Dispatch, SetStateAction } from 'react'

const BasicContent = (props: {setButtonClick: Dispatch<SetStateAction<boolean>>}) => {
    const handleClick = () => {
        props.setButtonClick(true)
    }

    const handleRefresh = () => {
        location.reload()
    }

    return (
        <div className="flex-col absolute w-[25vw] m-10 px-4 backdrop-blur-sm text-cyan-50 border-2 border-solid border-slate-800 shadow-md shadow-slate-800 rounded-xl z-10">
            <h1 className='my-4 text-3xl font-extralight'>Earth Animation</h1>
            <p className='text-sm font-mono font-thin tracking-widest'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam necessitatibus 
                reiciendis soluta! Fugiat saepe totam atque nemo ipsa porro commodi corporis 
                iusto inventore! Quo id perspiciatis doloribus non eaque rem!
            </p>
            <div className='w-full my-4 flex flex-row justify-center gap-10'>
                <button 
                    className='py-1 px-4 w-24 border-solid border-slate-800 border-[1px] backdrop-blur-sm rounded-lg hover:shadow-sm hover:shadow-cyan-50 hover:backdrop-blur-2xl'
                    onClick={handleClick}
                >
                    Animate
                </button>
                <button 
                    className='py-1 px-4 w-24 border-solid border-slate-800 border-[1px] backdrop-blur-sm rounded-lg hover:shadow-sm hover:shadow-cyan-50 hover:backdrop-blur-2xl'
                    onClick={handleRefresh}
                >
                    Refresh
                </button>
            </div>
        </div>
    )
}

export default BasicContent
