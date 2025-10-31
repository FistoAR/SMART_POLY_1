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













































