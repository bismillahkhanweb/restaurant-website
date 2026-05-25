        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });

        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Mobile nav toggle
        function toggleMobileNav() {
            document.getElementById('navLinks').classList.toggle('open');
            document.getElementById('mobileToggle').classList.toggle('active');
        }

        // Close mobile nav when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navLinks').classList.remove('open');
                document.getElementById('mobileToggle').classList.remove('active');
            });
        });

        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
            const navLinks = document.getElementById('navLinks');
            const mobileToggle = document.getElementById('mobileToggle');
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('open');
                mobileToggle.classList.remove('active');
            }
        });

        // Menu category tabs
        function showMenuCategory(categoryId, btn) {
            document.querySelectorAll('.menu-tab').forEach(tab => tab.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.menu-category').forEach(cat => cat.classList.remove('active'));
            document.getElementById(categoryId).classList.add('active');
        }
    
