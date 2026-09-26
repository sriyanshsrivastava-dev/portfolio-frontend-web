import Image from 'next/image';

export default function HeroVisual() {
    const imageUrl:string = "/image/profile2.png"
    return (
        <div className={"flex w-full md:w-1/2 justify-center items-center"}>
        <div className="relative h-[400px] w-[300px] md:h-[600px] md:w-[500px]">
            <div className={"absolute inset-0 rounded-4xl bg-linear-to-r from-blue-600 to-blue-400 p-[2] -rotate-12"}></div>
            <div className={"absolute inset-0 rounded-4xl border-2 border-white/80 rotate-12 skew-x-6"}></div>
            <div className={"absolute inset-0 rounded-4xl border-2 border-white/10 rotate-16 skew-x-6"}></div>
            <div className={"absolute inset-0 rounded-4xl bg-linear-to-l from-blue-800 to-blue-400 -skew-y-6"}></div>
            <div className={"absolute inset-0 rounded-4xl overflow-hidden"}>
                <Image src={`${imageUrl}`} alt="Sriyansh Srivastava" height={800} width={600} />
            </div>
            <div className={"hidden md:block w-10 h-12 absolute md:-right-24 md:bottom-36 bg-radial from-blue-300/60 from-50% to-transparent to-50% bg-[size:10px_10px] bg-repeat"}></div>
            <div className={"hidden md:block w-12 h-18 absolute -left-28 top-24 bg-radial from-blue-400/50 from-50% to-transparent to-50% bg-[size:12px_12px] bg-repeat"}></div>
        </div>
        </div>
    );
}