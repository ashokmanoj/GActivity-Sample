import { createContext, useContext, useState, useEffect } from "react";

const PageTitleContext = createContext();

export function PageTitleProvider({ children }) {
  // Load saved title or fallback to Dashboard
  const [pageTitle, setPageTitle] = useState(
    localStorage.getItem("pageTitle") || "Dashboard"
  );

  // When title changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem("pageTitle", pageTitle);
  }, [pageTitle]);

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}

export function usePageTitle() {
  return useContext(PageTitleContext);
}
