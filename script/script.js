document.addEventListener('DOMContentLoaded', () => {
  const navItems = {
    men: {
      title: 'MEN',
      sections: [
        {
          title: 'CLOTHING',
          items: [
            { name: 'Jackets', link: '/men/clothing/jackets' },
            { name: 'Pants', link: '/men/clothing/pants' },
            { name: 'Base Layers', link: '/men/clothing/base-layers' },
            { name: 'Fleece', link: '/men/clothing/fleece' },
            { name: 'Shirts', link: '/men/clothing/shirts' },
            { name: 'Shorts', link: '/men/clothing/shorts' },
            { name: 'Vests', link: '/men/clothing/vests' },
            { name: 'Rain Shells', link: '/men/clothing/rain-shells' },
            { name: 'Insulated Jackets', link: '/men/clothing/insulated-jackets' },
          ],
        },
        {
          title: 'ACTIVITY',
          items: [
            { name: 'Alpine & Climbing', link: '/men/activity/alpine-climbing' },
            { name: 'Ski & Snowboard', link: '/men/activity/ski-snowboard' },
            { name: 'Trail Running', link: '/men/activity/trail-running' },
            { name: 'Hiking & Trekking', link: '/men/activity/hiking-trekking' },
            { name: 'Lifestyle', link: '/men/activity/lifestyle' },
            { name: 'Training & Fitness', link: '/men/activity/training-fitness' },
          ],
        },
        {
          title: 'FEATURED',
          items: [
            { name: 'New Arrivals', link: '/men/featured/new-arrivals' },
            { name: 'Best Sellers', link: '/men/featured/best-sellers' },
            { name: 'Essential Collection', link: '/men/featured/essential-collection' },
            { name: 'Sale', link: '/men/featured/sale' },
            { name: 'Sustainable Materials', link: '/men/featured/sustainable-materials' },
          ],
        },
      ],
    },
    women: {
      title: 'WOMEN',
      sections: [
        {
          title: 'CLOTHING',
          items: [
            { name: 'Jackets', link: '/women/clothing/jackets' },
            { name: 'Pants', link: '/women/clothing/pants' },
            { name: 'Base Layers', link: '/women/clothing/base-layers' },
            { name: 'Fleece', link: '/women/clothing/fleece' },
            { name: 'Shirts', link: '/women/clothing/shirts' },
            { name: 'Shorts', link: '/women/clothing/shorts' },
            { name: 'Vests', link: '/women/clothing/vests' },
            { name: 'Rain Shells', link: '/women/clothing/rain-shells' },
            { name: 'Insulated Jackets', link: '/women/clothing/insulated-jackets' },
          ],
        },
        {
          title: 'ACTIVITY',
          items: [
            { name: 'Alpine & Climbing', link: '/women/activity/alpine-climbing' },
            { name: 'Ski & Snowboard', link: '/women/activity/ski-snowboard' },
            { name: 'Trail Running', link: '/women/activity/trail-running' },
            { name: 'Hiking & Trekking', link: '/women/activity/hiking-trekking' },
            { name: 'Lifestyle', link: '/women/activity/lifestyle' },
            { name: 'Training & Fitness', link: '/women/activity/training-fitness' },
          ],
        },
        {
          title: 'FEATURED',
          items: [
            { name: 'New Arrivals', link: '/women/featured/new-arrivals' },
            { name: 'Best Sellers', link: '/women/featured/best-sellers' },
            { name: 'Essential Collection', link: '/women/featured/essential-collection' },
            { name: 'Sale', link: '/women/featured/sale' },
            { name: 'Sustainable Materials', link: '/women/featured/sustainable-materials' },
          ],
        },
      ],
    },
    gear: {
      title: 'GEAR',
      sections: [
        {
          title: 'EQUIPMENT',
          items: [
            { name: 'Backpacks', link: '/gear/equipment/backpacks' },
            { name: 'Climbing Gear', link: '/gear/equipment/climbing-gear' },
            { name: 'Trekking Poles', link: '/gear/equipment/trekking-poles' },
            { name: 'Gloves', link: '/gear/equipment/gloves' },
            { name: 'Headwear', link: '/gear/equipment/headwear' },
            { name: 'Socks', link: '/gear/equipment/socks' },
          ],
        },
        {
          title: 'ACCESSORIES',
          items: [
            { name: 'Sunglasses', link: '/gear/accessories/sunglasses' },
            { name: 'Watches', link: '/gear/accessories/watches' },
            { name: 'Water Bottles', link: '/gear/accessories/water-bottles' },
            { name: 'First Aid', link: '/gear/accessories/first-aid' },
            { name: 'Navigation', link: '/gear/accessories/navigation' },
            { name: 'Camping', link: '/gear/accessories/camping' },
          ],
        },
        {
          title: 'BAGS',
          items: [
            { name: 'Daypacks', link: '/gear/bags/daypacks' },
            { name: 'Climbing Packs', link: '/gear/bags/climbing-packs' },
            { name: 'Travel Bags', link: '/gear/bags/travel-bags' },
            { name: 'Duffels', link: '/gear/bags/duffels' },
            { name: 'Ski Bags', link: '/gear/bags/ski-bags' },
          ],
        },
      ],
    },
    activity: {
      title: 'ACTIVITY',
      sections: [
        {
          title: 'MOUNTAIN',
          items: [
            { name: 'Alpine Climbing', link: '/activity/mountain/alpine-climbing' },
            { name: 'Rock Climbing', link: '/activity/mountain/rock-climbing' },
            { name: 'Ice Climbing', link: '/activity/mountain/ice-climbing' },
            { name: 'Mountaineering', link: '/activity/mountain/mountaineering' },
            { name: 'Ski Touring', link: '/activity/mountain/ski-touring' },
          ],
        },
        {
          title: 'OUTDOOR',
          items: [
            { name: 'Hiking', link: '/activity/outdoor/hiking' },
            { name: 'Camping', link: '/activity/outdoor/camping' },
            { name: 'Trail Running', link: '/activity/outdoor/trail-running' },
            { name: 'Trekking', link: '/activity/outdoor/trekking' },
            { name: 'Travel', link: '/activity/outdoor/travel' },
          ],
        },
        {
          title: 'SNOW SPORTS',
          items: [
            { name: 'Skiing', link: '/activity/snow-sports/skiing' },
            { name: 'Snowboarding', link: '/activity/snow-sports/snowboarding' },
            { name: 'Backcountry', link: '/activity/snow-sports/backcountry' },
            { name: 'Resort', link: '/activity/snow-sports/resort' },
            { name: 'Nordic', link: '/activity/snow-sports/nordic' },
          ],
        },
      ],
    },
    technology: {
      title: 'TECHNOLOGY',
      sections: [
        {
          title: 'MATERIALS',
          items: [
            { name: 'GORE-TEX', link: '/technology/materials/gore-tex' },
            { name: 'PrimaLoft', link: '/technology/materials/primaloft' },
            { name: 'Polartec', link: '/technology/materials/polartec' },
            { name: 'Merino Wool', link: '/technology/materials/merino-wool' },
            { name: 'Recycled Materials', link: '/technology/materials/recycled-materials' },
          ],
        },
        {
          title: 'INNOVATIONS',
          items: [
            { name: 'Waterproof Tech', link: '/technology/innovations/waterproof-tech' },
            { name: 'Insulation', link: '/technology/innovations/insulation' },
            { name: 'Breathability', link: '/technology/innovations/breathability' },
            { name: 'Durability', link: '/technology/innovations/durability' },
          ],
        },
        {
          title: 'LEARN',
          items: [
            { name: 'Material Guide', link: '/technology/learn/material-guide' },
            { name: 'Size Guide', link: '/technology/learn/size-guide' },
            { name: 'Care Instructions', link: '/technology/learn/care-instructions' },
            { name: 'Sustainability', link: '/technology/learn/sustainability' },
          ],
        },
      ],
    },
  };

  const megaMenu = document.getElementById('mega-menu');
  const menuGrid = document.querySelector('.menu-grid');
  const overlay = document.querySelector('.dropdown-overlay');
  let activeDropdown = null;

  // Create menu content
  function createMenuContent(category) {
    const data = navItems[category];
    menuGrid.innerHTML = '';

    data.sections.forEach(section => {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'menu-section';

      sectionEl.innerHTML = `
        <h3>${section.title}</h3>
        <ul>
          ${section.items.map(item => `
            <li><a href="${item.link}">${item.name}</a></li>
          `).join('')}
        </ul>
      `;

      menuGrid.appendChild(sectionEl);
    });

    // Add featured image
    const imageSection = document.createElement('div');
    imageSection.innerHTML = `
      <div class="menu-image-container">
        <img
          src="https://images.unsplash.com/photo-1605540436563-5bca919ae766"
          alt="Featured Collection"
          class="menu-featured-image"
        />
      </div>
    `;
    menuGrid.appendChild(imageSection);
  }

  // Handle hover events
  document.querySelectorAll('.nav-item').forEach(item => {
    const category = item.dataset.category;

    item.addEventListener('mouseenter', () => {
      if (activeDropdown !== category) {
        activeDropdown = category;
        createMenuContent(category);
        megaMenu.classList.add('active');
        overlay.classList.add('active');
      }
    });
  });

  // Handle mouse leave
  megaMenu.addEventListener('mouseleave', () => {
    activeDropdown = null;
    megaMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Mobile menu button
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      console.log('Mobile menu clicked');
    });
  }
});
