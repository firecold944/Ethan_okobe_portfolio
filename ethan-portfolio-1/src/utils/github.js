<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Ajout de quelques animations */
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
    </style>
</head>

<body class="bg-gray-50 text-gray-800">
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div class="container mx-auto py-8">
            <h1 class="text-4xl font-bold text-center fade-in">Bienvenue sur mon Portfolio</h1>
            <p class="mt-2 text-lg text-center">Développeur Web | Passionné par l'IA et les technologies modernes</p>
            <div class="flex justify-center mt-6">
                <a href="#projects" class="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">Voir mes projets</a>
            </div>
        </div>
    </header>

    <main class="container mx-auto my-10">
        <section id="skills" class="mb-10">
            <h2 class="text-3xl font-semibold mb-4">Compétences</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-bold mb-2">Développement Frontend</h3>
                    <p>HTML, CSS, JavaScript, React</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-bold mb-2">Développement Backend</h3>
                    <p>Node.js, Express, MongoDB</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-bold mb-2">Intelligence Artificielle</h3>
                    <p>Python, TensorFlow, Machine Learning</p>
                </div>
            </div>
        </section>

        <section id="projects" class="mb-10">
            <h2 class="text-3xl font-semibold mb-4">Projets</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-bold mb-2">Projet 1</h3>
                    <p>Une description succincte de ce projet.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-bold mb-2">Projet 2</h3>
                    <p>Une description succincte de ce projet.</p>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-bold mb-2">Projet 3</h3>
                    <p>Une description succincte de ce projet.</p>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 Mon Nom. Tous droits réservés.</p>
        </div>
    </footer>
</body>

</html>