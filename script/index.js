class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    const sum = this.getMarksSum();
    const AverageMark = sum / this.marks.length;
    return AverageMark;
  }

  getMarksSum() {

    let marksSum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      marksSum += this.marks[i];
    }
    return marksSum;
  }
}

class Group {
  _students = [];


  addStudent(student) {
    if (student instanceof Student) {
      this._students.push(student);
    }
  }

  get students() {
    return this._students;
  }


  isStudent(student) {
    return student instanceof Student;
  }

  getAverageMark() {
    const sum = this.getAverageMarksSum();
    const AverageMark = sum / this._students.length;
    return AverageMark;
  }

  getAverageMarksSum() {
    let AverageMarksSum = 0;
    for (let i = 0; i < this._students.length; i++) {
      const student = this._students[i];
      { AverageMarksSum += student.getAverageMark();
      }
    }
    return AverageMarksSum;


  }
}
const group = new Group();


group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10, ])); // средний балл = 8


console.log(group.students.length === 3);
group.addStudent({}); // игнорируем добавление невалидных данных
console.log(group.students.length === 3);

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);

group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);

// console.log(group.students);
// console.log(group.getAverageMark());
// console.log(group.getAverageMarksSum());
