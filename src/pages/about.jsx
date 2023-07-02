import Animatedtext from "@/Components/AnimatedText/AnimatedText";
import Layout from "@/Components/Layout/Layout";
//import { Head } from "next/Head";
import Head from 'next/head';
import React from "react";

const about = () => {
    return(
        <>
        <Head>
            <title>Osama Namur / About</title>
            <meta name="description" content="osama namur about page"></meta>
        </Head>
        <main>
            <Layout className="pt-16">
                <Animatedtext text="Passion Fuels Purpose!" />
                <section className="grid w-full grid-cols-8 gap-16">
                    <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                    </div>

                </section>

            </Layout>
        </main>
        </>
    )
}

export default about;