import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("cookies_accepted") === "true") {
      setShowCookieBanner(false);
    }
  }, []);

  return (
    <div
      className={`flex items-center justify-center bg-zinc-500 z-50 fixed bottom-0 left-0 right-0 p-4 ${!showCookieBanner && "hidden"}`}
    >
      <p className="text-sm">
        We use cookies to ensure you get the best experience on our website. By accepting, you agree those cookies and
        technologies may be used for this purpose.
      </p>

      <button
        className="ml-4 bg-zinc-700 text-white px-4 py-2 rounded"
        onClick={() => {
          localStorage.setItem("cookies_accepted", "true");
          setShowCookieBanner(false);
        }}
      >
        Accept
      </button>
    </div>
  );
}
