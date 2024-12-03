// Store attendance data
let attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || {};

function addStudent() {
    const studentName = document.getElementById('student-name').value.trim();
    const date = document.getElementById('attendance-date').value;
    
    if (!studentName || !date) {
        alert('Please enter both student name and date');
        return;
    }

    const studentList = document.getElementById('student-list');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${studentName}</td>
        <td id="status-${studentName.replace(/\s+/g, '')}"}>Not marked</td>
        <td>
            <button onclick="markAttendance('${studentName}', 'present')" class="present-btn">Present</button>
            <button onclick="markAttendance('${studentName}', 'absent')" class="absent-btn">Absent</button>
        </td>
    `;
    
    studentList.appendChild(row);
    document.getElementById('student-name').value = '';
}

function markAttendance(studentName, status) {
    const date = document.getElementById('attendance-date').value;
    
    // Create nested structure if it doesn't exist
    if (!attendanceData[date]) {
        attendanceData[date] = {};
    }
    
    // Store the attendance status
    attendanceData[date][studentName] = status;
    
    // Update the display
    const statusCell = document.getElementById(`status-${studentName.replace(/\s+/g, '')}`);
    statusCell.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    statusCell.className = `status-${status}`;
    
    // Save to localStorage
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
}

// Initialize date input with today's date
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('attendance-date').value = today;
}); 