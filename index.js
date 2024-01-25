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
// function User(data){
// 	if(new.target){
// 		const{ login = null, password = null, isAdmin = null, age = 0 } = data;
		
// 		const role = isAdmin ? "Admin" : "User";
// 		const object = Object.assign(this, {
// 			// Object.assign копіює всі властивості і зберігає this
// 			login,
// 			password,
// 			role,
// 			age,
// 			// verify,
// 		});
// 		if (role === "Admin"){
// 			object.verify = function(password){
// 				console.debug(password, this);
// 				//прологувати через .debug password, this,(поверне false та поверне весь this) 
// 				return this.password === password;  
// 			};
// 		}
// 		if(age >= 50){
// 			object.login = String(object.login).toUpperCase();
// 			///якщо 50 і старше логін писати з великої букви 
// 			// (String переводе в текст toUpperCase робить великими буквами)
// 		}
// 		object.toString = function() {
// 			return `Користувач ${this.login}`;
// 		}
// 		return object;
// 	} else {
// 		return new User(data);
// 	}
// };


// function UserAdmin({login = null, password = null, isAdmin = null, age = 0, role = "user"}){
// 	this.login = login;
// 	this.password = password;
// 	this.role = isAdmin ? "Admin" : "User"; 
// 	this.age = age;
	
// 	this.verify = function(password){
// 		return this.password === password;  
// 	};
// };
// const adminData = {
// 	login: "Ivan",
// 	password: "123qwe",
// 	isAdmin: true,
// };
// const admin = new User(adminData);
// const registerData = {
// 	login: "Ivan",
// 	password: "123qwe",
// 	isAdmin: true,
// };
// console.log(admin.role);

// User.prototype.test = "Hello world";
///додаємо властивості в функцію

// const user = new User(registerData);

// const testData = {
// 	login: "ivan",
// 	password: "123qwe",
// 	age: 50,
// };
// console.log(user.password);
// const testUser = new User(testData);
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
// function Animal(name){
// 	this.name = name;
// };
// // function Person(name, age){
// 	Animal.call(this,name);
// 	//якщо ставимо apply аргумент в виді масиву
// 	this.age = age;
// };
////або можна функцію ложити в змінну
// const Person = function(name, age){
// 	Animal.call(this, name);
// 	this.age = age;
// };
// const user2 = new Person("Alex", 32);
// console.log(user2.name);
///буде
// Alex


///// Класи
// const User1 = {
// 	login: null,
// 	password: null,
// 	role: null,
// 	age: null,
// };
///стороння функція
// function Animal() {
// 	this.test = "Hello world";
// }
///створюємо конструктор
// function User({login, password, role, age}){
///якщо потрібно додати влистивості сторонної функціі	
	// Animal.call(this);  
///чи через Animal.apply(this)
	// this.login = login;
	// this.password = password;
	// this.role = role;
	// this.age = age;
///якщо сттворюємо приватну властивість чи get, set
// Object.defineProperty(this, {
// 	name: {
// 		get(){},
// 		set(){}
// 	}
// })
// }
///перевіряємо додавання властивості можно так
// console.log(new User({}));
// console.log(new User({}).test);
///буде
// User {
// 	test: 'Hello world',
// 	login: undefined,   
// 	password: undefined,
// 	role: undefined,    
// 	age: undefined      
//   }
/////
//   Hello world
// class Person {
// 	constructor(name){
// 		this.name = name;
// 	}

// 	test = () => {
// 		console.log("Hello world", this.name);
// 	};
// }
// Робимо все це через class
/// наслідування extends всего може передати один класс його треба додати через 
// class User extends Person {
	// Поля класу і властивості

///мметод конструктор (передає this. в аргумент )
// constructor(login, password){
// 	super(login);

