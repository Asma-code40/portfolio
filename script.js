// === VALIDATION FORMULAIRE ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupération des valeurs
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérification basique
    if (!prenom || !nom || !email || !message) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Vérification email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide !");
      return;
    }

    // Si tout est bon
    alert("Merci " + prenom + " ! Votre message a été envoyé avec succès 🎉");
    form.reset();
  });
});

// === ANIMATION DES BARRES DE COMPÉTENCES ===
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");
  const sectionCompetences = document.getElementById("competences");
  let animated = false; // pour éviter que ça rejoue plusieurs fois

  function showProgressBars() {
    const sectionPosition = sectionCompetences.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100 && !animated) {
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("style").match(/width:\s*([0-9]+%)/)[1];
        bar.style.width = "0"; // reset au départ
        setTimeout(() => {
          bar.style.transition = "width 2s ease-in-out";
          bar.style.width = targetWidth;
        }, 200);
      });
      animated = true;
    }
  }

  window.addEventListener("scroll", showProgressBars);
});