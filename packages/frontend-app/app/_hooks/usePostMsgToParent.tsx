import { useCallback } from "react";

type PostMessage = {
  type: string;
  data: string | null;
};

function usePostMsgToParent() {
  const sendMsgToParent = useCallback((message: PostMessage) => {
    if (window.parent !== window) {
      window.parent.postMessage(message, "*");
    }
  }, []);
  return sendMsgToParent;
}

export default usePostMsgToParent;
