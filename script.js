// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Platform Features Slider
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.feature-slide');
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideNumber = this.getAttribute('data-slide');
            
            // Remove active class from all dots and slides
            dots.forEach(d => d.classList.remove('active'));
            slides.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked dot and corresponding slide
            this.classList.add('active');
            document.querySelector(`[data-slide="${slideNumber}"]`).classList.add('active');
        });
    });
    
    // Auto-rotate slides every 5 seconds
    let currentSlide = 1;
    const totalSlides = slides.length;
    
    setInterval(() => {
        currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
        
        // Remove active class from all dots and slides
        dots.forEach(d => d.classList.remove('active'));
        slides.forEach(s => s.classList.remove('active'));
        
        // Add active class to current dot and slide
        document.querySelector(`[data-slide="${currentSlide}"]`).classList.add('active');
        document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add('active');
    }, 5000);
});

// Demo Slider
document.addEventListener('DOMContentLoaded', function() {
    const demoDots = document.querySelectorAll('.demo-dot');
    const demoSlides = document.querySelectorAll('.demo-slide');
    
    demoDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const demoNumber = this.getAttribute('data-demo');
            
            // Remove active class from all dots and slides
            demoDots.forEach(d => d.classList.remove('active'));
            demoSlides.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked dot and corresponding slide
            this.classList.add('active');
            document.querySelector(`[data-demo="${demoNumber}"]`).classList.add('active');
        });
    });
    
    // Auto-rotate demo slides every 6 seconds
    let currentDemo = 1;
    const totalDemos = demoSlides.length;
    
    setInterval(() => {
        currentDemo = currentDemo >= totalDemos ? 1 : currentDemo + 1;
        
        // Remove active class from all dots and slides
        demoDots.forEach(d => d.classList.remove('active'));
        demoSlides.forEach(s => s.classList.remove('active'));
        
        // Add active class to current dot and slide
        document.querySelector(`[data-demo="${currentDemo}"]`).classList.add('active');
        document.querySelector(`.demo-dot[data-demo="${currentDemo}"]`).classList.add('active');
    }, 6000);
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animate Elements on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.platform-card, .researcher-card, .use-case-card, .resource-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button Click Effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary, .btn-outline {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Statistics Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                
                // Get the target number from the element's text content
                const text = statNumber.textContent;
                let target;
                
                // Handle different number formats
                if (text.includes('+')) {
                    target = parseInt(text.replace('+', ''));
                } else if (text.includes('%')) {
                    target = parseFloat(text.replace('%', ''));
                } else if (text.includes(',')) {
                    target = parseInt(text.replace(/,/g, ''));
                } else {
                    target = parseInt(text) || 0;
                }
                
                // Start from 0
                statNumber.textContent = '0';
                
                // Animate to target and restore formatting
                animateCounter(statNumber, target, 2000);
                
                // Restore the original formatting after animation
                setTimeout(() => {
                    const originalText = statNumber.getAttribute('data-original') || text;
                    statNumber.textContent = originalText;
                }, 2000);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => statsObserver.observe(item));
});

// Form Validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add error styles for form validation
const formStyles = document.createElement('style');
formStyles.textContent = `
    .error {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
    }
    
    .error-message {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
`;
document.head.appendChild(formStyles);

// Lazy Loading for Images (if images are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #007bff';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add ARIA labels for better screen reader support
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (button.textContent.trim()) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
});

// Video Background Handling
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video-background video');
    const heroSection = document.querySelector('.hero');
    
    if (video) {
        // Handle video loading
        video.addEventListener('loadeddata', function() {
            video.style.opacity = '1';
        });
        
        // Handle video errors
        video.addEventListener('error', function() {
            // Fallback to gradient background if video fails to load
            heroSection.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
            const videoBackground = document.querySelector('.hero-video-background');
            if (videoBackground) {
                videoBackground.style.display = 'none';
            }
        });
        
        // Pause video on mobile to save bandwidth
        if (window.innerWidth <= 768) {
            video.pause();
            video.style.display = 'none';
            heroSection.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
        }
    }
});

// Animate AlphaScan section on scroll into view
function animateSectionOnView(selector) {
    const section = document.querySelector(selector);
    if (!section) return;
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('in-view');
                    observer.unobserve(section);
                }
            });
        },
        { threshold: 0.2 }
    );
    observer.observe(section);
}

document.addEventListener('DOMContentLoaded', function() {
    animateSectionOnView('.about-alphascan');
    animateSectionOnView('.founder-section');
});

