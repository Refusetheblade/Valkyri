document.addEventListener('DOMContentLoaded', () => {
    // Collection Card Quick View
    const collectionCards = document.querySelectorAll('.collection-card');
    const quickViewOverlay = document.createElement('div');
    quickViewOverlay.className = 'quick-view-overlay';
    document.body.appendChild(quickViewOverlay);
  
    collectionCards.forEach(card => {
      card.addEventListener('click', () => {
        const image = card.querySelector('img').src;
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        
        showQuickView(image, title, description);
      });
    });
  
    function showQuickView(image, title, description) {
      const modal = document.createElement('div');
      modal.className = 'quick-view-modal';
      modal.innerHTML = `
        <button class="quick-view-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="quick-view-content">
          <div class="quick-view-image">
            <img src="${image}" alt="${title}" style="width: 100%; height: auto;">
          </div>
          <div class="quick-view-details">
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="quick-view-options" style="margin-top: 1rem;">
              <h3>Available Sizes</h3>
              <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                <button style="padding: 0.5rem 1rem; border: 1px solid #ccc;">S</button>
                <button style="padding: 0.5rem 1rem; border: 1px solid #ccc;">M</button>
                <button style="padding: 0.5rem 1rem; border: 1px solid #ccc;">L</button>
                <button style="padding: 0.5rem 1rem; border: 1px solid #ccc;">XL</button>
              </div>
            </div>
            <button style="width: 100%; padding: 1rem; background: var(--mens-primary); color: white; border: none; border-radius: 4px; margin-top: 2rem; cursor: pointer;">
              Add to Cart
            </button>
          </div>
        </div>
      `;
  
      quickViewOverlay.innerHTML = '';
      quickViewOverlay.appendChild(modal);
      quickViewOverlay.style.display = 'flex';
  
      // Close button functionality
      const closeBtn = modal.querySelector('.quick-view-close');
      closeBtn.addEventListener('click', () => {
        quickViewOverlay.style.display = 'none';
      });
  
      // Close on overlay click
      quickViewOverlay.addEventListener('click', (e) => {
        if (e.target === quickViewOverlay) {
          quickViewOverlay.style.display = 'none';
        }
      });
    }
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
  
    images.forEach(img => imageObserver.observe(img));
  });