// 	this.login = login;
// 	this.password = password;
// }	
//Приватний класс видно тільки всередені класуб в консоль не виводиться
// #id = 10020;
// id = null;
// login = null;
// password = null;
// #role = null;
// age = null;
///створюємо метод всередені класу вкінці не потрібна коми.
//Звертатися потрібно через this.  
// isAdmin(){
// 	return this.role === "Admin";
// }
// };
///краще робити методи через стрілкову функцію
// isAdmin = () => {
// 	return this.role === "Admin";
// };
//метод створюючий нового юзера за логіном
// creatAdminUser = (login) => {
// 	const password = this.generateRandomPassword();
// 	return new User(login, password);
// }
//метод створюючий рандомний пароль
// при використанні static в user не буде видно цю властивість
// але в User буде видно всі статичні і іх можно втавляти як функцью в const
// наприклад (const password = this.generateRandomPassword())
// static generateRandomPassword = () => {
// 	///...
// }
// перевіряємо чи однакові логіни
// verify(user1, user2) {
// 	return user1.login === user2.login;
// }
// ///
// get admin() {
// 	return this.#role === "Admin";
// }
// set admin(value){
// 	this.#role = "Admin";
// }
// };
///створюємо обект user
// const user = new User("Alex", "asd345qwe");
/// Для множинного наслудування потрібно використовувти отдельно
// Object.assign(User.prototype, User)
// console.log(User.prototype.isPrototypeOf(user));
//Перевіряємо чи онакові прототипи  (Якщо задати просто User буде class) 
// console.log(user);
///буде
////User { login: null, password: null, role: null, age: null }
// console.log(user.isAdmin());
// якщо потрібно
// function verifyAdmin(fn){
// 	const result = fn();
// 	if(!result){
// 		throw new Error("Не адмін")
// 	}
// 	return true;
// }
///викликаемо функцію (якщо зробити без .bind буде помилка)
// verifyAdmin(user.isAdmin.bind(this));
///але так не зручно краще робити методи через стрілкову функцію (не загубеться this)
// console.log(user.generateRandomPassword()); 
///(з User робити не буде)
// console.log(User.generateRandomPassword());
/// при створенні статичного класу static (з user робити не буде)
// console.log(User);
// console.log(user);
///буде
// [class User] {
// 	generateRandomPassword: [Function: generateRandomPassword]
//   }
//   User {
//	id: null,
// 	login: null,
// 	password: null,
// 	role: null,
// 	age: null,
// 	isAdmin: [Function: isAdmin],
// 	creatAdminUser: [Function: creatAdminUser]
//   }
// console.log(user.admin);
// user.admin = true;
// console.log(user.admin);
// ///буде
// false
// true
// console.log(user);
///буде після додавання в new User("Alex", "asd345qwe")
// User {
// 	id: null,
// 	login: 'Alex',
// 	password: 'asd345qwe',
// 	age: null,
// 	isAdmin: [Function: isAdmin],
// 	creatAdminUser: [Function: creatAdminUser]
//   }
// console.log(user.test());
///буде
// Hello world Alex
// undefined
//перевырка на те чи належить обьект до класу 
// console.log(user instanceof User);
///буде
// true

///// Патерни програмування частина 1

/////Одиночка (клас має один єкземпляр і надає глобальний доступ до нйогу)
// class RecentPurchases {
/// змінна в якій триматимимо замовлення
	// static #instance = null;
///створює змінну яка на старті є пустим масивом в неї кластимемо замовлення
	// constructor(){
	//  this.purchases = [];
	// }
////перевіряємо чи є в змінній замовленя якщо ні додаємо його і повертає мо створений обьєкт.
	// static create () {
	// 	if(!this.#instance){
	// 		this.#instance = new RecentPurchases();
	// 	}
	// 	return this.#instance;
	// }
////метод додавання списку
// add(item) {
// 	this.purchases.push(item);
// }
///метод отримання списку
// get() {
// 	return this.purchases;
// }
// }
// const lastPurchasesList = RecentPurchases.create();
////.....будь де в коді викликаємо RecentPurchases.create і це буде однаково
// const lastPurchasesList2 = RecentPurchases.create();
// console.log(lastPurchasesList === lastPurchasesList2);
///буде
// true
// lastPurchasesList2.add("Телефон");
// lastPurchasesList2.add("Нввушники");
// lastPurchasesList2.add("часи");
// console.log(lastPurchasesList.get());
///буде
// [ 'Телефон', 'Нввушники', 'часи' ]