// Transform founder bio into three explicit single-line blocks
document.addEventListener('DOMContentLoaded', function() {
  const bios = document.querySelectorAll('.founder-bio');
  bios.forEach(bio => {
    if (bio.dataset.linesWrapped === 'true') return;
    const parts = bio.innerHTML
      .split(/<br\s*\/?>(?:\s*)/i)
      .map(s => s.trim())
      .filter(Boolean);
    if (parts.length > 0) {
      bio.innerHTML = parts.map(text => `<span class="bio-line">${text}</span>`).join('');
      bio.dataset.linesWrapped = 'true';
    }
  });
});

// ================= Contact Form: Email + Storage + CSV Export =================
(function() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const formStatus = document.getElementById('formStatus');

  // Configure EmailJS (fill these to enable sending)
  const EMAILJS_PUBLIC_KEY = '';
  const EMAILJS_SERVICE_ID = '';
  const EMAILJS_TEMPLATE_ID = '';
  const RECEIVER_EMAIL = '11anirudhkaila@gmail.com';

  // Init EmailJS if configured
  if (window.emailjs && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  function showStatus(type, message) {
    if (!formStatus) return;
    formStatus.className = 'form-status ' + (type || '');
    formStatus.textContent = message || '';
  }

  function validate(data) {
    const errors = {};
    if (!data.name || data.name.trim().length < 2) errors.name = 'Please enter your full name.';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(data.email || '')) errors.email = 'Please enter a valid email.';

    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[\s\-.]?[0-9]{3,}[\s\-.]?[0-9]{3,}$/;
    if (!phonePattern.test(data.phone || '') || (data.phone || '').replace(/\D/g, '').length < 7) {
      errors.phone = 'Please enter a valid phone number.';
    }

    if (!data.organization || data.organization.trim().length < 2) errors.organization = 'Please enter your organization.';

    if (!data.message || data.message.trim().length < 5) errors.message = 'Please enter a message.';

    return { isValid: Object.keys(errors).length === 0, errors };
  }

  function saveSubmission(data) {
    const key = 'alphascan_contact_submissions';
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push(data);
    localStorage.setItem(key, JSON.stringify(list));
  }

  function toCsv(rows) {
    const headers = ['Name','PhoneNumber','Organization','Email','Message','Timestamp'];
    const escape = (v) => {
      if (v == null) return '';
      const s = String(v).replace(/"/g, '""');
      return /[",\n]/.test(s) ? '"' + s + '"' : s;
    };
    const lines = [headers.join(',')];
    rows.forEach(r => {
      lines.push([
        escape(r.name),
        escape(r.phone),
        escape(r.organization),
        escape(r.email),
        escape(r.message),
        escape(r.timestamp)
      ].join(','));
    });
    return lines.join('\n');
  }

  async function sendEmail(data) {
    if (window.emailjs && EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
      try {
        const params = {
          to_email: RECEIVER_EMAIL,
          name: data.name,
          phone: data.phone,
          organization: data.organization,
          email: data.email,
          message: data.message,
          timestamp: data.timestamp
        };
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        return { ok: true };
      } catch (err) {
        console.error('EmailJS send failed', err);
        return { ok: false, error: 'Email service failed.' };
      }
    } else {
      // Fallback: open mail client
      const subject = encodeURIComponent('New Contact Submission - AlphaScan');
      const body = encodeURIComponent(
        `Name: ${data.name}\nPhone: ${data.phone}\nOrganization: ${data.organization}\nEmail: ${data.email}\nMessage: ${data.message}\nTimestamp: ${data.timestamp}`
      );
      const mailtoUrl = `mailto:${RECEIVER_EMAIL}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      return { ok: true, fallback: true };
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
      name: formData.get('name')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim(),
      organization: formData.get('organization')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
      timestamp: new Date().toISOString()
    };

    const { isValid, errors } = validate(data);
    if (!isValid) {
      showStatus('error', Object.values(errors)[0]);
      return;
    }

    showStatus('loading', 'Sending your message...');

    const emailResult = await sendEmail(data);

    // Save regardless of email success
    saveSubmission(data);

    if (emailResult.ok) {
      showStatus('success', emailResult.fallback ? 'Opened your email client. We also saved your submission.' : 'Message sent successfully!');
      form.reset();
    } else {
      showStatus('error', 'We saved your submission, but sending the email failed. Please try again later.');
    }
  });
})();

// Console welcome message
console.log('%c🔒 Welcome to Synack Replica!', 'color: #007bff; font-size: 20px; font-weight: bold;');
console.log('%cThis is a demonstration website showcasing cybersecurity services.', 'color: #666; font-size: 14px;'); 