import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

interface ConfettiAnimationI {
    renderConfetti: boolean;
    releaseTheConfetti: () => void;
    confettiPieces: number;
    setConfettiPieces: Dispatch<SetStateAction<number>>;
}

export const ConfettiAnimationContext = createContext<ConfettiAnimationI>({
    renderConfetti: false,
    releaseTheConfetti: () => { },
    confettiPieces: 300,
    setConfettiPieces: () => { },
});

export const ConfettiAnimationContextProvider = ({
    children,
}: {
    children: ReactNode | ReactNode[];
}) => {
    const [renderConfetti, setRenderConfetti] = useState(false);
    const [confettiPieces, setConfettiPieces] = useState(150);

    const releaseTheConfetti = () => {
        setConfettiPieces(300);
        setRenderConfetti(true);

        setTimeout(() => {
            setConfettiPieces(0);
        }, 3000);

        setTimeout(() => {
            setRenderConfetti(false);
        }, 7000);
    };

    return (
        <ConfettiAnimationContext.Provider
            value={{
                renderConfetti,
                releaseTheConfetti,
                confettiPieces,
                setConfettiPieces,
            }}
        >
            {children}
        </ConfettiAnimationContext.Provider>
    );
};