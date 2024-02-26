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

// Композит. Коли потрібно працювати з деревоподібною структурою об'єктів, де
// об'єкти та групи об'єктів можуть бути оброблені однаковим чином.
// class Comment {
// 	constructor(text) {
// 		this.text = text;
// 	}
// 	display() {
// 		console.log(`-Коментар: ${this.text}`);
// 	}
// }
// class Video {
// 	comment = null;
// 	constructor(title) {
// 		this.title = title;
// 	}
// 	display() {
// 		console.log(`Відео: ${this.title}`)
// 		if(this.comment) this.comment.display();
// 	}
// }
// const video = new Video("Навчальне відео");
// video.comment = new Comment("Дуже корисне відео");
// video.display();
// буде
// Відео: Навчальне відео
// -Коментар: Дуже корисне відео
// щоб зробити деревоподібну структуру і дать можливість коментар на коментар
//  та на коментар. та покращим структуру.
// class Composite {
// 	comments = [];
// 	addComment(comment) {
// 		this.comments.push(comment);
// 	}
// 	removeComment(comment) {
// 		const index = this.comments.indexOf(comment);
// 		if(index !== -1) {
// 			this.comments.splice(index, 1);
// 		}
// 	}
// }
// class Comment extends Composite{
// 	constructor(text) {
	// super();
// 		this.text = text;
// 	}
// 	display() {
// 		console.log(`-Коментар: ${this.text}`);
// 		for (const comment of this.comments) {
// 			comment.display();
// 		}
// 	}
// }
// class Video extends Composite {
// 	constructor(title) {
	// super();
// 		this.title = title;
// 	}
// display() {
// 	console.log(`Відео: ${this.title}`)
// 	for (const comment of this.comments) {
// 		comment.display();
// 	}
// }
// }
// const video = new Video("Навчальне відео");
// video.addComment(new Comment("Дуже корисне відео"));
// video.addComment(new Comment("Дуже корисне відео1"));

// video.comments[0].addComment(new Comment("Відповідь: Згоден!"));
// video.display();
// буде
//Відео: Навчальне відео
// -Коментар: Дуже корисне відео
// -Коментар: Відповідь: Згоден!
// -Коментар: Дуже корисне відео1
// console.log(video.comments);
// буде
//[
// 	Comment { comments: [ [Comment] ], text: 'Дуже корисне відео' },
// 	Comment { comments: [], text: 'Дуже корисне відео1' }
//   ]
// class Component {
// constructor(name) {
// 	this.name = name;
// 	}
// 	operation() {
// 	console.log(`Виконується операція для ${this.name}`);
// 	}
// 	}
// 	class Composite extends Component {
// 	constructor(name) {
// 	super(name);
// 	this.children = [];
// 	}
// 	add(component) {
// 	this.children.push(component);
// 	}
// 	remove(component) {
// 	this.children = this.children.filter((child) => child !== component);
// 	}
// 	operation() {
// 	console.log(`Виконується операція для ${this.name}`);
// 	this.children.forEach((child) => child.operation());
// 	}
// 	}
// const leaf1 = new Component("Листок 1");
// const leaf2 = new Component("Листок 2");
// const composite = new Composite("Композит");

// composite.add(leaf1);
// composite.add(leaf2);

// composite.operation();
// Виведе:
// Виконується операція для Композит
// Виконується операція для Листок 1
// Виконується операція для Листок 2

// Муха. спільно використовувати об'єкт-одиночка замість створення окремих унікальних об'єктів
// для кожного випадку використання. Коли потрібно економити пам'ять, оптимізуючи велику кількість
// дрібних об'єктів, використовуючи спільні "легкі" частини.

