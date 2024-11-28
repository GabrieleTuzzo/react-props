import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import posts from './data/posts';

function App() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="main-title">Il mio blog</h1>
                        </div>
                        {posts.map((post) => (
                            <div className="col-6">
                                <Card
                                    key={post.id}
                                    title={post.title}
                                    image={post.image}
                                    content={post.content}
                                    tags={post.tags}
                                    published={post.published}
                                ></Card>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
