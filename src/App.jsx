import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1 class="main-title">Il mio blog</h1>
                        </div>
                        <div class="col-6">
                            <Card></Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
