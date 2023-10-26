import { useEffect } from "react";

export const useLoading = (state) => {
  useEffect(() => {
    console.log("--");
    if (state) document.body.classList.add("loading");
    else {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    }
  }, [state]);
};