////Або біль сучасний метод через static
// class RecentPurchases {
// 	static #instance = null;
// 	static #purchases = [];
// 	static create () {
// 		if(!this.#instance){
// 			this.#instance = new RecentPurchases();
// 		}
// 		return this.#instance;
// 	}
// 	static add(item) {
// 		this.#purchases.push(item);
// 	}
// 	static get() {
// 		return this.#purchases;
// 	}
// }
// RecentPurchases.create();
// RecentPurchases.add("Телефон");
// RecentPurchases.add("Нввушники");
// RecentPurchases.add("часи");
// console.log(RecentPurchases.get());
///буде
// [ 'Телефон', 'Нввушники', 'часи' ]
// class Singleton {
// 	constructor() {
// 	if (!Singleton.instance) {
// 	Singleton.instance = this;
// 	}
// 	return Singleton.instance;
// 	}
// 	}
// 	const instance1 = new Singleton();
// 	const instance2 = new Singleton();
// 	console.log(instance1 === instance2); // true

////Фабрика визначає який клас повинен матити обьєкт при створені і надає загальний клас

// class Button {
// 	constructor({text, color}){
// 		this.text = text;
// 		this.color = color;
// 	}
// 	render(){
// 		return `<button class="color:${this.color};">${this.text}</button>`;
// 	}
// }
// class IconButton {
// 	constructor({icom, color}){
// 		this.icon = icom;
// 		this.color = color;
// 	}
// 	render(){
// 		return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
// 	}
// }
////створюємо клас який верішує коли які потрібно взяти властивості де
///options властивості які ми прописуємо в конструкторі
//type це статична власти вість яка надає назву і властивості кнопок
// class ButtonFactory {
// 	static TYPE = {
// 		BASIC: "basic",
// 		ICON: "icon",
// 	};
// 	static createButton(type, options){
// 		if(options.icon){
// 			return new IconButton(options);
// 		}
// 		if(options.text){
// 			return new Button(options);
// 		}
// 		throw new Error(`такого типу кнопки не існує: ${type}`);
// 		switch (type){
// 			case this.TYPE.BASIC:
// 				return new Button(options);
// 			case this.TYPE.ICON:
// 				return new IconButton(options);
// 			default:
// 				throw new Error(`такого типу кнопки не існує: ${type}`);
// 		}
// 	}
// }
// const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
// 	color: "red",
// 	icon: "/icon/my-icon.svg",
// });
// console.log(myIconButton);
///буде
// iconButton { icon: undefined, color: 'red' }
// class ButtonFactory {
// 	static TYPE = {
// 		BASIC: "basic",
// 		ICON: "icon",
// 	};
// 	static createButton(type, options){
// 		if(options.icon){
// 			return new IconButton(options);
// 		}
// 		if(options.text){
// 			return new Button(options);
// 		}
// 		throw new Error(`такого типу кнопки не існує: ${type}`);
// 	}
// }	
// const myIconButton1 = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
// 	color: "black",
// 	icon: "/icon/my-icon124.svg",
// });
// console.log(myIconButton1);
///буде
// IconButton { icon: undefined, color: 'black' }
// class Product {
// 	constructor(name) {
// 	this.name = name;
// 	}
// 	}
	
// 	class ProductFactory {
// 	createProduct(name) {
// 	return new Product(name);
// 	}
// 	}
	
// 	const factory = new ProductFactory();
// 	const product = factory.createProduct("Товар");
	
// 	console.log(product instanceof Product); // true
// 	console.log(product.name); // "Товар"

////Спостерігач. залежність один бага . одна змінна автоматично оновлює всі залажні змінні 

// class User {
// 	constructor(email){
// 		this.email = email;
// 	}
// 	sendEmail(message){
// 		console.log(`Відправки на email ${this.email} повідомлення: ${message}`);
// 	}
// }
// class Video {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Channel {
// 	constructor(name){
// 		this.name = name;
// 		this.subscribers - [];
// 	}
// 	subscribe(user) {
// 		//Підписка на канал
// 		this.subscribers.push(user);
// 	}
// 	unsubscribe(user){
// 		///Відписка від каналу
// 		this.subscribers = this.subscribers.filter((sub) => sub !== user);
// 	}
// 	createVideo(name) {
// 		///Створення нового відео
// 		const video = new Video(name);
// 		this.sendNotify(video);
// 	}
// 	sendNotify(video){
// 		///Відправлення повідомлення підписнику про нове відео
// 		this.subscribers.forEach((subscriber) => {
// 			subscriber.sendEmail(
// 				`Нове відео "${video.name}" на Youtube каналі ${this.name}!`
// 			);
// 		});
// 	}
// }
// const channel = new Channel("IT Brains");

