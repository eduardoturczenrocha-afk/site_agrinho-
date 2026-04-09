
:root {
    --primary-green: #2d5a27;
    --light-green: #4caf50;
    --earth-brown: #5d4037;
    --bg-light: #f4f7f4;
    --white: #ffffff;
    --dark: #333;
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
    background-color: var(--bg-light);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Nav */
header {
    background: var(--white);
    padding: 20px 0;
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
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-green);
}

.logo span {
    color: var(--earth-brown);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 600;
    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--light-green);
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80') no-repeat center center/cover;
    display: flex;
    align-items: center;
    color: var(--white);
    text-align: center;
    padding-top: 80px;
}

.hero h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 20px;
}

.btn-primary {
    display: inline-block;
    background: var(--light-green);
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    transition: background 0.3s;
}

.btn-primary:hover {
    background: var(--primary-green);
}

/* Features */
.features {
    display: flex;
    gap: 20px;
    padding: 80px 20px;
    margin-top: -50px;
}

.feature-card {
    background: var(--white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    flex: 1;
    text-align: center;
    border-bottom: 4px solid var(--light-green);
}

/* CTA Section */
.cta {
    background: var(--primary-green);
    color: white;
    padding: 60px 0;
    text-align: center;
}

/* Responsive */
.menu-toggle {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--dark);
}

@media (max-width: 768px) {
    .nav-links {
        display: none; /* Simplificado para o exemplo */
    }
    .features {
        flex-direction: column;
    }
    .hero h1 {
        font-size: 2rem;
    }
}
