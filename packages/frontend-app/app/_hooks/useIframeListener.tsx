import { SetStateAction, useEffect, Dispatch } from "react";

type Message = {
  type: string;
  data?: boolean;
};

// A custom hook that sets up a message listener from an iframe
function useListenToIframe(setMessage: Dispatch<SetStateAction<Message>>) {
  useEffect(() => {
    function handleReceiveMessage(event: MessageEvent) {
      // TODO: Validate event.origin for security purposes
      // if (event.origin !== 'http://expected-origin.com') return;
      if (setMessage) {
        setMessage(event.data);
      }
    }

    // Add message event listener
    window.addEventListener("message", handleReceiveMessage);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("message", handleReceiveMessage);
    };
  }, [setMessage]);
}

export default useListenToIframe;
