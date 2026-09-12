const students = [
    {
        name: "Annesha",
        marks: 85
    },
    {
        name: "Maitry",
        marks: 75
    },
    {
        name: "Naziya",
        marks: 80
    },
    {
        name:"Taspia",
        marks: 70
    }
];
const getGrade = (marks) => {
    if(marks >= 80){
        return "A+";
    }else if (marks >= 70) {
        return "A";

    } else if (marks >= 60) {
        return "B";

    } else if (marks >= 50) {
        return "C";

    } else if (marks >= 40) {
        return "D";

    } else {
        return "F";
    }
};
for (const student of students){
    const grade = getGrade(student.marks);
    console.log(
    `${student.name} - Marks: ${student.marks} - Grade: ${grade}`);
}