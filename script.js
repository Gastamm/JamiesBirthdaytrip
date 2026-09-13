// Save a choice to localStorage
function saveChoice(key, value) {
    localStorage.setItem(key, value);
}

// Go to next page
function goNext(page) {
    window.location.href = page;
}

// Go back to previous page
function goBack(page) {
    window.location.href = page;
}

// Generate final itinerary (used later)
function generateItinerary() {
    const arrival = localStorage.getItem('arrival') || 'Not selected';
    const dinner = localStorage.getItem('dinner') || 'Not selected';
    const drinks = localStorage.getItem('drinks') || 'Not selected';
    const day2 = localStorage.getItem('day2') || 'Not selected';
    const day3 = localStorage.getItem('day3') || 'Not selected';

    document.getElementById('arrival-choice').innerText = arrival;
    document.getElementById('dinner-choice').innerText = dinner;
    document.getElementById('drinks-choice').innerText = drinks;
    document.getElementById('day2-choice').innerText = day2;
    document.getElementById('day3-choice').innerText = day3;
}

// Restart the whole experience
function restart() {
    localStorage.clear();
    window.location.href = "index.html";
}
