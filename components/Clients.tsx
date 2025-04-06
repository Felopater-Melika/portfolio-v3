"use client";

import React from "react";

import {companies, testimonials} from "@/data";
import {InfiniteMovingCards} from "./ui/InfiniteCards";
import {HyperText} from "@/components/magicui/hyper-text";
import {FlipText} from "@/components/magicui/flip-text";
import {AuroraText} from "@/components/magicui/aurora-text";

const Clients = () => {
    return (
        <section id="testimonials" className="py-20">
            {/*<h1 className="heading">*/}
            {/*  Kind words from*/}
            {/*  <span className="text-purple"> satisfied clients</span>*/}
            {/*</h1>*/}

            {/*<div className="flex flex-col items-center max-lg:mt-10">*/}
            {/*  <div*/}
            {/*    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design*/}
            {/*    className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"*/}
            {/*  >*/}
            {/*    <InfiniteMovingCards*/}
            {/*      items={testimonials}*/}
            {/*      direction="right"*/}
            {/*      speed="slow"*/}
            {/*    />*/}
            {/*  </div>*/}
            <div className="flex flex-wrap items-center justify-center mx-12">
                {/*<FlipText*/}
                {/*    className="text-4xl font-bold -tracking-widest text-black dark:text-white md:leading-[5rem]">*/}
                {/*    Companies I've worked for</FlipText>*/}

                <h1 className="heading">
                    Companies <span className="text-purple">I've worked for</span>
                </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-8">

                {companies.map((company) => (
                    <React.Fragment key={company.id}>
                        <div className="flex md:max-w-60 max-w-32 gap-2">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}

                            {/*<img*/}
                            {/*    src={company.img}*/}
                            {/*    alt={company.name}*/}
                            {/*    className="md:w-10 w-5"*/}
                            {/*/>*/}
                            <img
                                src={company.nameImg}
                                alt={company.name}
                                width={company.id === 4 || company.id === 5 ? 100 : 150}
                                className="md:w-40 w-20"
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
            {/*</div>*/}
        </section>
    );
};

export default Clients;
