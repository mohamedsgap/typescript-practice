/*
const person: {
    name: string;
    age: number;
    hobbies: string[];
    // new type is Tuple (fixed length and type) //
    role: [number, string]
} = {
    name: 'Mohamed',
    age: 22,
    hobbies: ['Football', 'Running', 'Video Games'],
    role: [3, 'SDE']
};

*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SWE"] = 1] = "SWE";
    Role[Role["SDE"] = 2] = "SDE";
})(Role || (Role = {}));
;
var person = {
    name: 'Mohamed',
    age: 22,
    hobbies: ['Football', 'Running', 'Video Games'],
    role: Role.SDE
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // TS already know that hobby is String
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()) // !!! error !!!
}
console.log(person.role);
