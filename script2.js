document.addEventListener('DOMContentLoaded', () => {
    const tipsList = document.getElementById('tipsList');
    const foodInput = document.getElementById('foodInput');
    const addFoodBtn = document.getElementById('addFoodBtn');
    const foodList = document.getElementById('foodList');
    const usernameInput = document.getElementById('usernameInput');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const userProfile = document.getElementById('userProfile');

    // Sample tips
    const tips = [
        "Stay hydrated, but consult your doctor for daily water intake.",
        "Limit salt intake to help manage blood pressure.",
        "Eat more fruits and vegetables to support kidney health.",
        "Avoid processed foods high in phosphorus and potassium.",
        "Monitor your blood pressure and glucose levels regularly."
    ];

    // Display daily tips
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Add food to diary
    addFoodBtn.addEventListener('click', () => {
        const foodItem = foodInput.value.trim();
        if (foodItem) {
            const li = document.createElement('li');
            li.textContent = foodItem;
            foodList.appendChild(li);
            foodInput.value = ''; // Clear input
        }
    });

    // Save user profile
    saveProfileBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            userProfile.textContent = `Hello, ${username}! Welcome to your Kidney Health Tracker.`;
            usernameInput.value = ''; // Clear input
        }
    });
});
// Existing code...

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    const reminderTimeInput = document.getElementById('reminderTime');
    const setReminderBtn = document.getElementById('setReminderBtn');
    const reminderMessage = document.getElementById('reminderMessage');

    // Set a reminder
    setReminderBtn.addEventListener('click', () => {
        const minutes = parseInt(reminderTimeInput.value);
        if (!isNaN(minutes) && minutes > 0) {
            const delay = minutes * 60 * 1000; // Convert minutes to milliseconds
            reminderMessage.textContent = `Reminder set for ${minutes} minutes.`;
            reminderTimeInput.value = ''; // Clear input

            setTimeout(() => {
                alert(`Time to log your food or drink water!`);
            }, delay);
        } else {
            reminderMessage.textContent = `Please enter a valid number of minutes.`;
        }
    });
});
