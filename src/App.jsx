import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [stack, setStack] = useState([]);

  
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load the technology list.");
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setLoadError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemoveFromStack = (techId) => {
    const removed = stack.find((item) => item.id === techId);
    setStack((prev) => prev.filter((item) => item.id !== techId));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <div className="min-h-screen bg-base font-body text-ink">
      <Navbar />
      <Hero />

      <main id="technologies" className="mx-auto max-w-7xl px-6 pb-24 pt-4 md:px-10">
        {loadError && (
          <div className="card-border rounded-2xl bg-surface p-8 text-center text-ink-muted">
            {loadError}
          </div>
        )}

        {!loadError && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <TechGrid
              technologies={technologies}
              isLoading={isLoading}
              stackIds={stack.map((item) => item.id)}
              onAdd={handleAddToStack}
            />
            <StackSidebar
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </main>

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2600}
        theme="dark"
        newestOnTop
      />
    </div>
  );
}

export default App;
