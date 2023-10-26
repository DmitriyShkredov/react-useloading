import { useEffect } from "react";

export const useLoading = (state) => {
  useEffect(() => {
    if (state) document.body.classList.add("loading");
    else {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    }
  }, [state]);
};
