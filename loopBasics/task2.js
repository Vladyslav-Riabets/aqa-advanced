const averageGrade = 0;

let message;

switch (true) {
    case averageGrade >= 0 && averageGrade < 60:
        message = 'Незадовільно';
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        message = 'Задовільно';
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        message = 'Добре';
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        message = 'Дуже добре';
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        message = 'Відмінно';
        break;
    default:
        message = 'Задайте валідне значення від 0 до 100';
}

console.log(message);