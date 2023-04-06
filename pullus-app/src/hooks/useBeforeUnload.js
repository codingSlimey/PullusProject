import { useEffect } from "react";

function useBeforeUnload() {
  useEffect(() => {
    const message = 'Are you sure you want to leave? Your changes may not be saved.'
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
  }, []);
}

export default useBeforeUnload;
