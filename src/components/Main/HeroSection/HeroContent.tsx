import {ArrowDownRight} from "lucide-react";

export default function HeroContent() {
    const titleClass:string= "text-xl font-extralight text-start pr-4 text-blue-200"
    const titleMobileClass:string = "flex-1 text-sm font-semibold text-center text-blue-200"
    return (
        <div className={'flex flex-col gap-4 md:gap-8 items-center justify-center md:items-start w-full md:w-1/2'}>
            <div className={"px-6 py-2 bg-linear-to-r from-green-600/30 from-10% to-transparent rounded-full flex gap-4 text-blue-200 backdrop-blur-xl justify-center items-center border-white/40 border-2 "}>
                <div className={'size-4 bg-green-600 rounded-full'}></div>
                <p className={"text-md md:text-2xl font-bold text-white"}>Hello, I am</p>
            </div>
            <div className={"flex flex-col gap-2 justify-center items-center md:items-start w-full"}>
                <span className={'text-6xl md:text-8xl font-extrabold text-transparent bg-linear-to-r from-blue-200 to-blue-400 bg-clip-text pb-3'}>Sriyansh</span>
                <span className={'text-6xl md:text-8xl font-extrabold text-transparent bg-linear-to-r from-blue-600 to-blue-300 bg-clip-text'}>Srivastava</span>
            </div>
            <div className={'hidden md:flex gap-4 divide-x-4 divide-gray-200 justify-start items-center w-full'}>
                <span className={titleClass}>Data Science Student </span>
                <span className={titleClass}>Backend Developer </span>
                <span className={titleClass}>Lifelong Learner</span>
            </div>
            <div className={'flex md:hidden gap-2 divide-x-2 divide-gray-200 justify-between items-center w-full'}>
                <span className={titleMobileClass}>Data Science</span>
                <span className={titleMobileClass}>Developer </span>
                <span className={titleMobileClass}>lifelong Learner</span>
            </div>
            <div className="text-center md:text-left w-full">
                <p className={"font-light text-md md:text-2xl "}>I build meaningful digital experiences, solve real-word problems with technology and explore the world of data, code and creativity.</p>
            </div>

            <div className={"flex gap-4 mt-4"}>
                <button className={"flex gap-2 justify-center items-center bg-blue-600 px-3 py-2 md:px-5 md:py-4 rounded-full font-bold min-w-36 w-36 md:w-72 text-xl md:text-2xl"}>
                    <ArrowDownRight color="#ffffff" className={"-rotate-90"} />
                    <span>Projects</span>

                </button>
                <button className={"bg-blue-600 px-3 py-2 rounded-full font-bold min-w-36 w-36 md:w-72 text-xl md:text-2xl"}>About</button>
            </div>
        </div>

    )
}