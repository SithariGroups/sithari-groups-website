document.addEventListener('DOMContentLoaded', () => {
    const eventsGrid = document.getElementById('events-grid');
    const classesGrid = document.getElementById('classes-grid');
    const instrumentsGrid = document.getElementById('instruments-grid');

    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('close-modal');

    // Image URLs for Events, Classes, Instruments
    const eventImages = [
        'images/event1.jpg', 'images/event2.jpg', 'images/event3.jpg', 
        'images/event4.jpg', 'images/event5.jpg', 'images/event6.jpg',
        'images/event7.jpg', 'images/event8.jpg', 
    ];

    const classImages = [
        'images/class1.jpg', 'images/class2.jpg', 'images/class3.jpg', 
        'images/class4.jpg', 'images/class5.jpg', 'images/class6.jpg',
        'images/class7.jpg', 'images/class8.jpg',
    ];

    const instrumentImages = [
        'images/instrument1.jpg', 'images/instrument2.jpg', 'images/instrument3.jpg', 
        'images/instrument4.jpg', 'images/instrument5.jpg', 'images/instrument6.jpg',
        'images/instrument7.jpg', 'images/instrument8.jpg',
    ];

    // YouTube video URLs for each category
    const eventVideos = [
        '<iframe width="560" height="315" src="https://youtu.be/7vfHbVCApu8?si=rrp9gkjjPgF8jVt6/embed/videoID1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
       
    ];

    const classVideos = [
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
     
    ];

    const instrumentVideos = [
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        
    ];

    // Function to load images dynamically
    function loadImages(grid, images, category) {
        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Gallery Image';
            img.classList.add('gallery-item');
            img.setAttribute('data-category', category);
            img.setAttribute('data-index', index); // Store index to identify later
            img.addEventListener('click', openModal);
            grid.appendChild(img);
        });
    }

    // Function to load YouTube videos dynamically
    function loadVideos(grid, videos, category) {
        videos.forEach((video, index) => {
            const videoContainer = document.createElement('div');
            videoContainer.innerHTML = video;
            videoContainer.classList.add('gallery-item');
            videoContainer.setAttribute('data-category', category);
            videoContainer.setAttribute('data-index', index); // Store index to identify later
            videoContainer.addEventListener('click', openModal);
            grid.appendChild(videoContainer);
        });
    }

    // Function to open the modal
    function openModal(event) {
        const target = event.target;
        const category = target.getAttribute('data-category');
        const index = target.getAttribute('data-index');

        if (category === 'event') {
            modalImage.src = eventImages[index];
            modalDescription.textContent = `Event Image ${index + 1}`;
            modalVideo.innerHTML = ''; // Clear video content
        } else if (category === 'class') {
            modalImage.src = classImages[index];
            modalDescription.textContent = `Class Image ${index + 1}`;
            modalVideo.innerHTML = ''; // Clear video content
        } else if (category === 'instrument') {
            modalImage.src = instrumentImages[index];
            modalDescription.textContent = `Instrument Image ${index + 1}`;
            modalVideo.innerHTML = ''; // Clear video content
        }

        // If it's a video
        if (target.tagName === 'IFRAME') {
            modalImage.src = ''; // Clear image content
            modalVideo.innerHTML = target.outerHTML;
            modalDescription.textContent = `Video ${index + 1}`;
        }

        modal.style.display = 'block'; // Show modal
    }

    // Close the modal when clicked on the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide modal
    });

    // Close the modal if clicked outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Load images and videos for each category
    loadImages(eventsGrid, eventImages, 'event');
    loadVideos(eventsGrid, eventVideos, 'event');

    loadImages(classesGrid, classImages, 'class');
    loadVideos(classesGrid, classVideos, 'class');

    loadImages(instrumentsGrid, instrumentImages, 'instrument');
    loadVideos(instrumentsGrid, instrumentVideos, 'instrument');
});