// const user1 = new User("netrebko2505@gmail.com");
// const user2 = new User("a25051075@gmail.com");
// const user3 = new User("netAlex2505@gmail.com");

// channel.subscribe(user1);
// channel.subscribe(user2);
// channel.subscribe(user3);
// channel.createVideo("уpок по HTML");
///буде
// Відправки на email netrebko2505@gmail.com повідомлення: Нове відео "уpок по HTML" на Youtube каналі IT Brains!
// Відправки на email a25051075@gmail.com повідомлення: Нове відео "уpок по HTML" на Youtube каналі IT Brains!
// Відправки на email netAlex2505@gmail.com повідомлення: Нове відео "уpок по HTML" на Youtube каналі IT Brains!
// channel.unsubscribe(user3);
// console.log("=====");
// channel.createVideo("уpок по CSS");
///буде
// Відправки на email netrebko2505@gmail.com повідомлення: Нове відео "уpок по HTML" на Youtube каналі IT Brains!
// Відправки на email a25051075@gmail.com повідомлення: Нове відео "уpок по HTML" на Youtube каналі IT Brains!
// Відправки на email netAlex2505@gmail.com повідомлення: Нове відео "уpок по HTML" на Youtube каналі IT Brains!
// =====
// Відправки на email netrebko2505@gmail.com повідомлення: Нове відео "уpок по CSS" на Youtube каналі IT Brains!
// Відправки на email a25051075@gmail.com повідомлення: Нове відео "уpок по CSS" на Youtube каналі IT Brains!
// class Observer {
// 	update(data) {
// 	console.log("Отримано оновлення:", data);
// 	}
// 	}
	
// 	const subject = new Subject();
// 	const observer1 = new Observer();
// 	const observer2 = new Observer();
	
// 	subject.addObserver(observer1);
// 	subject.addObserver(observer2);
	
// 	subject.notifyObservers("Нові дані");
	// Виведе:
	// Отримано оновлення: Нові дані
	// Отримано оновлення: Нові дані

////Декоротар. дозволяє розширити функціональність об'єкта, не змінюючи сам об'єкт.

// class Caffee {
// 	name = "Кава";
// 	cost = 10;  ///Ціна
// 	cook() {
// 		console.log(`Приготування ${this.name}`);
// 		// Логіка приготування кавового напою
// 	}
// }
// class MilkDecorator {
// 	name = "Лате";
// 	constructor(coffee, amount) {
// 		this.coffee = coffee;
// 		this.amount = amount;
// 	}
// 	get name() {
// 		return `${this.coffee.name}, з  ${this.amount} мл молока`;
// 	}
// 	get cost() {
// 		const milkPrice = 0.05;
// 		return this.coffee.cost + milkPrice * this.amount;
// 	}
// 	cook() {
// 		console.log(`Приготування ${this.name}`);
// 		// Логіка приготування кави з молоком
// 	}
// }
// Створення обьєкту базова кава
// let coffee = new Caffee();
// console.log(coffee.name);
// console.log(coffee.cost);
// coffee.cook();
// Додовання декоратора молока до кави
// let latteCoffee = new MilkDecorator(coffee, 300);
// console.log(latteCoffee.name);
// console.log(latteCoffee.cost);
// latteCoffee.cook();
///буде
///Кава
// 10
// Приготування Кава
// Кава, з  300 мл молока
// 25
// Приготування Кава, з  300 мл молока
// якщо додати до MilkDecorator (name = "Лате";) буде
// Лате
// 25
// Приготування Лате
// class Component {
// 	operation() {
	
// 	console.log("Базова операція");
// 	}
	
// 	}
	
// 	class Decorator {
// 	constructor(component) {
	
// 	this.component = component;
// 	}
	
// 	operation() {
// 	this.component.operation();
// 	console.log("Додаткова операція");
// 	}
// 	}
	
// 	const component = new Component();
// 	const decoratedComponent = new Decorator(component);
	
// 	decoratedComponent.operation();
	// Виведе:
	// Базова операція
	// Додаткова операція

///Мементо. Коли потрібно зберегти стан об'єкта і відновити його пізніше,
// зберігаючи приватні дані відповідно.

