import {useState} from "react";

export const useShowMore = (data: [], prevValue:number, nextValue:number) => {
    const [counter, setCounter] = useState(prevValue);

    const slice = data?.slice(0, counter);
    const showMore = () => {
        setCounter(counter + nextValue)
    };

    return {slice, showMore}
};