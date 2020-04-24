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

enum Role { ADMIN, SWE, SDE };


const person = {
    name: 'Mohamed',
    age: 22,
    hobbies: ['Football', 'Running', 'Video Games'],
    role: Role.SDE
};

console.log(person.name);

for (const hobby of person.hobbies){
    // TS already know that hobby is String
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()) // !!! error !!!
}

console.log(person.role)