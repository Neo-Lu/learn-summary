function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = { firstName: "嘿嘿", lastName: "李四" };
document.body.innerHTML = greeter(user);
