///Об'єктно-орієнтоване програмування (ООП)
/////1 Наслідування.........////////
// const Animal = {
// 	name: "Тварина",
// 	voice: "Звук",
// 	say(){
// 		console.log(`${this.name} каже ${this.voice}`);
// 	},
// };
// const dog = {...Animal};

// dog.name = "Бобік";
// dog.voice = "Гав";
// чи можна так 
// const dog = {...Animal, name: "Бобік"}; 
// dog.voice = "Гав";

// dog.say();

///// буде {Бобік каже Звук}
// console.log(dog);
//// буде {Бобік каже Гав
// { name: 'Бобік', voice: 'Гав', say: [Function: say] }}

// const dog = Object.create(Animal);
// dog.name = "Бобік";
// dog.voice = "Гав";
// dog.say();
// console.log(dog);

// Animal.go = function () {
// 	console.log(`${this.name} біжить`);
// }
// dog.go();
///// буде 
// Бобік каже Гав
// { name: 'Бобік', voice: 'Гав' }
// Бобік біжить

// console.log(dog.__proto__); /// Обьєкт прототипу отримаємо
///// буде
// {
// 	name: 'Тварина',
// 	voice: 'Звук',
// 	say: [Function: say],
// 	go: [Function (anonymous)]
//   }
//але краще робити так.
// console.log(Object.getPrototypeOf(dog));
//Перевірка обєкта на прототип
// console.log(Object.getPrototypeOf(dog) === Animal);
// console.log(Animal.isPrototypeOf(dog));
///// буде 
// true
// true
//Зміна прототипу (якщо треба прибрати то замість прототипу ставимо null)
// Object.setPrototypeOf(dog, { asd: "123"})
///// буде { asd: '123' }
// Object.setPrototypeOf(dog, null)
// console.log(Object.getPrototypeOf(dog));
///// буде null

/////2 Инкапсуляція.........////////

// Визначення налаштування властивості
// const Animal = {
// 	name: "Тварина",
// 	voice: "Звук",
// 	say(){
// 		console.log(`${this.name} каже ${this.voice}`);
// 	},
// 	};
// const dog = Object.create(Animal);
// dog.name = "Бобік";
// dog.voice = "Гав";
// dog.say();
// console.log(dog);
//зараз ми можемо
// dog.age = 10;
// console.log(dog.age);
// dog.age = 12;
// console.log(dog.age);
// delete dog.age;
// console.log(dog.age);
///// буде
// 10
// 12
// undefined
// краще так
// Object.defineProperty(dog, "_age", {
// 	value: 5,
// 	writable: true,
// // 	configurable: true,
// // 	enumerable: true,
// });
// Object.defineProperty(dog, "age", {
// 	set(value) {              // отримання і зміна значень
// 		this._age = value * 2;
// 	},
// 	get(){
// 		// return `${this._age || 0} років`; //приватна власттвість _age || 0
// 		return `${this._age} років`; 
// 	},
// });
// console.log(dog.age);
// dog.age = 15;
// console.log(dog.age);
// // console.log(dog._age);
// delete dog._age;
// console.log(dog.age);
///// будеnpm
// 0 років
// 30 років
// 30 років
//30
///або коли потрібно визначити налаштування через true false(за замовчуванням)
// чи можна зьінювати writable
// чи можна змінювати та видаляти configurable
// буде чи ні ітеруватисяб enumerable
// Object.defineProperty(dog, "location", {
// 	value: "Ukraine",
// 	writable: true,
// 	configurable: true,
// 	enumerable: true,
// });
// console.log(dog.location);
// // delete dog.location;
// console.log(dog.location);
// console.log(Object.keys(dog));
/// буде  якщо не хочему щоб віделялося чи ітерувалося видаляємо той параметр
// Ukraine									writable,configurable, enumerable
// undefined    
// // [ 'name', 'voice', 'location' ]
// Object.defineProperty(dog, "_space", {
// 	value: 0,
// 	writable: true,
// // 	configurable: true,
// // 	enumerable: true,
// });
// Object.defineProperty(dog, "space", {
// 	set(value) {             
// 		this._space = value * 4;
// 	},
// 	get(){
// 		return `${this._space} px`; 
// 	},
// });
// console.log(dog.space);
// dog.space = 4;
// console.log(dog.space);
/// буде
// 0 px
// 16 px
//Отримання налаштування властивості
// console.log(Object.getOwnPropertyDescriptors(dog, "space"));
/// буде
// {
// 	name: {
// 	  value: 'Бобік',
// 	  writable: true,
// 	  enumerable: true,
// 	  configurable: true
// 	},
// 	voice: {
// 	  value: 'Гав',
// 	  writable: true,
// 	  enumerable: true,
// 	  configurable: true
// 	},
// 	_age: { value: 5, writable: true, enumerable: false, configurable: false },
// 	age: {
// 	  get: [Function: get],
// 	  set: [Function: set],
// 	  enumerable: false,
// 	  configurable: false
// 	},
// 	_space: { value: 16, writable: true, enumerable: false, configurable: false },
// 	space: {
// 	  get: [Function: get],
// 	  set: [Function: set],
// 	  enumerable: false,
// 	  configurable: false
// 	}
//   }
//Отримання налаштування властивості
// console.log(dog.hasOwnProperty("voice"));
// console.log(dog.voice);
/// буде
// true
// Гав

