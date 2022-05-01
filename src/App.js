import { Navbar, Header, About, Projects, Skills } from "./components";

function App() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
