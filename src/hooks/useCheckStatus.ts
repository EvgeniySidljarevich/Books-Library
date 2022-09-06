import { useState } from "react";

export const useCheckStatus = () => {
    const [isOpen, setOpen] = useState(false);
    const [remainingDays, setRemainingDays] = useState(0);
    const [remainingHours, setRemainingHours] = useState(0);
    const checkStatus = (date: number) => {
        const remainingMs = date + 1036800000 - new Date().getTime();
        const remainingDays = Math.floor(
            (remainingMs / (1000 * 60 * 60 * 24)) % 30,
        );
        const remainingHours = Math.floor(
            (remainingMs / (1000 * 60 * 60)) % 24,
        );
        return () => {
            setOpen(true);
            setRemainingDays(remainingDays);
            setRemainingHours(remainingHours);
            setTimeout(() => {
                setOpen(false);
            }, 2000);
        };
    };

    return { isOpen, remainingDays, remainingHours, checkStatus };
};
