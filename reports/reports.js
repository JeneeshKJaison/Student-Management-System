// =========================
// SAMPLE DATA
// =========================

const students = [
    {
        id: 101,
        name: "Rahul",
        course: "CSE",
        marks: 85,
        attendance: 93
    },

    {
        id: 102,
        name: "Anu",
        course: "ECE",
        marks: 76,
        attendance: 84
    },

    {
        id: 103,
        name: "Arjun",
        course: "CSE",
        marks: 92,
        attendance: 67
    },

    {
        id: 104,
        name: "Meera",
        course: "IT",
        marks: 88,
        attendance: 91
    },

    {
        id: 105,
        name: "Vishnu",
        course: "CSE",
        marks: 69,
        attendance: 72
    }
];


// =========================
// GRADE
// =========================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 80) {
        return "A";
    }

    if (marks >= 70) {
        return "B";
    }

    if (marks >= 60) {
        return "C";
    }

    if (marks >= 50) {
        return "D";
    }

    return "F";
}


// =========================
// GRADE CSS CLASS
// =========================

function getGradeClass(marks) {

    if (marks >= 80) {
        return "grade-a";
    }

    if (marks >= 70) {
        return "grade-b";
    }

    if (marks >= 50) {
        return "grade-c";
    }

    return "grade-f";
}


// =========================
// SUMMARY
// =========================

function updateSummary(data) {

    const totalStudents = data.length;

    let totalMarks = 0;
    let totalAttendance = 0;

    data.forEach(student => {
        totalMarks += student.marks;
        totalAttendance += student.attendance;
    });


    const averageMarks =
        totalMarks / totalStudents;

    const averageAttendance =
        totalAttendance / totalStudents;


    const sortedStudents = [...data].sort(
        (a, b) => b.marks - a.marks
    );

    const topStudent = sortedStudents[0];


    document.getElementById("totalStudents").textContent =
        totalStudents;

    document.getElementById("averageMarks").textContent =
        averageMarks.toFixed(1) + "%";

    document.getElementById("averageAttendance").textContent =
        averageAttendance.toFixed(1) + "%";

    document.getElementById("topPerformer").textContent =
        topStudent ? topStudent.name : "-";
}


// =========================
// PERFORMANCE TABLE
// =========================

function displayPerformance(data) {

    const table =
        document.getElementById("performanceTable");

    table.innerHTML = "";


    data.forEach(student => {

        const row = document.createElement("tr");

        const grade = getGrade(student.marks);

        const gradeClass =
            getGradeClass(student.marks);


        row.innerHTML = `
            <td>${student.id}</td>

            <td>${student.name}</td>

            <td>${student.course}</td>

            <td>${student.marks}%</td>

            <td>
                <span class="grade ${gradeClass}">
                    ${grade}
                </span>
            </td>
        `;


        table.appendChild(row);
    });
}


// =========================
// ATTENDANCE
// =========================

function displayAttendance(data) {

    const container =
        document.getElementById("attendanceList");

    container.innerHTML = "";


    data.forEach(student => {

        const item =
            document.createElement("div");

        item.className = "attendance-item";


        const warningClass =
            student.attendance < 75
                ? "attendance-warning"
                : "";


        item.innerHTML = `
            <div class="student-info">

                <span class="student-name">
                    ${student.name}
                </span>

                <span class="student-id">
                    ID: ${student.id}
                </span>

            </div>

            <span class="attendance-value ${warningClass}">
                ${student.attendance}%
            </span>
        `;


        container.appendChild(item);
    });
}


// =========================
// TOP PERFORMERS
// =========================

function displayTopPerformers(data) {

    const container =
        document.getElementById("topPerformers");

    container.innerHTML = "";


    const topStudents =
        [...data]
            .sort((a, b) => b.marks - a.marks)
            .slice(0, 3);


    topStudents.forEach((student, index) => {

        const item =
            document.createElement("div");

        item.className = "performer";


        item.innerHTML = `
            <span class="rank">
                ${index + 1}
            </span>

            <div class="performer-info">

                <span class="performer-name">
                    ${student.name}
                </span>

                <span class="performer-course">
                    ${student.course}
                </span>

            </div>

            <span class="performer-marks">
                ${student.marks}%
            </span>
        `;


        container.appendChild(item);
    });
}


// =========================
// COURSE SUMMARY
// =========================

function updateCourseSummary() {

    const cseCount =
        students.filter(
            student => student.course === "CSE"
        ).length;


    const eceCount =
        students.filter(
            student => student.course === "ECE"
        ).length;


    const itCount =
        students.filter(
            student => student.course === "IT"
        ).length;


    document.getElementById("cseCount").textContent =
        cseCount;

    document.getElementById("eceCount").textContent =
        eceCount;

    document.getElementById("itCount").textContent =
        itCount;
}


// =========================
// DISPLAY REPORT
// =========================

function displayReport(data) {

    updateSummary(data);

    displayPerformance(data);

    displayAttendance(data);

    displayTopPerformers(data);

    updateCourseSummary();
}


// =========================
// COURSE FILTER
// =========================

const courseFilter =
    document.getElementById("courseFilter");


courseFilter.addEventListener("change", function () {

    const selectedCourse = this.value;


    if (selectedCourse === "all") {

        displayReport(students);

        return;
    }


    const filteredStudents =
        students.filter(
            student => student.course === selectedCourse
        );


    displayReport(filteredStudents);
});


// =========================
// INITIAL LOAD
// =========================

displayReport(students);