import { useEffect, useState } from "react";

function useWideSize(size) {
  const [isSmaller, setIsSmaller] = useState(null);

  useEffect(() => {
    function resize(){
      setIsSmaller(window.innerWidth < size);
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [size]);

  return isSmaller ?? false;
}

export default useWideSize;