// class Category {
// 	static #categories = {};
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	static create(name) {
// 		if(!this.#categories[name]) {
// 			this.#categories[name] = new Category(name);
// 		}
// 		return this.#categories[name];
// 	}
// }
// const electronics = Category.create("Electronics");
// const books = Category.create("Books");
// const electronics2 = Category.create("Electronics");

// console.log(electronics, books, electronics2);
// console.log(electronics === electronics2);
// // Виведе:
// // Category { name: 'Electronics' } Category { name: 'Books' } Category { name: 'Electronics' }
// // true
// class Product {
// 	constructor(name, category) {
// 		this.name = name;
// 		this.category = category;
// 	}
// 	display() {
// 		console.log(`Product: ${this.name}, Category: ${this.category.name}`)
// 	}
// }
// const product1 = new Product("Laptop", electronics);
// const product2 = new Product("Headphones", electronics);
// const product3 = new Product("Book Title", books);
// const product4 = new Product("Smartphone", electronics2);
// product1.display();
// product2.display();
// product3.display();
// product4.display();
// console.log(product1.category === product4.category);
// Виведе:
// Product: Laptop, Category: Electronics
// Product: Headphones, Category: Electronics
// Product: Book Title, Category: Books
// Product: Smartphone, Category: Electronics
// true
// const list = [product1, product2, product3, product4].filter((product) => product.category === Category.create("Electronics"));
// console.log(list);
// Виведе:
// [
// 	Product {
// 	  name: 'Laptop',
// 	  category: Category { name: 'Electronics' }
// 	},
// 	Product {
// 	  name: 'Headphones',
// 	  category: Category { name: 'Electronics' }
// 	},
// 	Product {
// 	  name: 'Smartphone',
// 	  category: Category { name: 'Electronics' }
// 	}
//   ]
// class Flyweight {
// 	constructor(sharedState) {
// 	this.sharedState = sharedState;
// 	}
// 	operation(uniqueState) {
// 	console.log(`Виконується операція зі спільним станом
// 	${this.sharedState} та унікальним станом ${uniqueState}`);
// 	}
// 	}
// 	class FlyweightFactory {
// 		constructor() {
// 		this.flyweights = {};
// 		}
// 		getFlyweight(sharedState) {
// 		if (!this.flyweights[sharedState]) {
// 		this.flyweights[sharedState] = new Flyweight(sharedState);
// 		}
// 		return this.flyweights[sharedState];
// 		}
// 		}
// 		const factory = new FlyweightFactory();
// const flyweight1 = factory.getFlyweight("спільний стан 1");
// flyweight1.operation("унікальний стан 1");
// const flyweight2 = factory.getFlyweight("спільний стан 2");
// flyweight2.operation("унікальний стан 2");
// const flyweight3 = factory.getFlyweight("спільний стан 1");
// flyweight3.operation("унікальний стан 3");
// Виведе:
// Виконується операція зі спільним станом “спільний стан 1”та унікальним станом “унікальний стан 1”
// Виконується операція зі спільним станом “спільний стан 2“та унікальним станом “унікальний стан 2“
// Виконується операція зі спільним станом “спільний стан 1“та унікальним станом “унікальний стан 3“

// Шаблонний метод. 
// визначає загальну структуру алгоритму, залишаючи певні кроки реалізації підкласам. Клас-шаблон
// визначає основну логіку алгоритму, а підкласи можуть змінювати або розширювати окремі кроки.
// Коли потрібно визначити загальну структуру алгоритму, але дозволити підкласам змінювати деякі кроки або додавати нові.
// class CoffeeMachine {
// 	prepareCaffee() {
// 		this.boilWater();
// 		this.grindCaffeeBeans();
// 		this.#brewCaffee();
// 		this.pourIntoCup();
// 		this.addingredients();
// 		this.serveCaffee();
// 	}
// 	boilWater() {
// 		console.log("Boiling water...");
// 	}
// 	grindCaffeeBeans() {
// 		console.log("Grinding coffee beants...");
// 	}
// 	#brewCaffee() {
// 		console.log("Brewing coffee...");
// 	}
// 	pourIntoCup() {
// 		console.log("Pouring coffee info cup...");
// 	}
// 	addingredients() {
// 		// цей метод залишається пустим і може бути перезаписаний в підкласах
// 	}
// 	serveCaffee() {
// 		console.log("Coffe served!");
// 	}
// }
// class LatteMachine extends CoffeeMachine {
// 	addingredients() {
// 		console.log("Adding milk to make a latte...");
// 		//...... 
// 	}
// 	// .....
// }
// class CappuccinoMachine extends CoffeeMachine {
// 	addingredients() {
// 		console.log("Adding frothed milk and sprinkle of cocoa powder to make a cappuccino...");
// 		//...... 
// 	}
// 	// .....
// }
// const latteMachine = new LatteMachine();
// latteMachine.prepareCaffee();
// const cappuccinoMachine = new CappuccinoMachine();
// cappuccinoMachine.prepareCaffee();
// Виведе:
// Coffe served!
// Boiling water...
// Grinding coffee beants...
// Brewing coffee...
// Pouring coffee info cup...
// Adding frothed milk and sprinkle of cocoa powder to make a cappuccino...
// Coffe served!

// Приклад
// class AbstractClass {
// 	templateMethod() {
// 	this.baseOperation1();
// 	this.requiredOperation1();
// 	this.baseOperation2();
// 	this.hook();
// 	}
// 	baseOperation1() {
// 	console.log("Виконується базова операція 1");
// 	}
// 	baseOperation2() {
// 	console.log("Виконується базова операція 2");
// 	}
// 	hook() {}
// 	// Метод, який повинен бути реалізований підкласами
// 	requiredOperation1() {
// 	throw new Error("Має бути реалізований");
// 	}
// 	}
// class ConcreteClass extends AbstractClass {
// 	requiredOperation1() {
// 	console.log("Виконується обов'язкова операція 1");
// 	}
// 	hook() {
// 	console.log("Виконується хук");
// 	}
// 	}
// const concreteClass = new ConcreteClass();
// concreteClass.templateMethod();
// Виведе:
// Виконується базова операція 1
// Виконується обов'язкова операція 1
// Виконується базова операція 2
// Виконується хук

// Відвідувач.   дозволяє додавати нові операції до групи об'єктів, не змінюючи самі об'єкти. 
// Відвідувач розділяє алгоритм від представлення об'єктів, що дозволяє додавати нові операції, не змінюючи класи
// цих об'єктів. Коли потрібно виконувати операції над групою об'єктів різними способами, 
// // але не хочете залежати від конкретних класів цих об'єктів.
// class TextFile {
// 	constructor(name, content) {
// 		this.name = name;
// 		this.comment = content;
// 	}
// }
// class ImageFile {
// 	constructor(name, size) {
// 		this.name = name;
// 		this.size = size; // розмір файлу
// 	}
// }
// class VideoFile {
// 	constructor(name, duration) {
// 		this.name = name;
// 		this.duration = duration; // тривалість файлу
// 	}
// }
// class TextEditor {
// 	// constructor() {
// 	// 	this.files = [];
// 	// }
// // чи можно так
// 	files = [];
// 	addFile(file) {
// 	this.files.push(file)
// 	}
// Додаемо підкласи
// 	readTextFile(file) {
// 		console.log(`Text file: ${file.name}, size: ${file.comment.lenght} characters`);
// 	}
// 	readImageFile(file) {
// 		console.log(`Image file: ${file.name}, size: ${file.size} KB`);
// 	}
// 	readVideoFile(file) {
// 		console.log(`Video file: ${file.name}, size: ${file.duration} minutes`);
// 	}
// 	readFiles() {
// 		for(const file of this.files) {
// 			if(file instanceof TextFile) {
// 				this.readTextFile(file);
// 			} else if(file instanceof ImageFile) {
// 				this.readImageFile(file);
// 			} else if(file instanceof VideoFile) {
// 				this.readVideoFile(file);
// 			}
// 		}
// 	}
// }
// const textEditor = new TextEditor();
// const textFile = new TextFile("document.txt", "Loren ipsum dolor sit amet...");
// const imageFile = new ImageFile("image.jpg", 1024);
// const videoFile = new VideoFile("video.mp4", 60);
// textEditor.addFile(textFile);
// textEditor.addFile(imageFile);
// textEditor.addFile(videoFile);
// console.log(textEditor.files);
// // Виведе:
// [
// 	TextFile {
// 		name: 'document.txt',
// 		comment: 'Loren ipsum dolor sit amet...'
// 	},
// 	ImageFile { name: 'image.jpg', size: 1024 },
// 	VideoFile { name: 'video.mp4', duration: 60 }
// ]
// textEditor.readFiles();
// // Виведе:
// Text file: document.txt, size: undefined characters
// Image file: image.jpg, size: 1024 KB
// Video file: video.mp4, size: 60 minutes
// Приклад 
// class Element {
// 	accept(visitor) {
// 	visitor.visit(this);
// 	}
// 	}
// class ConcreteElementA extends Element {}
// class ConcreteElementB extends Element {}
// class Visitor {
// visit(element) {
// throw new Error("Метод visit має бути реалізований");
// }
// }
// class ConcreteVisitor1 extends Visitor {
// 	visit(element) {
// 	console.log("Виконується відвідувач 1 для",
// 	element.constructor.name);
// 	}
// 	}
// class ConcreteVisitor2 extends Visitor {
// visit(element) {
// console.log("Виконується відвідувач 2 для",
// element.constructor.name);
// }
// }
// const elements = [new ConcreteElementA(), new ConcreteElementB()];

// const visitor1 = new ConcreteVisitor1();
// const visitor2 = new ConcreteVisitor2();

// elements.forEach((element) => {
// element.accept(visitor1);
// element.accept(visitor2);
// });
// Виведе:
// Виконується відвідувач 1 для ConcreteElementA
// Виконується відвідувач 2 для ConcreteElementA
// Виконується відвідувач 1 для ConcreteElementB
// Виконується відвідувач 2 для ConcreteElementB

// Адаптер. дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами
// працювати разом, перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.
// Коли потрібно забезпечити співпрацю несумісних об'єктів, які мають різні інтерфейси.
// class ElectronicPaymentSystem {
// 	makePayment(amount) {
// 		const convertedAmount = this.convertAmount(amount);
// 		console.log(`Making electronic payment: ${convertedAmount}`);
// 	}
// 	convertAmount(amount) {
// 		// Логіка конвертації суми платежу
// 		return amount * 1.2; //Припустимо, що необхідна конвертація у відсотках
// 	}
// }
// class OrtherPaymentSystem {
// 	submit(amount) {
// 		console.log(`Submitting payment reguest: ${amount}`);
// 	}
// }
// const electronicPaymentSystem = new ElectronicPaymentSystem();
// electronicPaymentSystem.makePayment(100); ///
// Виведе: Making electronic payment: 120
// class PaymentAdapter {
// 	constructor(paymentSystem) {
// 		this.paymentSystem = paymentSystem;
// 	}
// 	makePayment(amount) {
// 		const convertedAmount = this.convertAmount(amount);
// 		this.paymentSystem.submit(convertedAmount);
// 	}
// 	convertAmount(amount) {
// 		return amount * 1.2;
// 	}
// }
// class Order {
// 	constructor(amount) {
// 		this.amount = amount; //кількість грошей(ціна)
		// вирішуємо через яку платіжну систему
	// 	if(amount < 100) {
	// 		this.paymentSistem = new PaymentAdapter(new OrtherPaymentSystem());
	// 	} else {
	// 		this.paymentSistem = new ElectronicPaymentSystem();
	// 	}
	// }
	// makePayment() {
		// if(this.paymentSistem.makePayment) {
		// 	return this.paymentSistem.makePayment(this.amount);
		// } 
		// if(this.paymentSistem.submit) {
		// 	return this.paymentSistem.submit(this.amount);
		// } 
		// Чи краще написати так 
// 	 return this.paymentSistem.makePayment(this.amount);
// 	}
// }
// const order = new Order(1000);
// order.makePayment();
// Виведе: Making electronic payment: 1200
// const order1 = new Order(1000);
// order1.makePayment();
// const order2 = new Order(10);
// order2.makePayment();
// // Виведе:
// // Making electronic payment: 1200
// // Submitting payment reguest: 12
// class Target {
// 	request() {
// 	return "Цільовий об'єкт";}
// 	}
// 	class Adaptee {
// 	specificRequest() {
// 	return "Адаптований об'єкт";}
// 	}
// 	class Adapter extends Target {
// 		constructor(adaptee) {
// 		super();
// 		this.adaptee = adaptee;	}
// 		request() {
// 		const specificResult = this.adaptee.specificRequest();
// 		return `Адаптер: ${specificResult}`;}
// 		}
// const adaptee = new Adaptee();
// const adapter = new Adapter(adaptee);
// console.log(adapter.request()); // "Адаптер: Адаптований об'єкт"

//Стратегія.  дозволяє визначати різні алгоритми та забезпечує можливість обміну їх під час виконання програми. 
// Коли потрібно використовувати різні алгоритми з можливістю зміни алгоритму в процесі роботи.
// class ShoppingCart {
	// constructor() {
	// 	this.items =[];
	// }
	//Корзина покупок на сайті. чи краще так
	// items =[];
	// addItem(item) {
	// 	this.items.push(item);
	// }
	// discountStrategy(price) {
	// return price > 100 ? price * 0.9 : price
	// }
	// calculateTotalPrice() {
		// let totalPrice = 0;
		// for (const item of this.items) {
		// 	totalPrice += item.price;
		// }
		// можно замінити на такий код. через reduce який за acc яка за замовченняи 0 додає item.price
	// const totalPrice = this.items.reduce((acc, item) => acc + item.price, 0)
	// const finalPrice = totalPrice; // потрібно для маштабування (сюди можно додати знижку и тд)
	// return finalPrice;
	// чи взагалі ящо не потрібно маштабування можно записати так
	// return this.items.reduce((acc, item) => acc + item.price, 0);
	//якщо потрібно щоб врахувалась знижка (пройшов код через discountStrategy)
// 	const price = this.items.reduce((acc, item) => acc + item.price, 0);
// 	return this.discountStrategy(price);
// 	}
// }
// const shoppingCart1 = new ShoppingCart();
// shoppingCart1.addItem({name: "Product 1", price: 100});
// shoppingCart1.addItem({name: "Product 2", price: 50});
// console.log(shoppingCart1.calculateTotalPrice()); //150 // зі знижкою 135

// class ShoppingCart {
// 	constructor(discountStrategy) {
// 		this.discountStrategy = discountStrategy;
// 		this.items = [];
// 	}
// 	addItem(item) {
// 		this.items.push(item);
// 	}
// 	calculateTotalPrice() {
// 		const price = this.items.reduce((acc, item) => acc + item.price, 0);
// 		return this.discountStrategy.calculateDiscount(price);
// 	}
// }
// class DiscountStrategy {
// 	calculateDiscount(price) {
// 		return price;
// 	}
// }
// //Стратегія знижки для звичайних клієнтів
// class RegularDiscountStrategy extends DiscountStrategy {
// 	calculateDiscount(price) {
// 		return price * 0.9; //10% знижка
// 	}
// }
// //Стратегія знижки для прєміум клієнтів
// class PremiumDiscountStrategy extends DiscountStrategy {
// 	calculateDiscount(price) {
// 		return price * 0.8; //20% знижка
// 	}
// }
// //Стратегія знижки для нових клієнтів
// class NewCustomerDiscountStrategy extends DiscountStrategy {
// 	calculateDiscount(price) {
// 		return price * 0.95; //5% знижка
// 	}
// }
// const shoppingCart1 = new ShoppingCart(new RegularDiscountStrategy);
// const shoppingCart1 = new ShoppingCart(new PremiumDiscountStrategy);
// const shoppingCart1 = new ShoppingCart(new NewCustomerDiscountStrategy);
// shoppingCart1.addItem({name: "Product 1", price: 100});
// shoppingCart1.addItem({name: "Product 2", price: 50});
// console.log(shoppingCart1.calculateTotalPrice());// 135 // 120  // 142.5

// class Strategy {
// 	execute() {
// 	throw new Error("Метод execute має бути реалізований");}
// }
// class ConcreteStrategy1 extends Strategy {
// execute() {
// console.log("Виконується стратегія 1");}
// }
// class ConcreteStrategy2 extends Strategy {
// execute() {
// console.log("Виконується стратегія 2");}
// }
// class Context {
// 	constructor(strategy) {
// 	this.strategy = strategy;}
// 	executeStrategy() {
// 	this.strategy.execute();}
// }
// const strategy1 = new ConcreteStrategy1();
// const strategy2 = new ConcreteStrategy2();
// const context1 = new Context(strategy1);
// const context2 = new Context(strategy2);
// context1.executeStrategy();
// // Виведе: "Виконується стратегія 1"
// context2.executeStrategy();
// // Виведе: "Виконується стратегія 2"

//Ітератор. надає спосіб послідовного доступу до елементів колекції без розкриття його внутрішньої структури.
//Коли потрібно отримати доступ до елементів колекції в однаковому порядку, без залежності від типу або структури цієї колекції.
// class User {
// 	constructor(name, email, password) {
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 	}
// }
// //класс для тримання группи користувачив
// class UserGroup {
// 	users = []; // зі static мимаємо спільну группу і звертатися до неї будь де в коді. без можно робити різні групи
// 	addUser(user) {
// 		this.users.push(user);
// 	}
// }
// const group1 = new UserGroup();
// group1.addUser(new User("John Doc", "john@gmail.com", "12345qwert"));
// const group2 = new UserGroup();
// group2.addUser(new User("Jone Smith", "jani@gmail.com", "qwert12345"));
// console.log(group1, group2);
// Виведе:
// UserGroup {
// 	users: [
// 	  User {
// 		name: 'John Doc',
// 		email: 'john@gmail.com',
// 		password: '12345qwert'
// 	  }
// 	]
//   } UserGroup {
// 	users: [
// 	  User {
// 		name: 'Jone Smith',
// 		email: 'jani@gmail.com',
// 		password: 'qwert12345'
// 	  }
// 	]
//   }
// Якщо додамо в одну группу 
// const group = new UserGroup();
// group.addUser(new User("John Doc", "john@gmail.com", "12345qwert"));
// group.addUser(new User("Jone Smith", "jani@gmail.com", "qwert12345"));
// console.log(group);
// Виведе:
// UserGroup {
// 	users: [
// 	  User {
// 		name: 'John Doc',
// 		email: 'john@gmail.com',
// 		password: '12345qwert'
// 	  },
// 	  User {
// 		name: 'Jone Smith',
// 		email: 'jani@gmail.com',
// 		password: 'qwert12345'
// 	  }
// 	]
//   }
// якщо потрідно вивести паприклад список імен группи
// console.log(group.users.map((user) => user.name).join(","));//якщо не додавати .join(",") виведе в вигляді масиву.
// Виведе:
//John Doc,Jone Smith

