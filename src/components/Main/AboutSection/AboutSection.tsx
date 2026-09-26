export default function AboutSection() {
    const profileData = {
            "about":"I'm Sriyansh, a software developer and data science student interested in building useful software and understanding the system behind it."
    }

    return (
        <section id="AboutSection" className={"p-4 md:px-24 text-white h-screen flex flex-col gap-4"}>
            <div className={"w-full text-center text-xl sm:text-3xl font-bold mt-24 mb-16"}>About Me</div>
            <div className={"flex flex-col gap-2 bg-black/10 py-8 px-4 md:px-12 rounded-xl "}>
                <p className={"w-full text-2xl font-bold text-center md:text-start text-blue-300"}>I build to Understand</p>
                <p className={"w-full text-center md:text-start text-xl font-light"}>{profileData.about}</p>
            </div>
            <div className={"flex flex-col gap-2 bg-black/10 py-8 px-4 md:px-12 rounded-xl "}>
                <p className={"w-full text-2xl font-bold text-center md:text-start text-blue-300"}>I build to Understand</p>
                <p className={"w-full text-center md:text-start text-xl font-light"}>{profileData.about}</p>
            </div>
        </section>
    )
}