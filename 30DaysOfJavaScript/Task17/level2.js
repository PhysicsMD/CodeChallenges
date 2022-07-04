//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
student = {
    firstname:'Asav',
    lastname:'Wriggly',
    age:20,
    skills:['JS','HTML'],
    country:'US',
    enrolled:{
        CS126: 'Python',
        CS222: 'C'
    }
}
localStorage.setItem('student', student)
