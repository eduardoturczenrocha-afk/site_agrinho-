:root {
    --primary: #2d5a27;
    --secondary: #a4c639;
    --dark: #1a1a1a;
    --light: #f4f7f4;
    --white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--dark);
    scroll-behavior: smooth;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1rem;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 80px 0;
}

/* Header & Nav */
header {
    background: rgba(255, 255, 255, 0.95);
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
}

.logo span { color: var(--secondary); }

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li a {
    text-decoration: none;
    color: var(--dark);
    margin-left: 2rem;
    font-weight: 600;
    transition: 0.3s;
}

.nav-links li a:hover { color: var(--primary); }

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80') center/cover;
    display: flex;
    align-items: center;
    color: var(--white);
    text-align: center;
}

.hero h1 { font-size: 3rem; }
.hero p { font-size: 1.2rem; margin-bottom: 2rem; }

.btn {
    background: var(--secondary);
    color: var(--white);
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s;
}

.btn:hover { background: var(--primary); }

/* Grid e Cards */
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.image img {
    width: 100%;
    border-radius: 10px;
}

.bg-light { background: var(--light); }
.text-center { text-align: center; }

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.card {
    background: var(--white);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 15px;
}

footer {
    background: var(--dark);
    color: var(--white);
    padding: 40px 0;
    text-align: center;
}

/* Responsividade Mobile */
@media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; }
    .nav-links { display: none; } /* Menu hamburguer simplificado aqui */
    .hero h1 { font-size: 2rem; }
}