/////3 Поліморфізм........./////

// const Tag = {
// 	render(value) {
// 		return `<>${value}<>`;
// 	},
// className: null,
// };
// const Button = Object.create(Tag);
// Button.render = function (value = ""){
//  return `<button style="${this.style}">${value}<button>`;
// };

// const mainButton = Object.create(Button, {
// 	style: {
// 		value: "background: red;",
// 		writable: true,
// 	},
// });
// console.log(mainButton.render("Click"))
// / буде:  <button style="background: red;">Click<button>
// const Input = Object.create(Tag);
// Input.render = function (){
//  return `<input placeholder="${this.placeholder}" style="${this.style}"/>`;
// };
// const loginInput = Object.create(Input, {
// 	style: {
// 		value: "border: 1px solid red;",
// 		writable: true,
// 	},
// 	placeholder: {
// 		value: "Login....",	
// 	},
// });
// console.log(loginInput.render());
/// буде:   <input placeholder="Login...." style="border: 1px solid red;"/>

// const serverRequest = {
// 	data: null,
// 	getData() {
// 		////....выдправляэ на сервер
// 	},
// 	render(){
// 		this.data = this.getData();

// 		return ////....вивід данних
// 	},
// };

// const Page = {
// 	components: [],   //////компоненти верстки
// 	path: "/.../.../",  /////шлях
// 	render() {
// 		///...            //////відображення верстки сторінки
// 	},
// };

/////4 Абстракція........./////

// const Tag = {
// 	render(value) {
// 		return `<>${value}<>`;
// 	},
// 	className: null,
// };
// const Button = Object.create(Tag);
// Button.render = function (value = ""){
//  return `<button class="${this.className}" style="${this.style}">${value}<button>`;
// };
// const mainButton = Object.create(Button, {
// 	style: {
// 		value: "background: red;",
// 		writable: true,
// 	},
// 	className: {
// 		value: "my-button",
// 	},
// });
// console.log(mainButton.render())
// console.log(loginInput.className);
/// буде:  <button class="my-button" style="background: red;"><button>   null 

//////...Функція конструктор (NEW) ........./////

// const User = {
// 	login: null,
// 	password: null,
// 	role: null,
// 	age: null,
// };

