function generateSlot() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    if (!startTime || !endTime) {
        alert('Please select both start and end times');
        return;
    }

    const startDate = new Date(`1970-01-01T${startTime}:00`);
    const endDate = new Date(`1970-01-01T${endTime}:00`);

    if (startDate >= endDate) {
        alert('End time must be later than start time');
        return;
    }

    const minTime = startDate.getTime();
    const maxTime = endDate.getTime() - (2 * 60 * 60 * 1000); // Subtract 2 hours in milliseconds

    if (minTime > maxTime) {
        alert('The time range is too short to fit a 2-hour slot');
        return;
    }

    const randomStartTime = new Date(minTime + Math.random() * (maxTime - minTime));
    const randomEndTime = new Date(randomStartTime.getTime() + (2 * 60 * 60 * 1000));

    const options = { hour: '2-digit', minute: '2-digit' };
    document.getElementById('result').textContent = `Random Slot: ${randomStartTime.toLocaleTimeString([], options)} - ${randomEndTime.toLocaleTimeString([], options)}`;
}
