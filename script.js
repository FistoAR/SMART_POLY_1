document.addEventListener("DOMContentLoaded", function(){
    const menuBar = document.querySelector('.Menu_Bar');
    const menuBarIcon = document.querySelector('.Menu_Bar i');
    const getNavLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    menuBar.addEventListener('click', function(){
        getNavLinks.classList.toggle('activeNav');

        navItems.forEach(e => {
            e.addEventListener('click', function(){
                if (getNavLinks.classList.contains('activeNav')) {
                    getNavLinks.classList.remove('activeNav');
                    menuBarIcon.className = 'fa-solid fa-bars';
                }
            });
        });
        if (getNavLinks.classList.contains('activeNav')){
            menuBarIcon.className = "fa-solid fa-x";
        }
        else{
            menuBarIcon.className = 'fa-solid fa-bars';
        }
    });

    const headerNav = document.querySelector('.header');
    document.addEventListener('scroll', function(){
        // if (window.scrollY > 50){
        //     headerNav.classList.add('sticky');
        // }
        // else{
        //     headerNav.classList.remove('sticky');
        // }
    
    });
    
    // function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // var flag = 1;

    // if (flag ==1) {
    //     const allElements = document.querySelectorAll('[data-animation]');
    //     allElements.forEach(e =>{
    //         e.classList.add('opacity0');
            
    //         if (e.classList.contains('opacity0')){
    //             flag++;
    //         }
    //     });
    // }
    
    // function handleScroll() {
    //     const elements = document.querySelectorAll('[data-animation]');
        
    //     elements.forEach(element => {
    //         const animationClass = element.getAttribute('data-animation');
            
    //         if (isInViewport(element) && !element.classList.contains(animationClass)) {
    //             element.classList.add(animationClass);
    //             void element.offsetWidth;
    //             if (element.classList.contains('opacity0')){
    //                 element.classList.remove('opacity0');
    //             }
    //         }
    //     });
    // }
    
    // handleScroll();
    // window.addEventListener('scroll', handleScroll);


    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
        // Check if any part of the element is visible
        return (
            rect.top <= windowHeight &&
            rect.bottom >= 0 &&
            rect.left <= windowWidth &&
            rect.right >= 0
        );
    }
    
        const elements = document.querySelectorAll('[data-animation]');
        
        elements.forEach(element => {
            element.classList.add('opacity0');
        });
    
        let flag = 1;
    
        if (flag === 1) {
            elements.forEach(element => {
                if (element.classList.contains('opacity0')) {
                    flag++;
                }
            });
        }
        
        function handleScroll() {
            elements.forEach(element => {
                const animationClass = element.getAttribute('data-animation');
                
                if (isInViewport(element) && !element.classList.contains(animationClass)) {
                    element.classList.add(animationClass);
                    void element.offsetWidth;
                    if (element.classList.contains('opacity0')) {
                        element.classList.remove('opacity0');
                    }
                }
            });
        }
        
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    

    const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay: 3000,
  },
  speed: 1200,
  direction: 'horizontal',
  loop: true,

 
});

function disableScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;
    
    // Add inline styles to the body to hide the scrollbar and prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`; // To prevent jumping to top
    
    // Add event listener to prevent scrolling via mouse wheel
    window.addEventListener('wheel', preventDefault, { passive: false });
}

function enableScroll() {
    // Get the original scroll position
    const scrollY = parseInt(document.body.style.top || '0', 10);
    
    // Remove the inline styles to enable scrolling
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    
    // Scroll back to the original position
    window.scrollTo(0, scrollY * -1);
    
    // Remove event listener to enable scrolling via mouse wheel
    window.removeEventListener('wheel', preventDefault);
}




const input = document.getElementById('fname');

const contactInput = document.querySelectorAll('.contactInput');

const label = document.querySelector('.inputLabel');

contactInput.forEach(function(e) {

    e.addEventListener('focus', function(){
        const label = this.previousElementSibling;
        label.style.transform = 'translate(-5%, -120%) scale(0.9)';
        if (this.id === 'address') {
            this.style.height = '70px'; // Adjust the height as needed
        }
        
    });

    e.addEventListener('blur', function() {
        const label = this.previousElementSibling;
        label.style.transform = 'none';

        if (this.value.trim()){
            label.style.transform = 'translate(-5%, -120%) scale(0.9)';
        }

        if (this.id === 'address') {
            if (this.value.trim()){
                this.style.height = '70px'; // Reset to default height
            }
            else{
                this.style.height = ''; // Reset to default height
            }
        }

        if (!this.value.trim()) {
            label.style.transform = 'none';
        }
    });

    const label = this.previousElementSibling;

    if (input.value.trim()) {
        label.style.transform = 'translate(-5%, -120%) scale(0.9)';
        // Add height if the input has an id of 'address'
        if (input.id === 'address') {
            input.style.height = '70px'; // Adjust the height as needed
        }
    }


});



