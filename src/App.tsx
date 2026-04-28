import { StatusBanner } from "./components/StatusBanner";
import { Header } from "./components/Header";
import { PRISMAFlow } from "./components/PRISMAFlow";
import { DataExtractionTable } from "./components/DataExtractionTable";
import { SearchLog } from "./components/SearchLog";
import { UpdateHistory } from "./components/UpdateHistory";
import { Methodology } from "./components/Methodology";
import { Resources } from "./components/Resources";
import { TeamSection } from "./components/TeamSection";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Header />
      <StatusBanner />
      <main>
        <PRISMAFlow />
        <DataExtractionTable />
        <SearchLog />
        <Methodology />
        <UpdateHistory />
        <Resources />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
