const averageGrade = 77;

let message;

if (averageGrade >= 0 && averageGrade < 60) {
    message = 'Незадовільно';
} else if (averageGrade >= 60 && averageGrade <= 70) {
    message = 'Задовільно';
} else if (averageGrade >= 71 && averageGrade <= 80) {
    message = 'Добре';
} else if (averageGrade >= 81 && averageGrade <= 90) {
    message = 'Дуже добре';
} else if (averageGrade >= 91 && averageGrade <= 100) {
    message = 'Відмінно';
} else {
    message = 'Задайте валідне значення від 0 до 100';
}

console.log(message);