// ******************************************************** Back To Top Button *************************************************************

    const backToTopBtn = document.querySelector('.backToTop');
    backToTopBtn.addEventListener("click", function(){
        window.scrollTo(0,0);
    });

    function showBackBtn(){
        if (window.scrollY > 100) {
            backToTopBtn.classList.add('show');
        }
        else{
            if (backToTopBtn.classList.contains('show')){
                backToTopBtn.classList.remove('show');
            }
        }
    }

    showBackBtn();

    document.addEventListener('scroll', showBackBtn);

    // var myForm = document.getElementById('contactForm');
    // const formBtn = document.getElementById('sendMsgBtn');

    // formBtn.addEventListener("click", function(){
    //     setTimeout(() => {
    //         myForm.reset();
    //     }, 1500);
    // });

    var aboutHeading = document.querySelector('.centerHeading-about');
    if (window.innerWidth <= 500) {
        var brElements = aboutHeading.querySelectorAll('br');
        brElements.forEach(function(brElement) {
            aboutHeading.removeChild(brElement);
        });
    }

});







// ============================================
// COMPLETE SCRIPT WITH PRELOADER & ANIMATIONS
// ============================================

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Content Loaded - Starting initialization");

    // ============================================
    // 1. PRELOADER CONTROL
    // ============================================
    const preloader = document.getElementById("preloader");
    const homeSection = document.querySelector('.home');
    const mainContent = document.querySelector('.main-content');

    console.log("Preloader found:", !!preloader);
    console.log("Home section found:", !!homeSection);

    // Disable scroll initially
    document.body.style.overflow = 'hidden';

    // Start preloader sequence
    setTimeout(() => {
        console.log("Starting preloader fade-out");
        preloader.classList.add("fade-out");

        setTimeout(() => {
            console.log("Removing preloader, enabling scroll, triggering animations");
            preloader.style.display = "none";
            document.body.style.overflow = 'auto';
            
            // Trigger home animations
            triggerHomeAnimations();
            
        }, 1000); // 1 second fade duration
    }, 3000); // 3 second preloader display

    // ============================================
    // 2. HOME ANIMATIONS FUNCTION
    // ============================================
    function triggerHomeAnimations() {
        console.log("Triggering home animations");

        const backgroundImg = document.querySelector('.background_img_home_page');
        const homeImg = document.querySelector('.home-img');
        const circleImg = document.querySelector('.circle-img');
        const header = document.querySelector('.header');
        const logoImage = document.querySelector('.logo-image');
        const navLinks = document.querySelectorAll('.nav-links div');
        const socialIcons = document.querySelectorAll('.socialIcons a');

        // Add visible class to trigger animations
        if (homeSection) homeSection.classList.add('home-active');
        
        if (backgroundImg) backgroundImg.classList.add('home-active');
        if (homeImg) homeImg.classList.add('home-active');
        if (circleImg) circleImg.classList.add('home-active');
        if (header) header.classList.add('home-active');
        if (logoImage) logoImage.classList.add('home-active');

        // Nav links with stagger
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('home-active');
            }, 100 * index);
        });

        // Social icons with stagger
        socialIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('home-active');
            }, 100 * index);
        });
    }

    // ============================================
    // 3. PAGE VISIBILITY - REVERSE ANIMATIONS
    // ============================================
    document.addEventListener('visibilitychange', function() {
        console.log("Visibility changed, hidden:", document.hidden);
        
        if (document.hidden) {
            // Page hidden - remove animations
            reverseHomeAnimations();
        } else {
            // Page visible - restore animations
            if (preloader.style.display === 'none') {
                // Re-add animations if preloader is already gone
                triggerHomeAnimations();
            }
        }
    });

    function reverseHomeAnimations() {
        console.log("Reversing home animations");
        
        const homeSection = document.querySelector('.home');
        const backgroundImg = document.querySelector('.background_img_home_page');
        const homeImg = document.querySelector('.home-img');
        const circleImg = document.querySelector('.circle-img');
        const header = document.querySelector('.header');
        const logoImage = document.querySelector('.logo-image');
        const navLinks = document.querySelectorAll('.nav-links div');
        const socialIcons = document.querySelectorAll('.socialIcons a');

        // Remove active class to reverse animations
        if (homeSection) homeSection.classList.remove('home-active');
        if (backgroundImg) backgroundImg.classList.remove('home-active');
        if (homeImg) homeImg.classList.remove('home-active');
        if (circleImg) circleImg.classList.remove('home-active');
        if (header) header.classList.remove('home-active');
        if (logoImage) logoImage.classList.remove('home-active');

        navLinks.forEach(link => link.classList.remove('home-active'));
        socialIcons.forEach(icon => icon.classList.remove('home-active'));
    }

    // ============================================
    // 4. MENU TOGGLE
    // ============================================
    const menuBar = document.querySelector('.Menu_Bar');
    const menuBarIcon = document.querySelector('.Menu_Bar i');
    const getNavLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuBar) {
        menuBar.addEventListener('click', function(){
            getNavLinks.classList.toggle('activeNav');

            navItems.forEach(e => {
                e.addEventListener('click', function(){
                    if (getNavLinks.classList.contains('activeNav')) {
                        getNavLinks.classList.remove('activeNav');
                        menuBarIcon.className = 'fa-solid fa-bars';
                    }
                });
            });

            if (getNavLinks.classList.contains('activeNav')){
                menuBarIcon.className = "fa-solid fa-x";
            } else {
                menuBarIcon.className = 'fa-solid fa-bars';
            }
        });
    }

    // ============================================
    // 5. SCROLL ANIMATIONS WITH DATA ATTRIBUTE
    // ============================================
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
        return (
            rect.top <= windowHeight &&
            rect.bottom >= 0 &&
            rect.left <= windowWidth &&
            rect.right >= 0
        );
    }
    
    const elements = document.querySelectorAll('[data-animation]');
    
    // Initially hide all animated elements
    elements.forEach(element => {
        element.classList.add('opacity0');
    });

    function handleScroll() {
        elements.forEach(element => {
            const animationClass = element.getAttribute('data-animation');
            
            if (isInViewport(element)) {
                if (!element.classList.contains(animationClass)) {
                    element.classList.add(animationClass);
                    if (element.classList.contains('opacity0')) {
                        element.classList.remove('opacity0');
                    }
                }
            } else {
                // Remove animation when out of view (reverse effect)
                if (element.classList.contains(animationClass)) {
                    element.classList.remove(animationClass);
                    element.classList.add('opacity0');
                }
            }
        });
    }
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // ============================================
    // 6. CONTACT & FOOTER INTERSECTION OBSERVER
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const contactSection = document.querySelector('.contactUs');
    if (contactSection) observer.observe(contactSection);

    const footerSection = document.querySelector('.footer');
    if (footerSection) observer.observe(footerSection);

    // ============================================
    // 7. SWIPER INITIALIZATION
    // ============================================
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper', {
            autoplay: { delay: 3000 },
            speed: 1200,
            direction: 'horizontal',
            loop: true,
        });
    }

    // ============================================
    // 8. BACK TO TOP BUTTON
    // ============================================
    const backToTopBtn = document.querySelector('.backToTop');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function(){
            window.scrollTo(0, 0);
        });

        function showBackBtn(){
            if (window.scrollY > 100) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        showBackBtn();
        document.addEventListener('scroll', showBackBtn);
    }

    // ============================================
    // 9. ABOUT SECTION CLEANUP
    // ============================================
    var aboutHeading = document.querySelector('.centerHeading-about');
    if (window.innerWidth <= 500 && aboutHeading) {
        var brElements = aboutHeading.querySelectorAll('br');
        brElements.forEach(function(brElement) {
            aboutHeading.removeChild(brElement);
        });
    }

    console.log("Initialization complete");
});





































