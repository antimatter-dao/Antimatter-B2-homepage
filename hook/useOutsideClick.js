import { useEffect } from "react";

function useOutsideClick(ref, handler, secondRef) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref?.current || ref?.current?.contains(event.target) || secondRef?.current?.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
