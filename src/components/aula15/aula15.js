import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Empresa from "./pages/empresa"
import Contato from "./pages/contato"
import Navbar from "./layout/navbar"
import Footer from "./layout/footer"

function Aula15() {
    return (
        <>
            <h1>Aula #15 - Implementando o React Router</h1>

            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/empresa" element={<Empresa />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Aula15