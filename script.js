
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #2e7d32;
    color: white;
    padding: 2rem;
    text-align: center;
}

nav {
    background-color: #1b5e20;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

section {
    padding: 2rem;
    margin: 1rem auto;
    max-width: 800px;
    background-color: white;
    border-radius: 8px;
}

h2 {
    color: #2e7d32;
    margin-bottom: 1rem;
}

form input, form textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

form button {
    background-color: #2e7d32;
    color: white;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

form button:hover {
    background-color: #1b5e20;
}

footer {
    text-align: center;
    padding: 1rem;
    background-color: #2e7d32;
    color: white;
    margin-top: 2rem;
}
