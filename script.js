document.getElementById('submit-recommendation').addEventListener('click', function() {
    const newRecommendation = document.getElementById('new-recommendation').value;
    if (newRecommendation) {
        const li = document.createElement('li');
        li.textContent = newRecommendation;
        document.getElementById('recommendation-list').appendChild(li);
        alert("Recommendation added!");
        document.getElementById('new-recommendation').value = ''; // Clear input
    } else {
        alert("Please enter a recommendation.");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
