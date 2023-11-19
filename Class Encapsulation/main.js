class User{
    #s;
    constructor(id,name,salary){
        this.i = id;
        this.n = name;
        this.#s = salary;
    }
    getSalary(){
        return parseInt(this.#s);
    }
    msg(){
        return "messag";
    }
}
// لا يتم توريث الخصائص الخاصة 
class Admin extends User{
    constructor(id,name,permissions){
        super(id,name)
        this.p = permissions;
    }
}

let user1 = new User(1,"Marwa","5000 jhjk");
let user2 = new Admin(2,"Maha",1);

console.log(user1);
console.log(user1.i+" "+user1.n);
console.log(user1.getSalary());

// console.log(user2);
// console.log(user2.i+" "+user2.n+" "+ user2.p);
// console.log(user2.msg());