// class User {
// 	constructor(name, email, password) {
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 	}
// }
// class UserGroup {
// 	users = []; // зі static мимаємо спільну группу і звертатися до неї будь де в коді. без можно робити різні групи
// 	addUser(user) {
// 		this.users.push(user);
// 	}
// }
// //класс який правильно проітерує группу і не видає приватні данні.
// class UserIterator {
// 	// #names = null;
// 	#users = null;
// 	#currentIndex = 0;
// 	constructor(userGroup) {
// 		// this.#names = userGroup.map((user) => user.name);//передаємо в names масив користувачів user.name
// 		//або через user
// 		this.#users = userGroup.users;
// 	}
// 	#hasHext() {
// 		return this.#currentIndex < this.#users.lenght;
// 	}
// 	next() {
// 		if(this.#hasHext()) {
// 			const name = this.#users(this.#currentIndex).name;  //якщо через user додаємо .name
// 			this.#currentIndex++;
// 			return name;
// 		}
// 		return null;
// 	}
// 	list() {
// 		return this.#users.map((user) => user.name).join(",");
// 	}
// }
// const group = new UserGroup();
// group.addUser(new User("John Doc", "john@gmail.com", "12345qwert"));
// group.addUser(new User("Jone Smith", "jani@gmail.com", "qwert12345"));
// console.log(group.users.map((user) => user.name).join(","));
// const iteraror = new UserIterator(group);
// console.log(iteraror.next());//John Doc
// console.log(iteraror.next());//Jone Smith
// console.log(iteraror.next());//null
// console.log(iteraror.list());//John Doc,Jone Smith

