import { Navbar, Header, About, Projects, Skills, Testimonials } from "./components";

function App() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
        </div>
    );
}

export default App;
