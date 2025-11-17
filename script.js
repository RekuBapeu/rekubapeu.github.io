
// Navigation entre les sections
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Fonction pour afficher une section
    function showSection(targetId) {
        // Masquer toutes les sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Supprimer la classe active de tous les liens
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Afficher la section cible
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Ajouter la classe active au lien correspondant
        const activeLink = document.querySelector(`[data-section="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Gestionnaire d'événements pour les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
        });
    });

    // Gestionnaire pour les boutons qui redirigent vers d'autres sections
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-section')) {
            e.preventDefault();
            const targetSection = e.target.getAttribute('data-section');
            showSection(targetSection);
        }
    });

    // Gestionnaire pour le formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder*="Objet"]').value;
            const message = this.querySelector('textarea').value;

            // Validation simple
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }

            // Simulation d'envoi (à remplacer par votre logique d'envoi)
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }

    // Gestion des liens de téléchargement
    const downloadLinks = document.querySelectorAll('a[href="#"]');
    downloadLinks.forEach(link => {
        if (link.textContent.includes('Télécharger')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Le téléchargement sera disponible prochainement. Vous pouvez me contacter pour obtenir le document.');
            });
        }
    });

    // Afficher la section d'accueil par défaut
    showSection('accueil');
});

// Fonction pour personnaliser les couleurs (exemple d'utilisation)
function changeTheme(primaryColor, secondaryColor) {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
}

// Exemples de thèmes prédéfinis
const themes = {
    blue: { primary: '#2563eb', secondary: '#64748b' },
    green: { primary: '#059669', secondary: '#64748b' },
    purple: { primary: '#7c3aed', secondary: '#64748b' },
    red: { primary: '#dc2626', secondary: '#64748b' }
};

// Fonction pour appliquer un thème
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (theme) {
        changeTheme(theme.primary, theme.secondary);
    }
}