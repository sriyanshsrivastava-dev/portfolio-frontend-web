import Image from 'next/image';

export default function ProfileCard() {
    return (
        <div className="relative h-[400px] w-[300px] sm:h-[600px] sm:w-[500px]">
            <div className={"absolute inset-0 rounded-4xl bg-linear-to-r from-blue-600 to-blue-400 p-[2] -rotate-12"}></div>
            <div className={"absolute inset-0 rounded-4xl bg-linear-to-l from-blue-800 to-blue-400 -skew-y-6"}></div>
            <div className={"absolute inset-0 rounded-4xl overflow-hidden"}>
                <Image src={"/image/profile2.png"} alt="Sriyansh Srivastava" height={800} width={600} />
            </div>
            <div className={"hidden sm:block w-8 h-12 absolute -right-18 bottom-12 bg-radial from-blue-300/60 from-50% to-transparent to-50% bg-[size:10px_10px] bg-repeat"}></div>
            <div className={"hidden sm:block w-12 h-18 absolute -left-22 top-24 bg-radial from-blue-400/50 from-50% to-transparent to-50% bg-[size:12px_12px] bg-repeat"}></div>
        </div>
    );
}