// ============================================
// PRELOADER TO HOME PAGE ANIMATION SEQUENCE
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    console.log("✓ DOM Loaded - Initializing Preloader");

    const preloader = document.getElementById("preloader");
    const mainContent = document.querySelector('.main-content');

    // Hide main content initially
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.pointerEvents = 'none';
    }

    // Disable scroll during preloader
    document.body.style.overflow = 'hidden';

    // ============================================
    // STEP 1: PRELOADER DISPLAY (3 seconds)
    // ============================================
    setTimeout(() => {
        console.log("✓ Preloader: 3 seconds complete - Starting fade out");
        preloader.classList.add("fade-out");

        // ============================================
        // STEP 2: PRELOADER FADE (1 second)
        // ============================================
        setTimeout(() => {
            console.log("✓ Preloader: Fade complete - Removing from DOM");
            
            preloader.style.display = "none";
            document.body.style.overflow = 'auto';

            // ============================================
            // STEP 3: SHOW MAIN CONTENT (0.5 seconds)
            // ============================================
            if (mainContent) {
                mainContent.style.opacity = '1';
                mainContent.style.transition = 'opacity 0.5s ease-in';
                mainContent.style.pointerEvents = 'auto';
            }

            // ============================================
            // STEP 4: TRIGGER HOME ANIMATIONS
            // ============================================
            setTimeout(() => {
                console.log("✓ Main Content: Visible - Starting HOME ANIMATIONS");
                console.log("═══════════════════════════════════════════════════");
                triggerHomeAnimations();
            }, 500);

        }, 1000); // Preloader fade duration

    }, 3000); // Preloader display duration

    // ============================================
    // HOME ANIMATIONS FUNCTION
    // ============================================
    function triggerHomeAnimations() {
        console.log("🎬 HOME PAGE ANIMATIONS STARTED\n");

        const animations = [
            {
                selector: '.header',
                delay: 0,
                name: 'Header'
            },
            {
                selector: '.logo-image',
                delay: 200,
                name: 'Logo Image'
            },
            {
                selector: '.background_img_home_page',
                delay: 400,
                name: 'Background Image'
            },
            {
                selector: '.home-img',
                delay: 500,
                name: 'Home Content'
            },
            {
                selector: '.circle-img',
                delay: 700,
                name: 'Circle Image'
            }
        ];

        // Trigger main elements
        animations.forEach(anim => {
            setTimeout(() => {
                const element = document.querySelector(anim.selector);
                if (element) {
                    element.classList.add('home-active');
                    console.log(`  ➜ ${anim.name} animation triggered`);
                }
            }, anim.delay);
        });

        // ============================================
        // NAV LINKS STAGGERED ANIMATION
        // ============================================
        const navLinks = document.querySelectorAll('.nav-links div');
        console.log(`\n  ➜ Nav Links (${navLinks.length} items):`);
        
        navLinks.forEach((link, index) => {
            const delay = 600 + (index * 100);
            setTimeout(() => {
                link.classList.add('home-active');
                console.log(`    • Nav link ${index + 1} - ${delay}ms`);
            }, delay);
        });

        // ============================================
        // SOCIAL ICONS STAGGERED ANIMATION
        // ============================================
        const socialIcons = document.querySelectorAll('.socialIcons a');
        console.log(`\n  ➜ Social Icons (${socialIcons.length} items):`);
        
        socialIcons.forEach((icon, index) => {
            const delay = 1100 + (index * 100);
            setTimeout(() => {
                icon.classList.add('home-active');
                console.log(`    • Social icon ${index + 1} - ${delay}ms`);
            }, delay);
        });

        // ============================================
        // TEXT ELEMENTS ANIMATION
        // ============================================
        console.log(`\n  ➜ Text Elements:`);

        const textAnimations = [
            {
                selector: '.home-img h1 .smart_poly',
                delay: 800,
                name: 'Smart Poly'
            },
            {
                selector: '.home-img h1 .partner_text',
                delay: 1000,
                name: 'Your Partner Packaging'
            },
            {
                selector: '.home-img h1 .excellence',
                delay: 1200,
                name: 'Excellence'
            },
            {
                selector: '.home-img p',
                delay: 1500,
                name: 'Description Text'
            }
        ];

        textAnimations.forEach(textAnim => {
            setTimeout(() => {
                const element = document.querySelector(textAnim.selector);
                if (element) {
                    element.style.opacity = '1';
                    console.log(`    • ${textAnim.name} - ${textAnim.delay}ms`);
                }
            }, textAnim.delay);
        });

        // ============================================
        // COMPLETION
        // ============================================
        setTimeout(() => {
            console.log("\n✓ ALL HOME ANIMATIONS COMPLETE");
            console.log("═══════════════════════════════════════════════════");
        }, 2500);
    }
});