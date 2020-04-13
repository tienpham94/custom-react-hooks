import { useState, useEffect } from "react";

let cached = [];

export const useScript = src => {
  const [status, setStatus] = useState({
    loaded: false,
    error: false
  });

  useEffect(() => {
    if (cached.includes(src)) {
      setStatus({
        error: false,
        loaded: true
      });
    } else {
      cached.push(src);

      const script = document.createElement("script");
      script.src = src;
      script.async = true;

      const onLoad = () => {
        setStatus({
          error: false,
          loaded: true
        });
      };

      const onError = () => {
        const i = cached.indexOf(src);
        if (i >= 0) {
          cached.splice(i, 1);
        }
        script.remove();

        setStatus({
          error: true,
          loaded: true
        });
      };

      script.addEventListener("load", onLoad);
      script.addEventListener("error", onError);

      document.body.appendChild(script);

      return () => {
        script.removeEventListener("load", onLoad);
        script.removeEventListener("error", onError);
      };
    }
  }, [src]);

  return [status.loaded, status.error];
};
