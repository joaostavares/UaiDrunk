import {motion} from "framer-motion";
import {useState} from "react";

import {
    AlertDialog,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, useDisclosure,
} from '@chakra-ui/react'

function Buttons() {
    const [disabled, setDisabled] = useState(false);
    const variants = {
        open: { opacity: 1 },
        closed: { opacity: 0.3 },
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = (valvula) => {
        if(!disabled) {
            paymentMock();
            disable();
            apiCall(valvula);
        }
    }
    const paymentMock = () => {
        setDisabled(true);
        onOpen();
        setTimeout(() => {
            onClose();
        }, 4000);
    }

    const disable = () => {
        setTimeout(() => {
            setDisabled(false);
        }, 12000);
    }

    const apiCall = (valvula) => {
        setTimeout(() => {
            fetch("/web", {
                method: "POST",
                body: JSON.stringify({
                    valvula,
                }),
                headers: {
                    "content-type": "application/json",
                },
            }).catch((e) => console.log(e));
        }, 4000);
    }

    return (
        <div>
            <AlertDialog
                motionPreset='slideInBottom'
                onClose={onClose}
                isOpen={isOpen}
                isCentered = {true}
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader fontSize="3rem">Aguardando Pagamento...</AlertDialogHeader>
                    <AlertDialogCloseButton />
                </AlertDialogContent>
            </AlertDialog>
        <div className='flex justify-center items-center overflow-y-hidden'>
            <ul className="h-5/6 overflow-y-hidden">
                <motion.li initial="hidden" animate="visible" onClick={() => handleClick("1")} variants={{
                    hidden: {scale: .8, opacity: 0}, visible: {scale: 1, opacity: 1, transition: {delay: 0.3}}}}>
                    <motion.button whileHover={{scale: 1.1, transition: {duration: .2}}} disabled={disabled}
                                   animate={disabled ? "closed" : "open"}
                                   variants={variants}
                                   className='w-[360px] sm:w-[960px] text-5xl font-sans btno'>Orange Vodka
                    </motion.button>
                </motion.li>
                <motion.li initial="hidden" animate="visible" onClick={() => handleClick("2")} variants={{
                    hidden: {scale: .8, opacity: 0}, visible: {scale: 1, opacity: 1, transition: {delay: 0.4}}}}>
                    <motion.button whileHover={{scale: 1.1, transition: {duration: .2}}} disabled={disabled}
                                   animate={disabled ? "closed" : "open"}
                                   variants={variants}
                                   className='w-[360px] sm:w-[960px] text-5xl font-sans btng'>Green Whiskey
                    </motion.button>
                </motion.li>
                <motion.li initial="hidden" animate="visible" onClick={() => handleClick("3")} variants={{
                        hidden: {scale: .8, opacity: 0}, visible: { scale: 1, opacity: 1, transition: {delay: 0.5}}}}>
                    <motion.button whileHover={{scale: 1.1, transition: {duration: .2}}} disabled={disabled}
                                   animate={disabled ? "closed" : "open"}
                                   variants={variants}
                                   className='w-[360px] sm:w-[960px] text-5xl font-sans btnb'>Blue Gin
                    </motion.button>
                </motion.li>
                <motion.li initial="hidden" animate="visible" onClick={() => handleClick("4")} variants={{
                    hidden: {scale: .8, opacity: 0}, visible: { scale: 1, opacity: 1, transition: {delay: 0.6}}}}>
                    <motion.button whileHover={{scale: 1.1, transition: {duration: .2}}}  disabled={disabled}
                                   animate={disabled ? "closed" : "open"}
                                   variants={variants}
                                   className='w-[360px] sm:w-[960px] text-5xl font-sans btnr'>Crazy Vodka
                    </motion.button>
                </motion.li>
                <motion.li initial="hidden" animate="visible" onClick={() => handleClick("5")} variants={{
                    hidden: {scale: .8, opacity: 0}, visible: { scale: 1, opacity: 1, transition: {delay: 0.6}}}}>
                    <motion.button whileHover={{scale: 1.1, transition: {duration: .2}}}  disabled={disabled}
                                   animate={disabled ? "closed" : "open"}
                                   variants={variants}
                                   className='w-[360px] sm:w-[960px] text-5xl font-sans btnp'>Crazy Gin
                    </motion.button>
                </motion.li>
                <motion.li initial="hidden" animate="visible" onClick={() => handleClick("6")} variants={{
                    hidden: {scale: .8, opacity: 0}, visible: { scale: 1, opacity: 1, transition: {delay: 0.6}}}}>
                    <motion.button whileHover={{scale: 1.1, transition: {duration: .2}}}  disabled={disabled}
                                   animate={disabled ? "closed" : "open"}
                                   variants={variants}
                                   className='w-[360px] sm:w-[960px] text-5xl font-sans btny'>Crazy Whiskey
                    </motion.button>
                </motion.li>
            </ul>
        </div>
        </div>
    )
}
export default Buttons

