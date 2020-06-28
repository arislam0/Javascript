function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function() {
        document.write(this.name + "<br>");
        document.write(this.age + "<br>");
        document.write(this.cgpa + "<br>");
        document.write(this.lang + "<br>");
    }
}

var student1 = new Student("airful islam", 22, 3.84, ["Bengli", "Hindi", "English"]);
var student2 = new Student("rifat islam", 23, 3.4, ["Bengli", "Hindi", "English"]);
var student3 = new Student("lol islam", 24, 3.2, ["Bengli", "Hindi", "English"]);


student1.display();
student2.display();
student3.display();