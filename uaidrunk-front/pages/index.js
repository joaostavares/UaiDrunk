import Head from 'next/head'
import Buttons from "../components/buttons";
import {ChakraProvider} from "@chakra-ui/react";
export default function Home() {

    return (
        <div className='bg-gradient-to-bl from-black to-blue-500 h-screen overflow-auto'>
            <Head>
                <title>UaiDrunk</title>
                <meta name="description" content="UaiDrunk"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <ChakraProvider>
                    <Buttons/>
                </ChakraProvider>

            </main>
        </div>
        );
    }

