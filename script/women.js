document.addEventListener('DOMContentLoaded', () => {
    // Quick View Functionality
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    const quickViewOverlay = document.createElement('div');
    quickViewOverlay.className = 'quick-view-overlay';
    document.body.appendChild(quickViewOverlay);
  
    quickViewButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const card = button.closest('.product-card');
        const image = card.querySelector('img').src;
        const title = card.querySelector('h3').textContent;
        const price = card.querySelector('.price').textContent;
        
        showQuickView(image, title, price);
      });
    });
  
    function showQuickView(image, title, price) {
      const modal = document.createElement('div');
      modal.className = 'quick-view-modal';
      modal.innerHTML = `
        <button class="quick-view-close">×</button>
        <div class="quick-view-content">
          <div class="quick-view-image">
            <img src="${image}" alt="${title}">
          </div>
          <div class="quick-view-details">
            <h2>${title}</h2>
            <p class="quick-view-price">${price}</p>
            
            <div class="quick-view-colors">
              <h3>Colors</h3>
              <div class="color-options">
                <button class="color-option" style="background: #000000;"></button>
                <button class="color-option" style="background: #4A90E2;"></button>
                <button class="color-option" style="background: #9B4D73;"></button>
              </div>
            </div>
            
            <div class="quick-view-sizes">
              <h3>Size</h3>
              <div class="size-options">
                <button class="size-option">XS</button>
                <button class="size-option">S</button>
                <button class="size-option">M</button>
                <button class="size-option">L</button>
                <button class="size-option">XL</button>
              </div>
            </div>
            
            <button class="add-to-cart-btn">Add to Cart</button>
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
  
      // Color selection
      const colorOptions = modal.querySelectorAll('.color-option');
      colorOptions.forEach(option => {
        option.addEventListener('click', () => {
          colorOptions.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
        });
      });
  
      // Size selection
      const sizeOptions = modal.querySelectorAll('.size-option');
      sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
          sizeOptions.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
        });
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
  
    // Add to cart animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.add('added');
        button.textContent = 'Added to Cart';
        
        setTimeout(() => {
          button.classList.remove('added');
          button.textContent = 'Add to Cart';
        }, 2000);
      });
    });
  });