// class Iterator {
// 	constructor(collection) {
// 	this.collection = collection;
// 	this.index = 0;}
// 	hasNext() {
// 	return this.index < this.collection.length;}
// 	next() {
// 	const item = this.collection[this.index];
// 	this.index++;
// 	return item;}
// }
// class Collection {
// 	constructor(items) {
// 	this.items = items;}
// 	createIterator() {
// 	return new Iterator(this.items);}
// }
// const collection =
// new Collection(["Елемент 1", "Елемент 2", "Елемент 3"]);
// const iterator = collection.createIterator();
// while (iterator.hasNext()) {
// console.log(iterator.next());
// }
// Виведе:
// Елемент 1
// Елемент 2
// Елемент 3

//Медіатор//   визначає об'єкт, який інкапсулює взаємодію між групою об'єктів. Медіатор
// сприяє слабкій залежності між цими об'єктами, дозволяючи спілкуватися з ними через централізовану точку.
// Коли потрібно реалізувати взаємодію між групою об'єктів з меншою залежністю між ними та одним централізованим 
// об'єктом-медіатором.

// class User {
// 	constructor(name, chat) {
// 		this.name = name;
// 		this.chat = chat; //додаємо медіатор
// 	}
// 	sendMessage(message) {
// 		console.log(`${this.name} відправив повідомлення ${message}`);
// 		return this.chat.sendMessage(this, message);
// 		//.....
// 	}
// 	//Прийняття повідомлення від іншого користувача
// 	receiveMessage(user, message) {
// 		console.log(`${this.name} отримав повідомлення від ${user.name}: ${message}`);
// 	}
// }
// class Chat {
// 	constructor() {
// 		this.users = [];
// 	}
// 	///Додавання користувача до чату
// 	addUser(user) {
// 		this.users.push(user);
// 	}
// 	///відправка повідомлення в чат
// 	sendMessage(sender, message) {
// 		for(const user of this.users) {
// 			if(user !== sender) {
// 				user.receiveMessage(sender, message);
// 				///відправка повідомлення в Message
// 				///...
// 			}
// 		}
// 	}
// }
// const chatMediator = new Chat();
// const user1 = new User("John Doc", chatMediator);
// const user2 = new User("Jone Smith", chatMediator);
// const user3 = new User("Alex Net", chatMediator);
// chatMediator.addUser(user1);
// chatMediator.addUser(user2);
// chatMediator.addUser(user3);
// user1.sendMessage("Привіт, всім!");
// user2.sendMessage("Привіт, John Doc!");
// Виведе:
// John Doc відправив повідомлення Привіт, всім!
// Jone Smith отримав повідомлення від John Doc: Привіт, всім!
// Alex Net отримав повідомлення від John Doc: Привіт, всім!
// Jone Smith відправив повідомлення Привіт, John Doc!
// John Doc отримав повідомлення від Jone Smith: Привіт, John Doc!
// Alex Net отримав повідомлення від Jone Smith: Привіт, John Doc!

// class Mediator {
// 	constructor() {
// 	this.colleague1 = null;
// 	this.colleague2 = null;
// 	}
// 	setColleague1(colleague) {
// 	this.colleague1 = colleague;
// 	}
// 	setColleague2(colleague) {
// 	this.colleague2 = colleague;
// 	}
// 	send(message, colleague) {
// 	if (colleague === this.colleague1) {
// 	this.colleague2.notify(message);
// 	} else {
// 	this.colleague1.notify(message);}
// 	}
// }
// class Colleague {
// 	constructor(mediator) {
// 	this.mediator = mediator;}
// 	send(message) {
// 	this.mediator.send(message, this);}
// 	notify(message) {
// 	console.log(`Повідомлення отримано: ${message}`);}
// 	}	
// const mediator = new Mediator();
// const colleague1 = new Colleague(mediator);
// const colleague2 = new Colleague(mediator);
// mediator.setColleague1(colleague1);
// mediator.setColleague2(colleague2);
// colleague1.send("Вітання!");
// // Виведе: "Повідомлення отримано: Вітання!"
// colleague2.send("Привіт!");
// // Виведе: "Повідомлення отримано: Привіт!"

