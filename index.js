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