// class TextEditor {
// 	#text = "";
// 	// тримає наш текст з редактора
// 	set text(text) {
// 		this.#text = text;
// 		this.#save();
// 	// Записує наш текст. При кожному оновленні викликає метод #save
// 	}
// 	get text() {
// 		return this.#text;
// 	// повертає наш текст
// 	}
// 	#save() {
// 		Snapshot.create(this.text);
// 	// при кожному оновленні зберігає наш текст в масиві Snapshot
// 	}
// 	restore() {
// 		this.#text = Snapshot.restore().text;
// 	//  дозволяє відкототися на зад
// 	}
// }
// class Snapshot {
// 	constructor(text) {
// 		this.text = text;
// 	}
// 	static #snapshots = [];
// 	// зберігає копії нового текту
// 	static create(text) {
// 		this.#snapshots.push(new Snapshot(text));
// 		// створює новий Snapshot та вкладує його в #snapshots з властивістю
// 	}
// 	static restore() {
// 		this.#snapshots.pop();
// 		return this.#snapshots[this.#snapshots.length -1];
// 		// видаляє поточну версію і повертає попередню
// 	}
// }
// const editor = new TextEditor();
// editor.text = "Це початковий текст ";
// editor.text = "Редагований текст";
// editor.text = "Оновлений текст";
// console.log(editor.text);
// console.log("=====");
// editor.restore();
// console.log(editor.text);
// editor.restore();
// console.log(editor.text);
//буде
// Оновлений текст
// =====
// Редагований текст
// Це початковий текст

// class Memento {
// 	constructor(state) {
// 	this.state = state;
// 	}
// 	}
// 	class Originator {
// 	constructor() {
// 	this.state = "";
// 	}
// 	setState(state) {
// 	this.state = state;
// 	}
// 	createMemento() {
// 	return new Memento(this.state);
// 	}
// 	restoreMemento(memento) {
// 	this.state = memento.state;
// 	}
// 	}
// 	const originator = new Originator();

// originator.setState("Стан 1");
// const memento = originator.createMemento();

// originator.setState("Стан 2");
// console.log(originator.state); // "Стан 2"

// originator.restoreMemento(memento);
// console.log(originator.state); // "Стан 1"

// Ланцюжок відповідальності. Коли потрібно реалізувати механізм обробки запитів з можливістю
// автоматичного перехоплення та передачі запиту між обробниками.

// class Authandler {
// 	setNextHandler(handler) {
// 		this.nextHandler = handler;
// 		return handler;
// 	}
// 	login(user, password) {
// 		if(this.nextHandler){
// 			return this.nextHandler.login(user, password);
// 		} else {
// 			return false;
// 		}
// 	}
// }
// class TwoFactorAuthandler extends Authandler {
// 	login(user, password) {
// 		if (
// 			user === "johan" &&
// 			password === "password" &&
// 			this.isValidTwoFactorCode()
// 		)
// 	 	{
// 			console.log("Вхід дозволено з двофакторною автентіфікацією");
// 			return true;
// 		} else {
// 			return super.login(user, password);
// 		}
// 	}
// 	isValidTwoFactorCode() {
// 		return true;
// 	}
// }
// const handler = new TwoFactorAuthandler();
// handler.setNextHandler({
// 	login: (...arg) => {
// 		console.log(arg);
// 	},
// });
// handler.login("login", "password");
//буде
// [ 'login', 'password' ]
//чи так
// handler.setNextHandler({
// 	login: (login, password) => {
// 		const result = login === "login" && password === "password" 
// 		? "користувач увійшов в акаун"
// 		:"користувач не увійшов в акаун";
// 		console.log(result);
// 		return result;
// 	},
// });
// handler.login("login", "password");
//буде
//користувач увійшов в акаун