////Цикл подій (Event loop)

// function consolelog() {
// 	console.log("4");
// 	console.log("5");
// 	console.log("6");
// }
// console.log("1");
// console.log("2");
// console.log("3");
// consolelog();
// Виведе: 
// 1
// 2
// 3
// 4
// 5
// 6
// for (let i = 0; i < 1000; i++) {
// 	console.log(i);
// }

// console.log("Перший");
// setTimeout(() => {
// 	console.log("Другий"); // затримка в часі на виконання Web/node API
// }, 1000 * 2);
// console.log("Третій");

// setTimeout(() => {
// 		console.log("Перший"); 
// 	}, 0);
// setTimeout(() => {
// 	console.log("Другий"); 
// }, 0);
// console.log("Третій");
// console.log("Четвертій");
// setImmediate(() => {  ///Має меньший пріоритет якщо в setTimeout 0 час
// 	console.log("П'ятий"); 
// }, 0);
// setTimeout(() => {
// 	console.log("Шостий");
// }, 0);
// console.log("Сьомий");
// Виведе: 
// Третій
// Четвертій
// Сьомий
// Перший
// Другий
// Шостий
// П'ятий
// setTimeout(() => {
// 			console.log("Перший"); 
// 		}, 0);
// setInterval(() => {
// 	console.log("Другий"); ///робе повтори через певний ынтервал
// }, 1000);
// console.log("Третій");
// console.log("Четвертій");
// setImmediate(() => {  
// 	console.log("П'ятий"); 
// }, 0);
// // Виведе:
// Третій
// Четвертій
// Перший
// П'ятий
// Другий
// Другий
// Другий
// Другий ,безкінечна функція. щоб зупинити

// setImmediate(() => {  
// 	console.log("Перший"); 
// })
// const itervalid =  setInterval(() => {
// 	console.log("П'ятий"); ///робе повтори через певний ынтервал
// }, 1000);
// setTimeout(() => {
// 	console.log("Другий"); 
// 	clearInterval(itervalid); //відключає повтор через інтервал
// }, 5000);
// console.log("Третій");
// console.log("Четвертій");
// // Виведе:
// Третій
// Четвертій
// Перший   
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// Другий
// const immediateId = setImmediate(() => {  
// 	console.log("Перший"); 
// });
// const itervalId =  setInterval(() => {
// 	console.log("П'ятий"); ///робе повтори через певний ынтервал
// }, 1000);
// setTimeout(() => {
// 	console.log("Другий"); 
// 	clearInterval(itervalId); //відключає повтор через інтервал
// }, 5000);
// console.log("Третій");
// console.log("Четвертій");
// clearImmediate(immediateId);
// // Виведе:
// Третій
// Четвертій
// Третій
// Четвертій
// Перший
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// Другий
// Другий

//Управління асинхронними операціями

// function loadFile(filename, callback) {   /// функція з імям filename та callback функцією
// 	try {                                /// try-catch функція яка перевіряє чи виконується функція (чи є файл на компі)
// 		console.log(`Заватаження файлу ${filename}...`);
// 		setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);// ассінхронна функція з затримкою 2000 мс
// 	} catch (e) {
// 		callback(e);  ///
// 	}
// }
// // loadFile("example.txt", function(error, content) {// чи можна так loadFile("example.txt", (error, content) => {  //// callback функція
// // 	if(error) {                                      /////
// // 		console.error("Помилка завантаження файлу", error);  ///
// // 	} else {
// // 		console.log("Файл завантажено успішно!");  ///
// // 		console.log("Вміст файлу:", content);
// // 	}
// // });
// // Виведе:
// // Заватаження файлу example.txt...
// // Файл завантажено успішно!
// // Вміст файлу: Вміст файлу example.txt
// function convertFile(content, callback) { //
// 	setTimeout(function() {
// 		//Конвертація файлу...
// 		callback(null, `Конвертований вміст: ${content.toUpperCase()}`);
// 	}, 1000);
// }
// function saveFile(convertedContent, callback) { //
// 	setTimeout(function() {
// 		//Збереження файлу...
// 		callback();
// 	}, 1500);
// }
// function sendFileToClient(callback) { //
// 	setTimeout(function() {
// 		//Відправка данних в інтерфейс
// 		callback();
// 	}, 500);
// }
// // тоді буде такий код

// loadFile("example.txt", function(error, content) {// чи можна так loadFile("example.txt", (error, content) => {  //// callback функція
// 	if(error) {                                      /////
// 		console.error("Помилка завантаження файлу", error);  ///
// 	} else {
// 		console.log("Файл завантажено успішно!");  ///
// 		console.log("Вміст файлу:", content);

// 		convertFile(content, (error, convertedContent) => {
// 			if(error) {                                     
// 				console.error("Помилка конвертації файлу", error);  ///
// 			} else {
// 				console.log("Файл успішно сконвертовано!");  ///
// 				console.log("Конвертований вміст:", convertedContent);
// 			saveFile(convertedContent, (error) => {
// 				if(error) {                                     
// 					console.error("Помилка збереження файлу", error);  ///
// 				} else {
// 					console.log("Файл успішно сбережено!");
// 					sendFileToClient((error) => {
// 						if(error) {                                     
// 							console.error("Помилка відправки файлу клієнту:", error);  ///
// 						} else {
// 							console.log("Файл успішно відправлено клієнту!");
// 						}
// 					});
// 				}				///
// 			});					///		Пекельна піраміда	
// 		}						///
// 	 });
// 	}	
// });
// Виведе:
// Заватаження файлу example.txt...
// Файл завантажено успішно!
// Вміст файлу: Вміст файлу example.txt
// Файл успішно сконвертовано!
// Конвертований вміст: Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT
// Файл успішно сбережено!
// Файл успішно відправлено клієнту!

// // Обіцянка (Promise) //яка буде вирішена (resolved) або відхилена (rejected) чи "pending" (очіува::я):
// const loadFile = (filename) => new Promise((resolve, reject) => {
// 	console.log(`Заватаження файлу ${filename}...`);
// 	//якщо  вставляємо reject("error");
// 	// reject("error");
// 	setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
// 	// reject(new Error()); ///чи просто тукст "Помилка конвертації файлу" чи просто error
// })
// const result = loadFile("image.pmg");
// console.log(result);
// setTimeout(() => console.log(result), 3000);
// Виведе:
// Заватаження файлу image.pmg...
// Promise { <pending> }
// Promise { 'Вміст файлу image.pmg' }

