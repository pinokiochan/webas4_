document.addEventListener('DOMContentLoaded', function () {
    const travelTypeForm = document.getElementById('travelTypeForm');
    const bookingForm = document.getElementById('bookingForm');
    const travelDetailsForm = document.getElementById('travelDetailsForm');


    document.getElementById('selectTravelTypeBtn').addEventListener('click', function () {
        const travelType = travelTypeForm.elements['travel-type'].value;
        if (travelType) {
            alert(`You have selected: ${travelType}`);
        } else {
            alert('Please select a travel type.');
        }
    });


    document.getElementById('submit').addEventListener('click', function () {
        const name = bookingForm.name.value;
        const email = bookingForm.email.value;
        const phone = bookingForm.phone.value;

        if (name && email && phone) {
            alert(`Booking Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
            bookingForm.reset(); 
        } else {
            alert('Please fill out all fields.');
        }
    });

 
    document.getElementById('bookTicketBtn').addEventListener('click', function () {
        const destination = travelDetailsForm.destination.value;
        const date = travelDetailsForm.date.value;
        const time = travelDetailsForm.time.value;
        const seats = travelDetailsForm.seats.value;

        if (destination && date && time && seats) {
            alert(`Travel Details:\nDestination: ${destination}\nDate: ${date}\nTime: ${time}\nSeats: ${seats}`);
            travelDetailsForm.reset(); 
        } else {
            alert('Please fill out all fields.');
        }
    });
});
