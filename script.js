:root {
    --primary: #2d5a27;
    --secondary: #8bc34a;
    --accent: #fbc02d;
    --dark: #1b3022;
    --light: #f9fbf9;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    color: var(--dark);
    line-height: 1.6;
    background-color: var(--light);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Responsivo */
header {
    background: rgba(255, 255, 255, 0.95);
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
}

.logo span { color: var(--secondary); }

.nav-menu {
    display: flex;
    list-style: none;
    align-items: center;
}

.nav-menu li { margin-left: 2rem; }

.nav-menu a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 600;
    transition: var(--transition);
}

.nav-menu a:hover { color: var(--secondary); }

.btn-cta {
    background: var(--primary);
    color: white !important;
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
}

/* Hero Section */
.hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
    display: flex;
    align-items: center;
    position: relative;
    color: white;
}

.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.7), transparent);
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1rem;
}

.hero h1 span { color: var(--secondary); }

.btn-main {
    padding: 1rem 2rem;
    background: var(--secondary);
    color: white;
    text-decoration: none;
    font-weight: 600;
    border-radius: 5px;
    display: inline-block;
}

/* Grid de Cards */
.features { padding: 5rem 0; }

.section-title { text-align: center; margin-bottom: 3rem; }

.underline {
    width: 60px;
    height: 4px;
    background: var(--accent);
    margin: 10px auto;
}

.grid-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.card {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: var(--transition);
}

.card:hover { transform: translateY(-10px); }

.card .icon { font-size: 3rem; margin-bottom: 1rem; }

/* Menu Mobile */
.menu-toggle { display: none; }

@media (max-width: 768px) {
    .menu-toggle { display: block; cursor: pointer; }
    .nav-menu {
        position: absolute;
        top: 100%;
        left: -100%;
        flex-direction: column;
        background: white;
        width: 100%;
        text-align: center;
        transition: 0.5s;
        box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    }
    .nav-menu.active { left: 0; }
    .nav-menu li { margin: 1.5rem 0; }
    .hero h1 { font-size: 2.5rem; }
}