// const result = loadFile("image.pmg");
// result.then((data) => {
// 	console.log(data);},
// 	(error) => {
// 		console.log(error);
// });
// Виведе:
// Заватаження файлу image.pmg...
// Вміст файлу image.pmg
// з reject("error");
// Заватаження файлу image.pmg...
// error
// result.then((data) => {
// 	return data.toUpperCase();
// }).then((data) => {
// 	console.log(data);
// });
// //чи можно так
// loadFile("image.pmg")
// .then((data) => {
//   return data.toUpperCase();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
//   console.log("Error", error);
// })
// .finally(() => {
//   console.log("End");
// });
// Виведе:
// Заватаження файлу image.pmg...
// Promise { <pending> }
// Заватаження файлу image.pmg...
// ВМІСТ ФАЙЛУ IMAGE.PMG
// ВМІСТ ФАЙЛУ IMAGE.PMG
// End
// Promise { 'Вміст файлу image.pmg' }
// //щоб .then шли паралельно і не враховувались попередні .then та створює нові промізи
// // const result = loadFile("photo.pmg");
// // result.then((data) => {
// // 	console.log(data, 1);
// // 	return null;
// // });
// // result.then((data) => {
// // 	console.log(data, 2);
// // 	return null;
// // });
// // result.then((data) => {
// // 	console.log(data, 3);
// // 	return null;
// // });
// // Виведе:
// // Заватаження файлу photo.pmg...
// // Вміст файлу photo.pmg 1
// // Вміст файлу photo.pmg 2
// // Вміст файлу photo.pmg 3

// function loadFile(filename) {   
// 	return new Promise ((recolve, reject) => {
// 		setTimeout(() => {
// 		recolve(`Вміст файлу ${filename}`);
// 	}, 2000);
// 	});
// }
// function convertFile(content) {   
// 	return new Promise ((recolve, reject) => {
// 		setTimeout(() => {
// 		recolve(`Конвертований вміст: ${content.toUpperCase()}`);
// 	}, 1000);
// 	});
// }
// function saveFile(convertedContent) {   
// 	return new Promise ((recolve, reject) => {
// 		setTimeout(() => {
// 		reject("Error test");
// 	}, 1500);
// 	});
// }
// function sendFileToClient(convertedContent) {   
// 	return new Promise ((recolve, reject) => {
// 		setTimeout(() => {
// 		recolve();
// 	}, 500);
// 	});
// }

// function getInfoFromFile(file) {
// 	console.log(file, 1111);
// 	return Promise.resolve(file); //дозволяє додати функції промізу нові файли
	//якщо зробити просто return file. то через .then результат виведе але
	// якщо потім буде треба визвати getInfoFromFile треба писати через return Promise.resolve(file);
// }
// loadFile("example.txt")
// .then((content) => {
// 	console.log("Файл завантажено успішно!");  
// 	console.log("Вміст файлу:", content);
// 	return convertFile(content);
// })
// .then((data) => {
// 	return getInfoFromFile(data);
// })
// .then((convertedContent) => {
// 	console.log("Файл успішно сконвертовано!");  
// 	console.log("Конвертований вміст:", convertedContent);
// 	return saveFile(convertedContent);
// })
// .then(() => {
// 	console.log("Файл успішно збережено!");  
// 	return sendFileToClient();
// })
// .catch((error) => {
// 	console.error("Сталася помилка", error);
// })
// .finally(() => {
// 	console.log("Файл успішно відправлено клієнту!");  
// });
// Виведе:
// Файл завантажено успішно!
// Вміст файлу: Вміст файлу example.txt
// Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT 1111
// Файл успішно сконвертовано!
// Конвертований вміст: Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT
// Файл успішно збережено!
// Файл успішно відправлено клієнту!

// Promise.all([  ///Виводить масив значень виконнання промізу, якщо є хочь одно помилка  error
// 	loadFile("example.txt"), 
// 	getInfoFromFile("example1233.txt"), 
// 	saveFile(), 
// 	sendFileToClient(), 
// 	convertFile("file")])
// .then((data) => {
// 	console.log(data);
// });
// Виведе:
// example1233.txt 1111
// [
//   'Вміст файлу example.txt',
//   'example1233.txt',
//   undefined,
//   undefined,
//   'Конвертований вміст: FILE'
// ]
// const test = Promise.allSettled([  ///Виводить масив значень виконнання промізу без учоту помилок
// 	loadFile("example.txt"), 
// 	getInfoFromFile("example1233.txt"), 
// 	saveFile(), 
// 	sendFileToClient(), 
// 	convertFile("file")])
// .then((data) => {
// 	console.log(data);
// })
// .catch((error) => {
// 	console.log(error);
// });
// console.log(test);
// Виведе:
// example1233.txt 1111
// Promise { <pending> }
// [
//   { status: 'fulfilled', value: 'Вміст файлу example.txt' },
//   { status: 'fulfilled', value: 'example1233.txt' },
//   { status: 'rejected', reason: 'Error test' },
//   { status: 'fulfilled', value: undefined },
//   { status: 'fulfilled', value: 'Конвертований вміст: FILE' }
// ]
// const test = Promise.any([  ///Виводить перший успішний результат
// 	loadFile("example.txt"), 
// 	getInfoFromFile("example1233.txt"), 
// 	saveFile(), 
// 	sendFileToClient(), 
// 	convertFile("file")])
// .then((data) => {
// 	console.log(data);
// })
// .catch((error) => {
// 	console.log(error);
// });
// console.log(test);
// Виведе:
// example1233.txt 1111
// Promise { <pending> }
// // example1233.txt
// const test = Promise.race([  ///Виводить першу результат
// 	loadFile("example.txt"), 
// 	getInfoFromFile("example1233.txt"), 
// 	saveFile(), 
// 	sendFileToClient(), 
// 	convertFile("file")])
// .then((data) => {
// 	console.log(data);
// })
// .catch((error) => {
// 	console.log(error);
// });
// console.log(test);
// // Виведе:
// example1233.txt 1111
// Promise { <pending> }
// example1233.txt

// Робота з Promise та HTTP-запити
// async- Використовується в оголошенні функцій для позначення їх як асинхронних
// await- Використовується всередині асинхронних функцій для очікування результату проміса
// перед продовженням виконання коду
// async function saveFile() {
// 	const file = await getFileFromServer()
// 	await saveFileToPC(file)
// }
// function loadFile() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("Дані файлу"), 2000);
// 	});
// }
// function sendFileToData(fileData) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => resolve(true), 1500);
// 	});
// }
// function loadAndSendFile() {
// 	return loadFile()
// 	.then((data) => {
// 		console.log(data);
// 		return sendFileToData(data)})
// 	.finally(() => console.log("Файл відправлено"));
// }
//можно так записати
// const loadAndSendFile = () =>
// 	loadFile()
// 	.then((data) => sendFileToData(data))
// 	.finally(() => console.log("Файл відправлено"));

// loadAndSendFile();
// Виведе: Дані файлу /Файл відправлено
/// 
// const loadAndSendFile = async () => {
// 	try {   ///для обробки помилок
// 	const data = await loadFile();

