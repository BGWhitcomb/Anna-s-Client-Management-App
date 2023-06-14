document.addEventListener("DOMContentLoaded", function() {
    const meetingForm = document.getElementById("meetingForm");
    const meetingTable = document.getElementById("meetingTable");

    // Function to handle form submission
    meetingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Retrieve form data
        const client = document.getElementById("client").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const location = document.getElementById("location").value;

        // Create table row
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        const timeCell = document.createElement("td");
        const clientCell = document.createElement("td");
        const locationCell = document.createElement("td");

        // Set cell values
        dateCell.textContent = date;
        timeCell.textContent = time;
        clientCell.textContent = client;
        locationCell.textContent = location;

        // Append cells to the row
        row.appendChild(dateCell);
        row.appendChild(timeCell);
        row.appendChild(clientCell);
        row.appendChild(locationCell);

        // Append row to the table
        meetingTable.querySelector("tbody").appendChild(row);

        // Clear form inputs
        meetingForm.reset();
    });
});