// class RoleHandeler extends Authandler {
// 	login(user, password){
// 		if(user === "quest") {
// 			console.log("Вхід дозволено з роллю гостя");
// 			return true;
// 		} else {
// 			return super.login(user, password);
// 		}
// 	}
// }
// class CredentialsHandeler extends Authandler {
// 	login(user, password){
// 		if(user === "admin" && password === "admin123") {
// 			console.log("Вхід дозволено за логіном і паролєм");
// 			return true;
// 		} else {
// 			return super.login(user, password);
// 		}
// 	}
// }
// const handler = new TwoFactorAuthandler();
// handler.setNextHandler(new CredentialsHandeler());
// handler.login("admin", "admin123");
//буде
//Вхід дозволено за логіном і паролєм
// const handler = new TwoFactorAuthandler();
// const handler2 = new CredentialsHandeler();
// handler2.setNextHandler(new RoleHandeler());
// handler.setNextHandler(handler2);
// handler.login("quest", "admin123");
//буде
//Вхід дозволено з роллю гостя
// class HadlerBuilder {
// 	constructor() {
// 		this.firstHandler = null;
// 		this.lastHandler = null;
// 	}
// 	add(handler){
// 		if(!this.firstHandler){
// 			this.firstHandler = handler;
// 			this.lastHandler = handler;
// 		} else {
// 			this.lastHandler.setNextHandler(handler);
// 			this.lastHandler = handler;
// 		}
// 		return this;
// 	}
// 	create() {
// 		return this.firstHandler;
// 	}
// }
// const hadlerBuilder = new HadlerBuilder();
// const handler = hadlerBuilder
//  .add(new CredentialsHandeler())
//  .add(new TwoFactorAuthandler())
//  .add(new RoleHandeler())
//  .create();

//  handler.login("admin", "admin123"); // Вхід дозволено за логіном і паролєм
//  handler.login("john", "password"); // Вхід дозволено з двофакторною автентіфікацією
//  handler.login("quest", "quest123"); // Вхід дозволено з роллю гостя
//  handler.login("user", "password"); // Вхід заборонено
// // буде
//Вхід дозволено за логіном і паролєм
//Вхід дозволено з двофакторною автентіфікацією
//Вхід дозволено з роллю гостя
// class Handler {
// 	setNext(handler) {
// 	this.nextHandler = handler;
// 	}
// 	handleRequest(request) {
// 	if (this.nextHandler) {
// 	this.nextHandler.handleRequest(request);
// 	}
// 	}
// 	}
// 	class ConcreteHandler1 extends Handler {
// 		handleRequest(request) {
// 		if (request === "Запит 1") {
// 		console.log("Обробник 1 обробив запит");
// 		} else {
// 		super.handleRequest(request);
// 		}
// 		}
// 		}
// 		class ConcreteHandler2 extends Handler {
// 		handleRequest(request) {
// 		if (request === "Запит 2") {
// 		console.log("Обробник 2 обробив запит");
// 		} else {
// 		super.handleRequest(request);
// 		}
// 		}
// 		}
// //const handler1 = new ConcreteHandler1();
// const handler2 = new ConcreteHandler2();

// handler1.setNext(handler2);

// handler1.handleRequest("Запит 1");
// // Виведе: "Обробник 1 обробив запит"

// handler1.handleRequest("Запит 2");
// // Виведе: "Обробник 2 обробив запит"

// handler1.handleRequest("Запит 3");
// Запит буде переданий далі, так як немає відповідного обробника

// Міст. дозволяє розмістити абстракцію і реалізацію в окремі класи, дозволяючи
// їм мати незалежний функціонал
// class Abstraction {
// 	constructor(implementation) {
	
// 	this.implementation = implementation;
// 	}
	
// 	operation() {
// 	const implementationResult = this.implementation.operationImplementation();
// 	return `Абстракція: ${implementationResult}`;
// 	}
// 	}
	
// 	class Implementation {
// 	operationImplementation() {
	
// 	return "Реалізація";
// 	}
	
// 	}
	
// 	const implementation = new Implementation();
// 	const abstraction = new Abstraction(implementation);
	
// 	console.log(abstraction.operation()); // "Абстракція: Реалізація

// class User {
// 	constructor(name, message) {
// 		this.name = name;
// 		this.message = message;
// 	}
// 	sendMessage(message) {
// 		const formattedMessage = this.formattedMessage(message);
// 		this.message.sendMessage(formattedMessage);
// 	}
// 	formattedMessage(message) {
// 		return `[${this.name}]: ${message}`;
// 	}
// }
//через СМС
//через сайт
//через почту
// class SMSMessager {
// 	static sendMessage(message) {
// 		console.log(`Відправити SMS: ${message}`);
// 	}
// }
// class EmailMessager {
// 	static sendMessage(message) {
// 		console.log(`Відправити Email: ${message}`);
// 	}
// }
// const john = new User("john", SMSMessager);
// const jane = new User("jane", EmailMessager);
// john.sendMessage("Привіт"); // відправлено SMS: john: Привіт
// jane.sendMessage("Привіт"); // відправлено Email: jane: Привіт