///......
// const registerData = {
// 	login: "Ivan",
// 	password: "123qwe",
// };
// const user = Object.create(User, {
// 	login: {
// 		value: registerData.login,
// 	},
// 	password: {
// 		value: registerData.password,
// 	},
// 	verify: {
// 		value(password){
// 		return this.password === password;  
// 		///перевіряемо пароль з тим що прийшов
// 	},
// },
// });
// console.log(user.verify("test"));
/// буде  false
///Якщо потрібно через виликий кусок коду створити ще користувача буде не зручно
// const adminData = {
// 	login: "Ivan",
// 	password: "123qwe",
// 	isAdmin: true,
// };
// const adminuser = Object.create(User, {
// 	login: {
// 		value: registerData.login,
// 	},
// 	password: {
// 		value: registerData.password,
// 	},
// 	role: {
// 		// value: isAdmin ? "Admin" : "User",
// 		////перевірка на адміна
// 	},
// 	verify: {
// 		value(password){
// 		return this.password === password;  
// 		///перевіряемо пароль з тим що прийшов
// 	},
// },
// });
// console.log(adminuser);
///тому робити простіше так
// const User = {
// 	login: null,
// 	password: null,
// 	role: null,
// 	age: null,
// };

// function createUser({login, password, isAdmin}){
// 	return Object.create(User, {
// 		login: {
// 			value: login,
// 		},
// 		password: {
// 			value: password,
// 		},
// 		role: {
// 			value: isAdmin ? "Admin" : "User",
// 			////перевірка на адміна
// 		},
// 	})
// }
// const registerData = {
// 	login: "Ivan",
// 	password: "123qwe",
// };
///тоді це не потрібно 
// const user = Object.create(User, {
// 	login: {
// 		value: registerData.login,
// 	},
// 	password: {
// 		value: registerData.password,
// 	},
// 	verify: {
// 		value(password){
// 		return this.password === password;  
// 		///перевіряемо пароль з тим що прийшов
// 	},
// },
// });
// const adminData = {
// 	login: "Ivan",
// 	password: "123qwe",
// 	isAdmin: true,
// };
// const adminuser = Object.create(User, {
// 	login: {
// 		value: registerData.login,
// 	},
// 	password: {
// 		value: registerData.password,
// 	},
// 	role: {
// 		// value: isAdmin ? "Admin" : "User",
// 		////перевірка на адміна
// 	},
// 	verify: {
// 		value(password){
// 		return this.password === password;  
// 		///перевіряемо пароль з тим що прийшов
// 	},
// },
// });
//можно зробити так 
// const adminData = {
// 	login: "Ivan",
// 	password: "123qwe",
// 	isAdmin: true,
// };
// const admin = createUser(adminData);
// const registerData = {
// 	login: "Ivan",
// 	password: "123qwe",
// };
// console.log(admin.password);
// const user = createUser(registerData);
// const testData = {
// 	login: "Ivan",
// 	password: "123qwe",
// };
// console.log(user.login);
// const testUser = createUser(testData);
// console.log(testUser.login);
///буде  123qwe
// Ivan
// Ivan

// function User({login = null, password = null, isAdmin = null, age = 0, role = "user"}){
// 	this.login = login;
// 	this.password = password;
// 	this.role = isAdmin ? "Admin" : "User";
// 	this.age = age;

// 	this.verify = function(password){
// 		return this.password === password;  
// 	};
// };
//якщо потрібна перевірка на new то можна зробити так 
// function User(data){
// 	if(new.target){
// 		const{ login = null, password = null, isAdmin = null, age = 0, role = "user"} = data;
// 		this.login = login;
// 		this.password = password;
// 		this.role = isAdmin ? "Admin" : "User";
// 		this.age = age;

// 		this.verify = function(password){
// 			return this.password === password;  
// 		};
// 	} else {
// 		return new User(data);
// 	}
// };
// чи так спростити
function User(data){
	if(new.target){
		const{ login = null, password = null, isAdmin = null, age = 0 } = data;
		
		const role = isAdmin ? "Admin" : "User";
		const object = Object.assign(this, {
			// Object.assign копіює всі властивості і зберігає this
			login,
			password,
			role,
			age,
			// verify,
		});
		if (role === "Admin"){
			object.verify = function(password){
				console.debug(password, this);
				//прологувати через .debug password, this,(поверне false та поверне весь this) 
				return this.password === password;  
			};
		}
		if(age >= 50){
			object.login = String(object.login).toUpperCase();
			///якщо 50 і старше логін писати з великої букви 
			// (String переводе в текст toUpperCase робить великими буквами)
		}
		object.toString = function() {
			return `Користувач ${this.login}`;
		}
		return object;
	} else {
		return new User(data);
	}
};


