import { useEffect, useCallback } from "react";

export const usePreventReload = (isPrenvent) => {

    const preventReload = useCallback(event => {
        event.preventDefault();
        event.returnValue = "";
    }, []);

    useEffect(() => {
        if (isPrenvent) {
            window.addEventListener("beforeunload", preventReload);
        }

        return () => {
            if (isPrenvent) {
                window.removeEventListener("beforeunload", preventReload);
            }
        };
    }, [isPrenvent, preventReload]);
};