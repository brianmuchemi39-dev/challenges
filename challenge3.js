let marks = [78, 45, -5, 92, 60, 101, 55, 38];

// Counters and tracking variables
let validCount = 0;
let passCount = 0;
let failCount = 0;
let totalMarks = 0;
let highestMark = -1;
let highestStudent = 0;

for (let i = 0; i < marks.length; i++) {
    let studentNum = i + 1; // Student numbers start at 1
    let currentMark = marks[i];

    // 2. Check for invalid marks
    if (currentMark < 0 || currentMark > 100) {
        console.log(`Student ${studentNum}: invalid mark, skipped`);
        continue;
    }

    // Update valid mark statistics
    validCount++;
    totalMarks += currentMark;

    // Track highest mark
    if (currentMark > highestMark) {
        highestMark = currentMark;
        highestStudent = studentNum;
    }

    // 3. Determine grade using else if
    let grade = "";
    if (currentMark >= 80) {
        grade = "A";
    } else if (currentMark >= 70) {
        grade = "B";
    } else if (currentMark >= 60) {
        grade = "C";
    } else if (currentMark >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Determine Pass or Fail
    let status = "";
    if (currentMark >= 50) {
        passCount++;
        status = "Pass";
    } else {
        failCount++;
        status = "Fail";
    }

    console.log(`Student ${studentNum}: ${currentMark} - Grade ${grade} (${status})`);
}

// 5. Calculate average and print final summary
let average = (totalMarks / validCount).toFixed(1);

console.log("--------------------");
console.log(`Valid marks: ${validCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Average: ${average}`);
console.log(`Highest: ${highestMark} (Student ${highestStudent})`);