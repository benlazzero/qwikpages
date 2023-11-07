import { useCallback } from "react";

type PostMessage = {
  type: string;
  data?: string | boolean | null;
};

function usePostMsgToChild(iframeRef: any) {
  const sendMsgToChild = useCallback(
    (message: PostMessage) => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(message, "*");
      }
    },
    [iframeRef]
  );

  return sendMsgToChild;
}

export default usePostMsgToChild;
