document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const destinations = document.querySelectorAll('.destination');

        destinations.forEach(destination => {
            const destinationName = destination.querySelector('h3').textContent.toLowerCase();
            if (destinationName.includes(searchTerm)) {
                destination.style.display = 'block';
            } else {
                destination.style.display = 'none';
            }
        });
    });

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Booking successful!');
    });
});
