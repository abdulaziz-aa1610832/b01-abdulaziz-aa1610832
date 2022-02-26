import promptSync from 'prompt-sync';
const prompt = promptSync()

const getRandomInt=(min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var students = []
var name, gender, grade, age;

for (let i = 0; i < 5; i++) {
    name = prompt('Enter student ' + (i + 1) + ' name: ');
    gender = prompt('Enter student ' + (i + 1) + ' gender: ');
    grade = Math.floor(Math.random() * 100);
    age = getRandomInt(17, 35);
    students.push({ name, gender, grade, age })
}
const ages = students.map((s) => s.age)

const highestGrade = () => {
    return Math.max.apply(Math, students.map((s) => s.grade))
}
const youngestStudent = () => {
    return Math.min.apply(Math, ages)
}
const oldestStudent = () => {
    return Math.max.apply(Math, ages)
}
const ageAvg = () => {
    const total = ages.reduce((acc, c) => acc + c, 0);
    return total / ages.length;
}
const ageMedian = () => {
    ages.sort((a, b) => a - b);
    var half = Math.floor(ages.length / 2);
    if (ages.length % 2)
        return ages[half];
    return (ages[half - 1] + ages[half]) / 2.0;
}
const findVariance = () => {
    if (!ages.length) {
        return 0;
    };
    const sum = ages.reduce((acc, val) => acc + val);
    const { length: num } = ages;
    const median = sum / num;
    let variance = 0;
    ages.forEach(num => {
        variance += ((num - median) * (num - median));
    });
    variance /= num;
    return variance;
};

console.log(students);
console.log("highestGrade:",highestGrade());
console.log("youngestStudent:",youngestStudent(),"oldestStudent:", oldestStudent());
console.log("ageAvg:",ageAvg());
console.log("ageMedian:",ageMedian());
console.log("findVariance:",findVariance());