import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Twitter, Linkedin, Instagram, BookOpen, MessageCircle, User, Star, Smile, Heart } from 'lucide-react';
import logo from '../assets/logo.png';
import bookCover from '../assets/cover.png';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { id: 'about-book', label: 'The Book' },
        { id: 'about-author', label: 'Author' },
        { id: 'philosophy', label: 'Philosophy' },
        { id: 'buy-now', label: 'Order' },
    ];

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const obs = new window.IntersectionObserver(entries => {
            entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
        }, { threshold: 0.13 });
        document.querySelectorAll('.fade-in').forEach(s => obs.observe(s));
        return () => document.querySelectorAll('.fade-in').forEach(s => obs.unobserve(s));
    }, []);

    return (
        <div className="min-h-screen font-inter bg-white text-[#222] antialiased">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg  ">
                <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                    {/* Logo Left */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Robin Singh Logo"
                            className="h-16 w-16 rounded bg-white"
                            loading="lazy"
                            onError={e => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/44x44/dbab50/fff?text=RS";
                            }}
                        />
                        <span className="ml-3 text-xl font-bold tracking-wide text-[#181818]">
                            ROBIN SINGH
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex gap-10">
                        <li><button onClick={() => scrollToSection('about-book')} className="text-base font-medium hover:text-[#dbab50]">About the Book</button></li>
                        <li><button onClick={() => scrollToSection('about-author')} className="text-base font-medium hover:text-[#dbab50]">About the Author</button></li>
                        <li><button onClick={() => scrollToSection('philosophy')} className="text-base font-medium hover:text-[#dbab50]">Philosophy</button></li>
                        <li><button onClick={() => scrollToSection('buy-now')} className="text-base font-medium hover:text-[#dbab50]">Buy Now</button></li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button onClick={toggleMenu} className="md:hidden p-2" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </nav>
                {/* Mobile Full-Screen Nav Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center transition-all h-screen">
                        <button
                            onClick={toggleMenu}
                            className="absolute top-7 right-8 text-white p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <ul className="flex flex-col items-center gap-12">
                            <li><button onClick={() => scrollToSection('about-book')} className="text-2xl font-semibold text-white hover:text-[#dbab50]">About the Book</button></li>
                            <li><button onClick={() => scrollToSection('about-author')} className="text-2xl font-semibold text-white hover:text-[#dbab50]">About the Author</button></li>
                            <li><button onClick={() => scrollToSection('philosophy')} className="text-2xl font-semibold text-white hover:text-[#dbab50]">Philosophy</button></li>
                            <li><button onClick={() => scrollToSection('buy-now')} className="text-2xl font-semibold text-white hover:text-[#dbab50]">Buy Now</button></li>
                        </ul>
                    </div>
                )}
            </header>



            <main>
                {/* HERO - Premium, Visual, with strong call to action */}
                <section
                    id="hero"
                    className="w-full min-h-[80vh] flex items-center justify-center px-2 sm:px-4 lg:px-6 bg-white mb-10 mt-24"
                >
                    <div className="w-full max-w-8xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                        {/* Book Image: 50% width, significantly larger */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end lg:justify-end mb-4 md:mb-0">
                            <img
                                src={bookCover}
                                alt="Happiness Happens Book Cover"
                                className="w-[90vw] md:w-[100%] max-w-[400px] sm:max-w-[550px] lg:max-w-[700px] object-contain mix-blend-multiply"
                                style={{
                                    border: 'none',
                                    borderRadius: '8px',
                                    background: 'none',
                                }}
                                loading="eager"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/700x1000/dbab50/fff?text=Book';
                                }}
                            />
                        </div>

                        {/* Hero Text: 50% width */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-4 lg:px-6">
                            <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 sm:mb-3 text-[#181818] tracking-tight">
                                Find Purpose with<br />
                                <span className="text-[#dbab50]">
                                   Happiness Happens
                                </span>
                            </h1>
                            <blockquote className="border-l-4 border-[#dbab50] pl-4 italic text-gray-600 mb-3 sm:mb-4 text-md sm:text-base lg:text-lg font-normal leading-relaxed mt-2">
                                A journey from comfort to purpose. Robin Singh’s book helps you see success—and happiness—in a whole new light.
                            </blockquote>
                            <button
                                onClick={() => scrollToSection('buy-now')}
                                className="inline-block px-10 sm:px-8 py-4 sm:py-3 font-semibold text-[#181818] bg-[#dbab50] hover:bg-[#320101] hover:text-white transition-all duration-300 transform hover:-translate-y-1 mt-4 sm:mt-6 text-md"
                            >
                                Order Now
                            </button>
                            <span className="mt-2 sm:mt-3 text-sm sm:text-sm lg:text-base text-gray-400 font-normal">
                                Available on  <span className="font-semibold">Amazon</span>
                            </span>
                        </div>
                    </div>
                </section>


                {/* Inside the Book - More Elaborate */}
                <section id="about-book" className="fade-in py-32 bg-[#f9f7f2]">
                    <div className="container mx-auto px-5 max-w-5xl">
                        <h2 className="text-4xl font-bold mb-10 text-[#181818] text-center">Inside the Book</h2>
                        <div className="grid md:grid-cols-3 gap-12 mb-12">
                            {/* Card 1: Transformation */}
                            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-neutral-100">
                                <BookOpen className="h-14 w-14 mb-4 text-[#dbab50]" />
                                <h3 className="text-xl font-semibold mb-3">From Achievement to Purpose</h3>
                                <p className="text-gray-700">
                                    Trace Robin’s leap from Silicon Valley success to rural India—where meaning, not just happiness, became the goal.
                                </p>
                            </div>
                            {/* Card 2: Lessons & Reflections */}
                            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-neutral-100">
                                <MessageCircle className="h-14 w-14 mb-4 text-[#dbab50]" />
                                <h3 className="text-xl font-semibold mb-3">Life’s Big Questions—Answered</h3>
                                <p className="text-gray-700">
                                    Each chapter is a blend of memoir, philosophy, and practical exercises—offering a roadmap to crafting a fulfilled, conscious life.
                                </p>
                            </div>
                            {/* Card 3: Joy and Authenticity */}
                            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-neutral-100">
                                <Smile className="h-14 w-14 mb-4 text-[#dbab50]" />
                                <h3 className="text-xl font-semibold mb-3">The Art of Lasting Joy</h3>
                                <p className="text-gray-700">
                                    Learn how meaning outlasts comfort, and why real joy isn’t found in things, but in purpose-driven living.
                                </p>
                            </div>
                        </div>
                        {/* Add a notable quote or featured section */}
                        <div className="max-w-2xl mx-auto mt-12 text-center">
                            <p className="italic text-lg text-[#2d1601]">
                                “It’s easy to chase happiness—what’s hard is finding something that gives you lasting peace. This book is about that search that changes everything.”
                            </p>
                        </div>
                        {/* Sample chapter preview */}
                        <div className="mt-16 bg-[#fff] px-8 py-10 rounded-2xl border-l-4 border-[#dbab50] shadow max-w-2xl mx-auto">
                            <h4 className="text-[#dbab50] font-bold text-lg mb-2">Chapter Preview: “Success, Reimagined”</h4>
                            <p className="text-gray-600">
                                I thought achievement would fill the void. But it was only when I lost myself in work that I realized what I was missing: a sense of purpose so deep, it made every struggle meaningful. <span className="italic">—Excerpt from chapter 3</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Expanded Author Section - Rich bio, quote, values, image */}
                <section id="about-author" className="fade-in py-36 bg-white">
                    <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-16 max-w-5xl">
                        {/* Author portrait */}
                        <div className="flex-1 flex justify-center">
                            <img
                                src="https://www.ourhenhouse.org/wp-content/uploads/2020/03/robinsinghcropped-460x460.jpg"
                                alt="Robin Singh"
                                className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover border-4 border-[#dbab50] shadow-2xl bg-gray-50"
                                loading="lazy"
                                onError={e => { e.target.onerror = null; e.target.src = "https://placehold.co/288x288/A78BFA/fff?text=Robin"; }}
                            />
                        </div>
                        {/* Author Bio */}
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold mb-5 text-[#181818]">Meet Robin Singh</h3>
                            <p className="text-lg text-gray-700 mb-7">
                                A tech visionary turned conscious farmer and animal welfare champion, Robin left behind global accolades for a more intentional life. As founder of <span className="text-[#dbab50] font-semibold">Peepal Farm</span>, he’s redefining what it means to be successful—day by day, animal by animal.
                            </p>
                            <div className="mb-8">
                                <blockquote className="border-l-4 border-[#dbab50] pl-5 italic text-[#2d1601]">
                                    "Wealth isn’t what you accumulate. It’s the love, purpose, and impact you create—quietly, every day."
                                </blockquote>
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm font-medium mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f5dab0] text-[#2d1601]"><Star className="w-4 h-4 mr-2" /> Entrepreneur</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f5dab0] text-[#2d1601]"><Heart className="w-4 h-4 mr-2" /> Animal Advocate</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f5dab0] text-[#2d1601]"><Smile className="w-4 h-4 mr-2" /> Seeker of Meaning</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f5dab0] text-[#2d1601]"><User className="w-4 h-4 mr-2" /> Life Coach</span>
                            </div>
                            <a href="https://peepalfarm.org" target="_blank" rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-[#dbab50] text-[#320101] rounded-full font-medium shadow hover:bg-[#bb9b35] transition">
                                Learn about Peepal Farm
                            </a>
                        </div>
                    </div>
                </section>

                {/* Minimal Philosophy (keep as before) */}
                <section id="philosophy" className="fade-in py-28 md:py-36 bg-[#f9f7f2]">
                    <div className="container mx-auto px-5 text-center max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-9 text-[#181818]">Philosophy</h2>
                        <p className="text-lg text-gray-700">
                            True wealth is measured by impact and kindness.<br />
                            Robin’s ventures—from wildlife rescue to global tech—are united by a single idea: meaning before money.
                        </p>
                    </div>
                </section>

                {/* Buy Now */}
                <section id="buy-now" className="fade-in py-32 bg-[#2d1601] text-center relative">
                    <div className="container mx-auto px-5 max-w-lg">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#dbab50]">Ready to Read?</h2>
                        <p className="text-lg mb-10 text-white/90">
                            Secure your copy of <strong>Happiness Happens</strong>—embark on a journey to meaning and fulfillment.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-10 py-4 text-lg font-bold rounded-full bg-[#dbab50] text-[#320101] shadow-lg hover:bg-[#bb9b35] transition"
                        >
                            <ShoppingCart className="mr-4 w-6 h-6" />
                            Order on Amazon
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-12 text-center">
                <div className="flex items-center justify-center space-x-8 mb-6">
                    <a href="https://twitter.com/locaterobin" target="_blank" rel="noopener noreferrer"
                        className="text-[#dbab50] hover:text-white transition"><Twitter /></a>
                    <a href="#" className="text-[#dbab50] hover:text-white transition"><Linkedin /></a>
                    <a href="#" className="text-[#dbab50] hover:text-white transition"><Instagram /></a>
                </div>
                <div className="text-md text-neutral-400 mb-2">
                    &copy; {new Date().getFullYear()} Robin Singh. Designed for those who seek more.
                </div>
                 <div className="text-md text-neutral-300">
                    Web by <a href="https://yourwebdesigner.com" target="_blank" rel="noopener noreferrer" className="text-[#dbab50] hover:text-white transition">Aditya Pal</a> 
                </div>
            </footer>
        </div>
    );
}

export default App;