// 	await sendFileToData(data);
// 	} catch (e) {
// 		console.log(e);
// 	} finally {
// 	console.log("Файл відправлено")
// 	}
// };
// loadAndSendFile();
// Виведе: Файл відправлено
// const loadAndSendFile = async () => {
// 	const data = await loadFile();
// 	await sendFileToData(data);
// 	console.log("Файл відправлено")
// };
// loadAndSendFile().then(() => {
// 	console.log("End")
// 	console.log("----------")
// });
// console.log("----------")
// // Виведе: 
// ----------
// Файл відправлено
// End
// ----------

// HTTP-запит — це механізм, який дозволяє веб-сторінкам звертатися до веб-серверів і отримувати дані.

// console.log("test");
// console.log(new Date().getTime());

//  method Це вбудована властивість, яка повертає рядок, який представляє HTTP-метод запиту
// GET — виконує запит для отримання ресурсуc
// POST — відправляє дані на сервер для обробки або створеннянового ресурсуc
// PUT — замінює повний ресурс або створює його, якщо він не існуєc
// DELETE — видаляє вказаний ресурсc
// HEAD — виконує запит без тіла для отримання заголовків відповідіc
// OPTIONS — виконує запит для отримання доступних методів або параметрів запиту.

// const request = new Request('https://jsonplaceholder.typicode.com/todos/1', {
// 	method: "DELETE"
// });
// request.method = "POST"; //не змінює
// console.log(request.method);

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
// 	method: "DELETE",
// });
// fetch('https://jsonplaceholder.typicode.com/todos/1', {
// 	method: "POST",
// });

// const data = {
// 	id: 1,
// 	name: "User",
// 	age: 50,
// };
// async function getData() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: "Bearer your_token",
// 		},
// 	});
// 	console.log(res);
// }
// getData();
/// виведе теж саме
// fetch('https://jsonplaceholder.typicode.com/todos/1', {
// 	method: "POST",
// 	body: JSON.stringify(data), //Передає данні з data на сервер. 
// 	// json() повертає данні (через new Request) в вигляді як передавали .
// 	//text() повертає данні (через new Request) в вигляді рядку	
// 	//clone() створення копії об'єкта Request.	
// 	// bodyUsed показує, чи були запити.json().text() видасть truy якщо ні folse
// 	//headers містить інформацію про заголовки HTTP-запит
// 	headers: {
// 		"Content-Type": "application/json",
// 		Authorization: "Bearer your_token",
// 	},
// }).then((res) => {
// 	console.log(res);
// });
// async function getData() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: "Bearer your_token",
// 		},
// 	});
// 	console.log(res.bodyUsed);
// 	const data = await res.json();
// 	// const data = await res.text(); /// розпарсити зі строки можна через JSON.parse(data)
// 	console.log(data);
// 	console.log(res.bodyUsed);
// 	console.log(res.status); ///res.statusText опис статусу 
// 	console.log(res.ok);
// }
// getData();

//Функція-генератор / це особливий тип функції, який може призупиняти своє виконання, повертаючи проміжний результат
//дозволяє створювати ітератори, повертає спеціальний об'єкт-ітератор. Цей об'єкт використовується для управління процесом виконання функції-генератора.

// async function performFile(path) {
// const content = await loadFile(path);  ///Зават=нтаження файлу
// const data = await convertFile(content);  ///конвертація файлу
// const convertedContent = await getInfoFromFile(data);  ///Отримання інформації про файл
// await saveFile(convertedContent); ///збереження файлу 
// await sendFileToClient(); ///відправлення файлу клієнту на фронтент частину
// }
// //
// function loadFile(filename) {   
// 		return new Promise ((recolve, reject) => {
// 			setTimeout(() => {
// 			recolve(`Вміст файлу ${filename}`);
// 		}, 2000);
// 		});
// 	}
// 	function convertFile(content) {   
// 		return new Promise ((recolve, reject) => {
// 			setTimeout(() => {
// 			recolve(`Конвертований вміст: ${content.toUpperCase()}`);
// 		}, 2000);
// 		});
// 	}
// 	function saveFile(convertedContent) {   
// 		return new Promise ((recolve, reject) => {
// 			setTimeout(() => {
// 			reject("Error test");
// 		}, 1500);
// 		});
// 	}
// 	function sendFileToClient(convertedContent) {   
// 		return new Promise ((recolve, reject) => {
// 			setTimeout(() => {
// 			recolve();
// 		}, 500);
// 		});
// 	}
	
// 	function getInfoFromFile(file) {
// 		console.log(file, 1111);
// 		return Promise.resolve(file); 
// 	}
// async function performFile(path) {
// 	const content = await loadFile(path);
// 	return [
// 		async () => {
// 		const data = await convertFile(content);
// 		return [
// 			async () => {
// 				const convertedContent = await getInfoFromFile(data);
// 				await saveFile(convertedContent);
// 				await sendFileToClient();
// 			},
// 			data,
// 		];
// 		},
// 		content,
// 	];			
// }
// // performFile("file.pmg").then(([next, content]) => console.log(next, content));
// //чи можно так
// async function main() { 
// 	const [next, content] = await performFile("file.pmg");
// 	console.log(next, content);
// 	///....
// 	////...
// 	await next();
// }
// main();
//Видасть: [AsyncFunction(anonymous)] Вміст файлу file.pmg

// function* myGenerator() {
// 	console.log("Start");
// 	///....код
// 	yield 1;
// 	///....код
// 	console.log("Start 2");
// 	yield 2;
// 	console.log("Start 3");
// 	yield 3;
// 	console.log("End");
// }
// const generator = myGenerator();
// const result1 = generator.next();
// console.log(result1); ////Видасть: Start / { value: 1, done: false }
// const result2 = generator.next();
// console.log(result2);
//Видасть:
// Start
// { value: 1, done: false }
// Start 2
// { value: 2, done: false }
// const result3 = generator.next();
// console.log(result3);
//Видасть:
// Start
// { value: 1, done: false }
// Start 2
// { value: 2, done: false }
// Start 3
// { value: 3, done: false }
// const result4 = generator.next();
// console.log(result4);
//Видасть:
// Start
// { value: 1, done: false }
// Start 2
// { value: 2, done: false }
// Start 3
// { value: 3, done: false }
// End
// { value: undefined, done: true }/  якщо додати return 4 пысля console.log("End");
//  буде { value: 4, done: true }

// function* processOrder(order) {
// 	yield validateOrder(order); ///
// 	yield processPayment(order); ///
// 	yield sendOrderConfirmation(order); ///