// function UserAdmin({login = null, password = null, isAdmin = null, age = 0, role = "user"}){
// 	this.login = login;
// 	this.password = password;
// 	this.role = isAdmin ? "Admin" : "User"; 
// 	this.age = age;
	
// 	this.verify = function(password){
// 		return this.password === password;  
// 	};
// };
const adminData = {
	login: "Ivan",
	password: "123qwe",
	isAdmin: true,
};
const admin = new User(adminData);
const registerData = {
	login: "Ivan",
	password: "123qwe",
	isAdmin: true,
};
// console.log(admin.role);

User.prototype.test = "Hello world";
///додаємо властивості в функцію

const user = new User(registerData);

const testData = {
	login: "ivan",
	password: "123qwe",
	age: 50,
};
// console.log(user.password);
const testUser = new User(testData);
// console.log(testUser.login);
///буде  Admin
// 123qwe
// Ivan
// console.log(testUser === User);
// console.log(testUser.__proto__ === User);
// console.log(User.prototype);
// console.log(Object.getPrototypeOf(testUser) === User.prototype);
// console.log(user.test);
// console.log(user.toString());
// console.log(User.length);
// const test = User;
// console.log(test.name);
///буде
// false
// false
// {} обьєкт прототипу функції User
// true
// Hello world
// Користувач Ivan
// 1
// User
///........
// console.log(user.verify("123qwe"));
// const verifyUser = user.verify;
// console.log(verifyUser);
// console.log(verifyUser("123qwe"));
///буде
// 123qwe User {
// 	login: 'Ivan',
// 	password: '123qwe',
// 	role: 'Admin',
// 	age: 0,
// 	verify: [Function (anonymous)],
// 	toString: [Function (anonymous)]
//   }
//   true
//   false
// повернуло this як глобальний обьєк. тому що губиться зв'язок з this функції
// [Function (anonymous)]
// false
// [Function (anonymous)]
// 123qwe <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 41.942800000309944,
//       nodeStart: 2.8756000008434057,
//       v8Start: 7.255799999460578,
//       bootstrapComplete: 29.029200000688434,
//       environment: 15.478499999269843,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1701784852747.669
//   },
//   fetch: [AsyncFunction: fetch]
// }
// щоб робилося коректно треба привязати this аргумент 
// const verifyUser = user.verify;
// console.log(verifyUser.apply(user, ["123qwe"]));
///буде
// 123qwe User {
// 	login: 'Ivan',
// 	password: '123qwe',
// 	role: 'Admin',
// 	age: 0,
// 	verify: [Function (anonymous)],
// 	toString: [Function (anonymous)]
//   }
//   true
//для створення нової функції потрібно використовувати 
// const verifyUser = user.verify.bind(user, "123qwe");
// console.log(verifyUser());
///буде
// 123qwe User {
// 	login: 'Ivan',
// 	password: '123qwe',
// 	role: 'Admin',
// 	age: 0,
// 	verify: [Function (anonymous)],
// 	toString: [Function (anonymous)]
//   }
//   true
//для виклуку функції потрібно використовувати 
function Animal(name){
	this.name = name;
};
// function Person(name, age){
// 	Animal.call(this,name);
// 	//якщо ставимо apply аргумент в виді масиву
// 	this.age = age;
// };
////або можна функцію ложити в змінну
const Person = function(name, age){
	Animal.call(this, name);
	this.age = age;
};
const user2 = new Person("Alex", 32);
console.log(user2.name);
///буде
// Alex