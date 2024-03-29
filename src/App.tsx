import "./App.css";
import TagBrowserPage from "./tag-page/TagBrowserPage";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TagBrowserPage />
    </ThemeProvider>
  );
}

export default App;
