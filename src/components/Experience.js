import React from "react"

export default function Experience() {
    return (<>
    <div className="flex justify-start mt-16 ml-32">
    <h1 className="text-2xl text-slate-500 text-center mt-20">
    Experience
    </h1>
    </div>
    <div className="border-solid border-2 border-zinc-900 mx-48 mt-20 p-6">
    <h1 className="font-lg text-slate-500">LOCAL DIALECT</h1>
    <h2>Queens, NY</h2> 
    <h2>Electronic Music Producer & DJ, 2017 – Present</h2> 
    <ul>
        <li>
        Self-taught audio production, synthesis, and recording using Ableton as well as hardware equipment.
        </li>
        <li>
        Released over 40 tracks on various labels such as Zerothree, Realm (Gorgon City), Purified (Nora En Pure), Ein2 (Einmusik), with an upcoming release on Stil Vor Talent.
        </li>
        <li>
        Performed numerous DJ sets at venues such as The Brooklyn Mirage, Shrine LA, and Hard Rock Hotel San Diego.
        </li>
        <li>
        Maintains a studio equipped with 4 analog synthesizers, preamps, pedals, and more.
        </li>
    </ul>
    </div>
    <div className="border-solid border-2 border-zinc-900 mx-48 mt-20 p-6">
    <h1 className="font-lg text-slate-500">PURE STORAGE</h1>
    <h2>Mountain View, CA</h2> 
    <ul>
        <li>
        Software Engineer (Full Time), August 2015 – Dec 2016
        </li>
        <li>
        Software Engineer (Contractor), Jan 2017 – May 2019
        </li>
        <li>
        As a member of the IO Path team, worked on increasing the write rate to flash storage modules inside Pure Storage's FlashArray product by optimizing the write path of Purity, Pure Storage's C++ software component.
        </li>
        <li>
        Participated in data corruption investigations that occurred on internal testbeds to catch critical bugs before they manifested on customer arrays.
        </li>
        <li>
        Tested a new Quality-of-Service feature that ensured large-scale write operations across an unprecedented size of 5000 volumes wrote to each volume evenly and avoided write-starvations and timeouts.
        </li>
        As a contractor, tracked and analyzed performance regressions across every type of FlashArray product. Built infrastructure to automate the process of pinpointing the cause of a regression.
        </ul>
    </div>
    <div className="border-solid border-2 border-zinc-900 mx-48 mt-20 p-6">
        TINTRI mountain view, ca
        R&D Intern (Filesystem Team), Summer 2014
        Optimized the Tintri filesystem directory table recovery by using persistent unordered maps to allow instantaneous and on-demand file operations, thereby reducing the filesystem boot times.
    </div>
    </>);
}