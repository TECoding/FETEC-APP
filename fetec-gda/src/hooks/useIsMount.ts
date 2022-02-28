import { useRef, useEffect } from "react";

// Custom hook to detect if we are on the first render (return true)
// or not (return false)
export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};
