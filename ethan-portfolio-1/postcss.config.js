<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Ajout d'animations subtiles */
        .transition {
            transition: all 0.3s ease;
        }
        .hover\:scale-105:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div class="container mx-auto text-center">
            <h1 class="text-5xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
            <p class="text-lg mb-8">Développeur passionné par l'IA et les technologies modernes.</p>
            <a href="#projects" class="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition">Découvrir mes projets</a>
        </div>
    </header>

    <!-- Compétences Section -->
    <section id="skills" class="py-20">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-10">Compétences</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl">
                    <h3 class="text-xl font-semibold mb-2">Développement Web</h3>
                    <p>HTML, CSS, JavaScript, React, Node.js</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl">
                    <h3 class="text-xl font-semibold mb-2">Intelligence Artificielle</h3>
                    <p>Python, TensorFlow, Machine Learning</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl">
                    <h3 class="text-xl font-semibold mb-2">Design UI/UX</h3>
                    <p>Figma, Adobe XD, Prototypage</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projets Section -->
    <section id="projects" class="py-20 bg-gray-100">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-10">Mes Projets</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl">
                    <h3 class="text-xl font-semibold mb-2">Projet 1</h3>
                    <p>Une description brève du projet 1.</p>
                    <a href="#" class="text-blue-600 font-semibold mt-4 inline-block">Voir le projet</a>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl">
                    <h3 class="text-xl font-semibold mb-2">Projet 2</h3>
                    <p>Une description brève du projet 2.</p>
                    <a href="#" class="text-blue-600 font-semibold mt-4 inline-block">Voir le projet</a>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition hover:shadow-xl">
                    <h3 class="text-xl font-semibold mb-2">Projet 3</h3>
                    <p>Une description brève du projet 3.</p>
                    <a href="#" class="text-blue-600 font-semibold mt-4 inline-block">Voir le projet</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-10">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 Mon Portfolio. Tous droits réservés.</p>
        </div>
    </footer>

</body>
</html>