// 	return order;
// }
// function getOrderDetails() {
// 	const order = {id: 123, produck: "Товар", quantity: 2};
// 	return order;
// }
// function validateOrder(order) {
// 	const isValid = order.quantity > 0;
// 	return isValid;
// }
// function processPayment(order) {
// 	const isPaymentSuccessful = Math.random() < 0.5;
// 	return isPaymentSuccessful;
// }
// function sendOrderConfirmation(order) {
// 	const isConfirmationSent = true;
// 	return isConfirmationSent;
// }
// const order = {id: 123, produck: "Товар", quantity: 2};
// const orderProcessing = processOrder(order);
// console.log(orderProcessing.next());
// console.log(orderProcessing.next());
// console.log(orderProcessing.next());
// console.log(orderProcessing.next());
//Видасть:
// { value: true, done: false }
// { value: true, done: false }
// { value: true, done: false }
// { value: { id: 123, produck: 'Товар', quantity: 2 }, done: true }
// можно і так 
// const order = {id: 123, produck: "Товар", quantity: 2};
// const orderProcessing = processOrder(order);
// const isValidatorOrder = orderProcessing.next().value;
// if(isValidatorOrder === false) {
// 	//... ваше замовлення не провалідоване
// }
// const isProcessPayment = orderProcessing.next();
// if(isProcessPayment === false) {
// 	//... процесс оплати не успішний
// }
// console.log(orderProcessing.next());
// console.log(orderProcessing.next());

// function* generatorFunction() {
// 	yield "First value";
// 	yield "Seccond value";
// 	return 3;
// }
// const generator = generatorFunction();
// for(let value of generator) {
// 	console.log(value); /// First value/	Seccond value
// }
// const generator11 = generatorFunction();
// console.log(generator11.next());//Seccond value { value: 'First value', done: false }
// console.log(generator11.next());//Seccond value { value: 'Seccond value', done: false }
// console.log(generator11.next());//Seccond value { value: 3, done: true }
// function* generatorOne() {
// 	yield "1 1";
// 	yield "1 2";
// 	return 3;
// }
// function* generatorTwo() {
// 	yield* generatorOne();
// 	yield "2 1";
// 	yield "2 2";
// }
// const generator1 = generatorTwo();
// console.log(generator1.next()); //{ value: '1 1', done: false }
// console.log(generator1.next()); //{ value: '1 2', done: false }
// console.log(generator1.next()); //{ value: '2 1', done: false }
// console.log(generator1.next()); //{ value: '2 2', done: false }

// function* myGenerator() {
// 	//...
// 	const test = yield 1;
// 	console.log("test", test)
// 	const value = yield 2;
// 	yield 3;
// 	yield value;
// }
//  const generator = myGenerator();
//  console.log(generator.next().value); //1
//  console.log(generator.next(4).value); //test 4/ 2
//  console.log(generator.next(4).value); //3
//  console.log(generator.next().value); //4

//дострокове припинення генератора
// function* myGenerator() {
// 	//...
// 	const test = yield 1;
// 	return 10;
// 	console.log("test", test)
// 	const value = yield 2;
// 	yield 3;
// 	yield value;
// }
//  const generator = myGenerator();
//  console.log(generator.next().value); //1
//  console.log(generator.next(4).value); //10
//  console.log(generator.next()); //{ value: undefined, done: true }
//  console.log(generator.next(4).value); //undefined
//  console.log(generator.next().value); //undefined
 //чи можно так
//  function* myGenerator() {
// 	//...
// 	const test = yield 1;
// 	console.log("test", test)
// 	const value = yield 2;
// 	yield 3;
// 	yield value;
// }
// const generator = myGenerator();
//  console.log(generator.next().value); //1
//  console.log(generator.return(100)); //{ value: 100, done: true }
//  console.log(generator.next()); //{ value: undefined, done: true }
//  console.log(generator.next(4).value); //undefined
//  console.log(generator.next().value); //undefined
 // якщо потрібно додати помилку 
//  function* myGenerator() {
// 	try {//...
// 	const test = yield 1;
// 	console.log("test", test)
// 	const value = yield 2;
// 	yield 3;
// 	yield value;
// 	} catch (e) {
// 		// console.log(e);
// 		yield 1000;
// 		yield 2000;
// 	} finally {
// 		yield 3030;
// 	}
// 	yield 3000;
// 	yield 3200;
// }
// const generator = myGenerator();
//  console.log(generator.next().value);
//  console.log(generator.throw(new Error())); 
//  console.log(generator.next().value); 
//  console.log(generator.next().value); 
//  console.log(generator.next().value); 
//  console.log(generator.next().value); 
//  console.log(generator.next().value); 
//Видасть:
// 1
// Error
//     at Object.<anonymous> (C:\Users\user\work\js -2\index.js:3107:30)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47
// { value: 1000, done: false }
// { value: 2000, done: false }
// без console.log(e);
// 1
// { value: 1000, done: false }
// 2000
// 3030
// 3000
// 3200
// undefined

///Асинхронні генератори
// const asyncFunc = () => new Promise((resolve) => setTimeout(resolve, 1000));
// async function* asyncGenerator() {
// 	await asyncFunc();
// 	yield "After 1 second";
// 	await asyncFunc();
// 	yield "After 2 second";
// }
// async function runGenerator() {
// 	const generator = asyncGenerator();
// 	// console.log((await generator.next()).value); //After 1 second
// 	// console.log((await generator.next()).value); //After 2 second
// 	//або
// 	let result = null;
// 	result = await generator.next();
// 	console.log(result);    //{ value: 'After 1 second', done: false }
// 	result = await generator.next();
// 	console.log(result);    //{ value: 'After 2 second', done: false }
// 	//якщо потрібно проітерувати через for
// 	// for await (const result of generator) {
// 	// 	console.log(result);  // After 1 second/ After 2 second
// 	// }
// }
// runGenerator();

//функція яка іметує завантаження данних з серевера
// function fetchDataFromServer() {
// 	return new Promise((resolve, reject) => {
// 		//Симулюємо асинхронний запит до сервера
// 		setTimeout(() => {
// 			const randomNumber = Math.random();
// 			if(randomNumber < 0.7) {
// 				resolve("Дані успішно завантажені");
// 			}else {
// 				reject("Помилка завантаження даних")
// 			}
// 		}, 1000)
// 	});
// }
// //Функція для конвертації данних
// function convertData(data) {
// 	return new Promise((resolve) => {
// 		//Симулюємо асинхронний конвертації данних
// 		setTimeout(() => {
// 			const converteData = data.toUpperCase(); //Приклад конвертаціі
// 			resolve(convertData);
// 		}, 500)
// 	});
// }
// //Генераторний метод, що використовує yield для послідовного завантаження даних на сервер
// async function* fetchData() {
// 	try {
// 		const result = await fetchDataFromServer();  //завантажуємо дані з серверу
// 		yield "pending"; //повертаємо статус "pending"
// 		const converteData = await convertData(result); //конвертуємо дані
// 		yield "success"; ///повертаємо статус "success"
// 		return convertData;  //повертаємо конвертовані дані
// 	} catch (error) {
// 		yield "error"; //повертаємо статус "error"
// 	}
// }
// (async () => {
// 	const generator = fetchData();
// 	console.log(await generator.next()); //{ value: 'pending', done: false }/ чи { value: 'error', done: false }
// 	console.log(await generator.next());//{ value: 'success', done: false }/ чи  value: undefined, done: true }
// 	console.log(await generator.next());//{ value: "Дані успішно завантажені", done: true }/ чи  value: undefined, done: true }
// })();