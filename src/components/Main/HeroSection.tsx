import ProfileCard from "@/components/Main/ProfileCard";

const HeroSection = () => {
    const titleClass:string= "font-sm font-semibold text-start"

    return (
        <section className="min-h-screen p-4 sm:px-24 pt-24 w-full flex flex-col">
            <div className="flex-1 w-full p-8 pt-24 sm:pt-0 flex flex-col sm:flex-row gap-24 justify-start sm:justify-around items-center">
                <div className={'flex flex-col gap-4 sm:gap-6 items-center justify-center sm:items-start'}>
                    <div className={"px-6 py-2 bg-linear-to-r from-green-600/30 from-10% to-transparent rounded-full flex gap-4 text-blue-200 backdrop-blur-xl justify-center items-center border-white/40 border-2 "}>
                        <div className={'size-4 bg-green-600 rounded-full'}></div>
                        <p className={"text-md font-bold text-white"}>Hello, I am</p>
                    </div>
                    <p className={'text-6xl sm:text-[72px] font-extrabold text-blue-300'}>Sriyansh</p>
                    <p className={'text-6xl sm:text-[72px] font-extrabold'}>Srivastava</p>
                    <div className={'hidden sm:flex gap-4 divide-x-4 divide-gray-200 justify-start items-center w-full'}>
                        <span className={titleClass}>Data Science Student </span>
                        <span className={titleClass}>Backend Developer </span>
                        <span className={titleClass}>Lifelong Learner</span>
                    </div>
                    <div className={'flex sm:hidden gap-2 divide-x-2 divide-gray-200 justify-between items-center w-full'}>
                        <span className={"flex-1 font-sm font-semibold text-center"}>Data Science</span>
                        <span className={"flex-1 font-sm font-semibold text-center"}>Developer </span>
                        <span className={"flex-1 font-sm font-semibold text-center"}>lifelong Learner</span>
                    </div>
                    <div className="text-center sm:text-left w-full">
                        <p className={"font-light text-md "}>I build meaningful digital experiences, solve real-word problems with technology and explore the world of data, code and creativity.</p>
                    </div>

                    <div className={"flex gap-4"}>
                        <button className={"bg-blue-600 px-3 py-2 rounded-full font-bold min-w-36 w-36"}>Projects</button>
                        <button className={"bg-blue-600 px-3 py-2 rounded-full font-bold min-w-36 w-36"}>About</button>
                    </div>
                </div>
                <div>
                    <ProfileCard/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection