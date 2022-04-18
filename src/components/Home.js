import React from "react";

export default function Home(props) {
    return (<>
    <div className="mt-16">
        <div className="lg:flex lg:flex-row lg:grid lg:grid-cols-3 lg:mx-20 lg:gap-6">
        <div>
        <div className="flex justify-around">
        <div className="overflow-hidden shadow-md rounded-full m-10 max-w-xs">
            <img className="scale-160 object-contain" src="images/reed.png" />
        </div>
        </div>
        <div className="my-10">
            <h1 className="text-2xl text-slate-500 text-center">Dharit (Reed) Tantiviramanond</h1>
        </div>
        <div className="my-10">
            <h1 className="text-xl text-slate-500 text-center">Software Engineer</h1>
        </div>
        </div>
        <div className="flex px-6 items-center lg:col-span-2">
        <div>
        <p className="my-6 font-normal text-white">
        Hi, I'm Reed Tantiviramanond. I'm a software engineer as well as music producer and DJ. I'm currently looking for an engineering position at a top tech company, after having taken some time off to pursue music. I hold a Bachelor's degree in Computer Science from Princeton University.
        </p>
        <p className="my-6 font-normal text-white">
        My previous working experience includes Pure Storage, a flash storage company in Mountain View, California. There I was a member of the IO Path team, where I was responsible for optimizing the read and write speeds to our flash products. Prior to that I completed an internship at Tintri Inc, a hybrid flash startup, so my experience is mostly in systems engineering.
        </p>
        <p className="my-6 font-normal text-white">
        However, I think I'm ready to try a different area of programming - full-stack web development. I've been teaching myself React and node.js recently and I love it! I'm excited to start a career in this domain.  
        </p>
        </div>
        </div>
        </div>
    </div>
    </>);
}