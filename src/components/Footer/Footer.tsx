import {Copyright} from "lucide-react";
import Link from "next/link";
import LinkedIn from "@/components/Icons/LinkedIn";
import Github from "@/components/Icons/Github";
import Email from "@/components/Icons/Email";

export default function Footer(){
    return (
       <footer className={'w-full flex flex-col bg-slate-100'}>
       <div className="w-full flex flex-col-reverse sm:flex-row text-center sm:text-left text-slate-950 px-10">
           <div className={'flex flex-col flex-1 p-4 gap-4'}>
               <div className="text-xl font-bold">Explore</div>
               <ul className="flex flex-col gap-1 text-md">
                   <li className="inline-block ">
                       <Link href="/">Home</Link>
                   </li>
                   <li>
                       <Link href="/">About</Link>
                   </li>
                   <li>
                       <Link href="/">Project</Link>
                   </li>
                   <li>
                       <Link href="/">Contact</Link>
                   </li>
               </ul>
           </div>
           <div className={'flex flex-col flex-1 p-4 gap-4'}>
               <div className="text-xl font-bold">Connect</div>
               <div className="flex flex-col gap-1 items-center sm:items-start">
                   <div className="flex gap-2 text-md items-center">
                       <span>
                            <LinkedIn/>
                       </span>
                       <span>
                           <Link href="https://www.linkedin.com/in/sriyansh-srivastava/"
                                 target="_blank"
                                 rel="noopener noreferrer">
                               LinkedIn
                           </Link>
                       </span>
                   </div>
                   <div className="flex gap-2 text-md items-center">
                       <span>
                            <Github/>
                       </span>
                       <span>
                           <Link href="https://github.com/sriyanshsrivastava-dev"
                                 target="_blank"
                                 rel="noopener noreferrer">
                               Github
                           </Link>
                       </span>
                   </div>
                   <div className="flex gap-2 text-md items-center">
                       <span>
                            <Email/>
                       </span>
                       <span>
                           <Link href="mailto:placeholder@gmail.com">
                               Send Email
                           </Link>
                       </span>
                   </div>
               </div>


           </div>
           <div className={'flex flex-col flex-1 p-4 gap-4'}>
               <span className="text-xl font-bold">Sriyansh Srivastava</span>
               <p className={'text-md'}>Building software, learning continuously,<br/>
                   and documenting the journey.</p>

           </div>

       </div>
       <div className={'w-full h-16 bg-black flex items-center justify-center gap-3'}>
           <span><Copyright /></span><span>2026</span><span>Sriyansh Srivastava</span>

       </div>

       </footer>
    )
}
