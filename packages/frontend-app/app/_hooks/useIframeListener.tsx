import { SetStateAction, useEffect, Dispatch } from "react";

type Message = {
  type: string;
  data?: boolean;
};

function useListenToIframe(setMessage: Dispatch<SetStateAction<Message>>) {
  useEffect(() => {
    function handleReceiveMessage(event: MessageEvent) {
      if (setMessage) {
        setMessage(event.data);
      }
    }
    window.addEventListener("message", handleReceiveMessage);
    return () => {
      window.removeEventListener("message", handleReceiveMessage);
    };
  }, [setMessage]);
}

export default useListenToIframe;
