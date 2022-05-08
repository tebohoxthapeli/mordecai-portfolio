import { Navbar, Header, About, Projects, Skills, Testimonials, Contact } from "./components";

function App() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default App;
