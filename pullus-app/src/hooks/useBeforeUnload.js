import { useEffect } from "react";

function useBeforeUnload(message) {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault(); // Cancel the event
      e.returnValue = message; // Set the message for some browsers (like IE)
      return message; // Return the message for other browsers
    };

    // Attach the event listener to the window
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Return a function to cleanup the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [message]);
}

export default useBeforeUnload;
