//////////////////////////////////////////////////////////////////////
//////Знайомство з JS
// console.log(1 + 2 + 4);
 
// {
// console.log('Hello world');
// console.log('Test');
// }
//////////////////////////////////////////////////////////////////////
//////Змінні та назви
// let name;
// let age;

// const price = 100;

// age =10;

// age =20;
// age = name = "ivan" 
// price = 200;

// var color = "#ff";
// var color = "#000";
// console.log("log:", name, age, color);
//////////////////////////////////////////////
/////////Примитивні типи данних

// age = 47;
// name = "Aleksander";

// console.log("log:", name, age);
// let n = -10.4556;
 
// let n = -99999344 / "test";
// 	n = 5588889699096969n
// let b = NaN + 4;
// let c = Infinity;

//  console.log(n, b, c);
//  console.log(1 / 0);
//  console.log(6775465444 > Infinity);

//  const t = 'hello';
//  const p = "'#'hello";
//  const i = `hello ${t} ${2 + 2}`;
//  console.log(i);

//  let yes = true;
//  let no = false;
//  let isAdmin = false;

//  let none = null;

//  console.log(none);
//  console.log(typeof p);

//////////////////////////////////////////////
/////////Арифметичні оператори

//  const a = 1 + 8 - 5 - 2;
//  const b = a + 2 +'test';
//  const c = `1 - "10"  world`;
//  const e = -a;
//  const l = "10" * "10";
//  const q = "20" / "10";
//  const p = 5 ** 4;
//  const y = 9 ** 0.3;
//  const g = 10 % 5;
//  const s = 10 % 6;
//  let h = 6 % 7;

//  console.log(b, e, c);
//  console.log(l, q);
//  console.log(g, s);

//  h = ++h;
// 	p *= 5;
//  console.log(p);
//////////////////////////////////////////////
////////Щператори порівняння

// const personAge = 10;
// const dogAge = 50;

//  console.log(personAge < dogAge);

//////////////////////////////////////////////
////////Логічні оператори

// const userRole = 1;
// const adminRole = 2;

// const productStockPrice = 99;
// const defaultProductPrice = 150;
// const adminPrice = 0;
// const productPrice = productStockPrice ?? defaultProductPrice ?? adminPrice ?? 100;

// console.log("productPrice", productPrice);

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

// // const autorName = ivanRole === adminRole || "admin";
// const autorName = ivanRole === adminRole && "admin";

// console.log(autorName);

// let productTitle = "";
// productTitle = productTitle || "nazva";
//   console.log("productTitle", productTitle);

//////////////////////////////////////////////
////////Побутові порівняння

// let a = 4;
// let b = 6;

// console.log(a, a.toString(2));
// console.log(b, b.toString(2));

// let c = a & b;
// let c = a | b;

// const canRead = false;
// const canWrite = true;
// const canDelete = false;
// const canEdit = true;

// let userRole =0b0101;
// let adminRole = 0b1111;
// let user2Role =0b1010;

// let isAdmin = (userRole & user2Role) === userRole; 
// let friendRole = userRole | user2Role; 
// let friend1Role = userRole ^ user2Role; 

// console.log(friendRole === adminRole);
// console.log(friend1Role.toString(2));

// let freeTea = 0b0001;

// freeTea = freeTea << 1;
// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;
// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;
// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;
// console.log(freeTea.toString(2));

// console.log(freeTea === 0b10000);


// нажатие кнопки


// const a = 0b0001;
// const b = 0b0010;
// const c = 0b0100;

// let setting = 0b0000;

// setting |= a;
// setting |= b;

// isButtonOn = !((setting & a) === 0b0000);
// console.log(isButtonOn);

//////////////////////////////////////////////
///////Умовні розгалуження

// const productName = "Мікрофон";
// const productDefault = "Нова назва";
// const newProductName = "Мікрофон 3000";
// const userRole = "user";

// const updateproductName = userRole === "admin" ? newProductName : (productName || productDefault);
// const updateproductName = (userRole === "admin" && newProductName)  || productName;
// const updateproductName = 
// 	userRole === "admin"
// 	? console.log("isAdmin") || newProductName
// 	: console.log("noAdmin") || productName;	

// console.log(updateproductName);

// 

// const CUSTOM_NAME = 'My robot';
// const MODE = 0;
// const ROOM = "Вітальня"; 

// const COMAND = 'change name';

// if (COMAND === 'change name' && MODE !== 0) {
// 	const name = CUSTOM_NAME || 'Robot v13411f';
// 	console.log(`Start ${name}`);
// }
// if (MODE === 0) {
// 	console.log(`Robot is offline`);
// }

// if (COMAND === 'work') { 
// 	const room = ROOM;
// 	const mode = MODE;

// 	console.log(`Mode: ${mode}; прибираю кімнату: ${room}`);
// }

// const login = 'user';
// const password = '123qw123';
// const isAdmin = true;
// const isLoggedin = null;

// if(isLoggedin) {
// 	if(isAdmin){
// 		console.log("переходимо на сторінку / admin");
// 	} 
// 	if(!isAdmin){
// 		console.log("переходимо на сторінку / home");
// 	} 
// }
// if(!isLoggedin) {
// 	if(login && password) {
// 		console.log("Token", 1234567781112);
// 		if(isAdmin){
// 			console.log("переходимо на сторінку / admin");
// 		} 
// 		if(!isAdmin){
// 			console.log("переходимо на сторінку / home");
// 		} 
// 	}
// }
// if(isLoggedin === true) {
// 	if(isAdmin){
// 		console.log("переходимо на сторінку / admin");
// 	} else if (login === 'demo') {
// 		console.log("переходимо на сторінку / demo");
// 	} else {
// 		console.log("переходимо на сторінку / home");
// 	}  
// }  else if (isLoggedin === false) {
// 	if(login && password) {
// 		console.log("Token", 1234567781112);

// 		if(isAdmin){
// 			console.log("переходимо на сторінку / admin");
// 		} else {
// 			console.log("переходимо на сторінку / home");
// 		}  
// 	} else if (isLoggedin === null) {
// 		console.log("Помилка");
// 	}
// }

// const price = 100;
// const userCashback = true;

// let cashbackAmount = null;
// let cashbackLevel = 4;
// let totalPrice = null;


// if (price < 100)  {
// 	console.log("кешбек система доступна для товарів від 100 грн.");
// 	cashbackAmount = 0;
// } else {
// 	if(cashbackLevel > 0) {
// 		cashbackAmount =  price * (cashbackLevel * 0.01);
// 	}
// 	cashbackL++;
// 	if(cashbackL > 5) {
// 		cashbackL = 1;
// 	}
// 	if(userCashback > 0 && userCashback) {
// 		totalPrice = price - cashbackAmount;
// 	}
// } 
// console.log(totalPrice);

// const buttonType = 'primary';


// if(buttonType === 'primary') {
// 	console.log("primary button");
// }
// const primaryType = 'primary';
// switch(buttonType) {
// 	case console.log("test") || "primary":
// 		console.log("primary button");
// 	case "secondari":
// 		console.log("secondari");
// 	break;
// 	case "secondari":
// 	console.log("secondari");
// 	case "secondari":
// 	console.log("secondari");

//////////////////////////////////////////////
///////Цикли

// let count = 0;
// while (count < 5) {
// 	console.log("Hello world!", count);
// 	count++;
// }


// let count = 0;
// let inFast = true;

// while (count < 5) {
// 	console.log("Hello world!", count);

// 	if (inFast && count >= 3) {
// 		count = 5;
// 	} else {
// 		count++;
// 	}
	
// }

// const PRODUCT_AMOUNT =6;
// const DISCPUNT_ADDITIONAL = 2;

// let discontAmount = 0; 
// let produktCount = 0;

// while (produktCount < PRODUCT_AMOUNT && DISCPUNT_ADDITIONAL <= 10 && discontAmount <= 10) {
// 	produktCount++;
	 

// 	if(produktCount <=0) {
// 		break;
// 	}
// 	if(produktCount <=3) {
// 		discontAmount += 1;
// 	} else if (produktCount > 3 &&  produktCount  <= 5) {
// 		discontAmount += 1.5;
// 	} else if (produktCount > 5 &&  produktCount  <= 8) {
// 		discontAmount += 2;
// 	} else if (produktCount > 8) {
// 		discontAmount += 2.5;
// 	}

// 	if(DISCPUNT_ADDITIONAL) {
// 		discontAmount += DISCPUNT_ADDITIONAL;
// 	}

// 	console.log(produktCount, discontAmount, "%");
// }

// if(discontAmount >10) {
// 	discontAmount = 10;
// }
 
// console.log("Знижка", discontAmount, "%");
// console.log("Товарів зі знижкою ", produktCount);
// console.log("Товарів без знижки", PRODUCT_AMOUNT - produktCount);
// let sum = 0;
// let cout = 10;

//  do {
// 	sum += cout;
// 	cout++;
// 	console.log(cout, sum);
// } while (cout <= 5)

// let container = 5;
// let starage = 20;
// let car = 1;

//  do {
// 	car++;
// 	starage -= container;
// 	console.log(car, starage);
// } while (car <= 3);

// if(car > 3) {
// 	console.log("Нам потрібна ще одна машина");
// }
//  let start = 40;
//  let goal = 100;
//  let step = 0;
//  let set = 8;
//  let rest = 10;

//  do {
// 	if(step === 0) {
// 		console.log("початок тринування");
// 	}
// 	start++;
// 	step++;

// 	if(step === goal || start === goal) {
// 		console.log("кінець тринування");
// 		break;
// 	}
// 	if(step % rest === 0) {
// 		console.log(`Зробіть перерву`);
// 		continue;
// 	}
// 	if(step % set === 0) {
// 		console.log(`Ви зробили ${step / set} сет - МОЛОДЕЦЬ`);
// 	}
// 	if(step === goal / 2) {
// 		console.log(`Ви зробили половину тринування`);
// 	}
	
// 	console.log(`Поточній прогресс`, step);
//  } while (step <goal && start < goal);

// for (let i = 0, j = 5; i <= j; i++) {
// 	console.log("Test", i, j);
// 	if (i === 3) {
// 		j++;
// 	}
// 	for (let q = 0; q < i; q++) {
// 		console.log("Q", q);
// 	}
// }
// let q = 0;

// main: for (let i = 0, j = 5; i <= j; i++) {
// 	console.log("Test", i, j);
// 	if (i === 3) {
// 		j++;
// 	}
// 	for (; ; q++) {
// 		console.log("Q", q);
// 		if (q >= i) {
// 			break main;
// 		}
// 	}
// }

// let age = 25;
// let hasExp = true;
// let hasEdu = true;
// let JS = true;
// let HTML = true;
// let result = null;

// form: {
// 	if(age >= 18) {
		
// 		if(hasExp) {
// 			console.log("Ви підходите");
// 			result = true;
// 			if (result === null && JS) {
// 				console.log("Ви підходите");
// 			}
// 			if (result === null && HTML) {
// 				console.log("Ви підходите");
// 			}
// 		}
// 		if(result === null && hasEdu) {
// 			console.log("Ви підходите");
// 			result = false;
// 		}
// 	}
// 	if(age < 18) {
// 		console.log("Ви не підходите, маленький вік");
// 		result = false;
// 	}
// }
// let age = 25;
// let hasExp = true;
// let hasEdu = false;
// let JS = true;
// let HTML = true;

// form: {
// 	if(age >= 18) {
		
// 		if(hasExp) {
// 			console.log("Ви підходите");
// 			break form;

// 			if (S) {
// 				console.log("Ви підходите");
// 			}
// 			if (HTML) {
// 				console.log("Ви підходите");
// 			}
// 		}
// 		if(hasEdu) {
// 			console.log("Ви підходите");
// 			break form;
// 		}
// 	}
// 	if(age < 18) {
// 		console.log("Ви не підходите, маленький вік");
// 		break form;
// 	}
// }
// table: for (let i = 2; i < 10; i++) {
// 	console.log(`Число ${i} ===============`);

// 	for(let j = 1; j < 10; j++) {
// 		if(i === 10) {
// 			break table;
// 		}
// 		let result = i * j;
// 		console.log(` ${i} *  ${j} *  ${result}`);
// 	}
// }

//////////////////////////////////////////////
//////Функції

// function calcSpace(amount, unit) {
// 	if (unit !== undefined) {
// 		return`${amount  * 4}${unit}`;
// 	} else {
// 		return "Error";
// 	}
	
// }
// console.log(calcSpace(5, "px"));

// function calcSpace(amount, unit = "px") {
// 	return`${amount  * 4}${unit}`;
// }
// console.log(calcSpace(5));


// function playTrackByid(trackId) {
// 	///щтримати файл пісні і її запустити
// }
// function stopTrackByid(trackId) {
// 	///щтримати файл пісні і її поставити на пвузу
// 	console.log(`Отримати файл пісні з ID ${trackId} її поставити на паузу`);
// }

// function play(trackName, trackId) {
// 	console.log(`Запускаємо ${trackName}`);
// 	playTrackByid(trackId);
// }
// function end(oldTrackName, newTrackName) {
// 	console.log(`Завершили грати трек ${oldTrackNamee}`);
// 	console.log(`Наступній трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
// 	console.log(`Трек ${currentTrackName} на паузі`);

// 	reloadDataTrack();
// 	play();
// }


// function reloadDataTrack (amount) {
// 	if(amount <= 0) {
// 		console.log(`Дані оновлені вказану кількість разів`);
// 	} else {
// 		console.log(`Повторне оновлення`);
// 		//певний код на оновлення данніх
// 		reloadDataTrack (amount - 1);
// 	}
// }
// reloadDataTrack(6);

// function pauseStopByTrack(trackName, trackId) {
// 	let originTrackName = trackName;
// 	let originTrackId = trackId;

// 	return function pauseStop() {
// 		stopTrackByid(originTrackId);
// 		console.log(`Трек ${originTrackName} на паузі`);
// 	};
// }
// function pauseStopByTrack(trackName, trackId) {
// 	let isPause = null;
// 	return () => {
// 		if (isPause == true) {
// 			return;
// 		}

// 		stopTrackByid(trackId);
// 		console.log(`Трек ${trackName} на паузі`);
// 		isPause = true;
// 	};
// }
//  const pauseStop12 = pauseStopByTrack("It-hello world !, 10");
//  pauseStop12();
//  pauseStop12();
//  pauseStop12();

//  const runCommand = function(command, errorFn) {
// 	const result = command();
// 	if(!result) {
// 		return errorFn();
// 	}
//  }
//  runCommand(function () {
// 	console.log('запуск команди');
// 	return 1 - 1; 
//  },function () {
// 	console.log('помилка');
//  })
///можно так стрілкова функція
//  runCommand( () => {
// 	console.log('запуск команди');
// 	return 1 - 1; 
//  }, () =>
// 	console.log('помилка')
//  );
//  const testFunc = () => {
// 	if (true) {
// 		var test = 10;
// 		test += 20;
// 	}
// 	return test;
//  };
//  console.log(testFunc());
// const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
// 	return (amount, unit = "px") => {
// 		if(oldAmount === amount && unit === oldUnit) {
// 			console.log("Memo");
// 			return oldResult;
// 		}
		
// 		oldResult = `${amount * 4}${unit}`;
// 		oldAmount = amount;
// 		oldUnit = unit;

// 		return oldResult;
// 	};
// };
// const calcSpace = memoCalcSpace();

// console.log(calcSpace(4));
// console.log(calcSpace(4));

// const getSpaceFromDesign = (componentName) => {
// 	switch (componentName) {
// 		case "button":
// 			return 4;
// 		case "card":
// 			return 3;
// 		default:
// 			return 2;
// 	}
// }
// const isMobile = true;

// const amount = getSpaceFromDesign("button");
// const amountMobile = isMobile ? amount / 2 : amount;
// const amountInPx = calcSpace(amountMobile);

// const calcSpaceFromDesign = (componentName) => {
// 	return calcSpace(getSpaceFromDesign(componentName));
// };
// const calcSpaceFromDesign = (componentName) => {
// 	const result = getSpaceFromDesign(componentName);
// 	return calcSpace(isMobile ? result / 2 : result);
// };

// console.log("/////");
// console.log(calcSpaceFromDesign("button"));

// const restartTreck = (trackName, trackId) => {
// 	return play(end())
// }

//////////////////////////////////////////////
//////Вбудовані глобальні функції

// const code = `console.log("Hello")`;
// eval(code);

// function calcScreenRation(w, h) {
// 	return w / h;
// }

// function calcScreenRation(w, h) {
// 	let result = w / h; 
// 	return isFinite(result) ? result : null;
// }

// function calcScreenRation(w, h) {
// 	w =parseInt(w);
// 	h =parseInt(h);

// 	let result = w / h; 

// 	if (isNaN(result)) {
// 		return "Error";
// 	} else if (!isFinite(result)) {
// 		return " is Infinity";
// 	} else {
// 		return  result;
// 	}
// }

// console.log(calcScreenRation("1920.2px", "1000.6px"));

// const num = parseInt('1000', 2);
// const num1 = parseFloat('1.551');

// console.log(num, num1);

// const damain = "it-brains.com.ua";

// function redirectToPath(path) {
// 	const link = encodeURI(`https://${damain}/${path}`);
// 	//робимо перехід на сторінку
// 	console.log(link);
// }
//або
// function redirectToPath(path) {
// 	path = encodeURIComponent(path);

// 	const link = `https://${damain}/${path}`;
// 	//робимо перехід на сторінку
// 	console.log(link);
// }

// const URI =
// https://it-brains.com.ua//product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D1%96%D0%B9/info;

// function getUrl(urlInURI) {
// 	urlInURI = decodeURI(urlInURI);
// 	console.log(urlInURI);
// return urlInURI;
// }
// redirectToPath("/product/Мікрофон рожевій/info");

/////////////////////////////////////////////////////////
/////

// getUrl(URI);

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;
// console.log(d - c < Number.EPSILON && c - d < Number.EPSILON );

// console.log(Number.MIN_SAFE_INTEGER);
// console.log( Number.MAX_SAFE_INTEGER);

// console.log( Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// function revievNumber(num) {
// 	if(Number.isNaN(num)) {
// 		return console.log('is Not a Number', num);
// 	} 
// 	if(!num && num !== 0) {
// 		return console.log('Bad number', num);
// 	} 
// 	if(!Number.isInteger(num)) {
// 		return console.log('Дробове число', num);
// 	}
// 	if(!Number.isSafeInteger(num)) {
// 		return	console.log('Небеспечне число', num);
// 	}
// 	return console.log(num);
// }
// revievNumber(Number.MAX_SAFE_INTEGER + 12);

// const a1 = 1155.0055546444544444444441;
// console.log(a3);
// const a2 = a1.toFixed("10000", 2);
// const a2 = parseInt("10000", 2);

// const a3 = parseFloat(a1.toFixed(2));
// const a3 = parseFloat(a1.toPrecision(2));
// const a3 = a1.toExponential();
// const a4 = Number(a3);
// const a4 = parseFloat(a3);
// const a4 = a3.toString(32);
// console.log(typeof a3);
// console.log(a3, a4);
// /////////////////////////////////////////////////////////////////////////
// ///// Вбудовані можливості для рядкових типів

// let a = "HelloWorld";

// console.log(a.length);
// console.log(String.fromCodePoint(128514, 54, 125522));

// const b = "Ŀ23456";
// console.log(b.codePointAt(0));
// console.log(String.fromCodePoint(319));

// console.log(String.raw`www.test.com/\ncatalog/cstegory/new`);

// console.log(a.concat(" ", b, " ", "!"));

// console.log(a.includes("He", 2));
// console.log(a.indexOf("o"));
// console.log(a.lastIndexOf("o"));

// console.log(a.startsWith("eo", 1));
// console.log(a.endsWith("eo", 12));

// console.log(a.at(2));

// const c = "HelloWorld";
// console.log(a.padStart(15, "/"));
// console.log(a.padEnd(15, "Start"));

// console.log(a.repeat(5));
// console.log(a.slice(5, 8));
// console.log(a.substring(5));

// console.log(a.toLowerCase());
// console.log(a.toUpperCase());

// const c = "     Hello    World     ";

// console.log(c.trimStart(), "1");
// console.log(c.trim(), "1");
// console.log(c.trimEnd(), "1");

////////////////////////////////////////////////////////
////////Масиви
// const a = 1;
// const b = 2;
// const c = 3;
// const getCate = () => 1;

// let list = [function Name() {}, "Text", 100, null, undefined, 1 + 2, 5 < 6, getCate(), a, b, c,];

// console.log(list);

// const testArr = Array(5);
// const testArr = [];

// testArr[0] = "Start";
// testArr[1] = 2;
// testArr[3] = null;
// testArr[2] = "play";
// testArr[4] = "SGo";
// testArr[5] = 12;
// testArr[testArr.length] = 32;
// testArr[testArr.length] = 80;

// testArr["test"] = "SGo";
// delete testArr[4]
// console.log(testArr.test); 
// console.log(testArr); 

// const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[13]]]

// console.log(big[0][1][2]); 

// const location = [
// 	[100, 200], 
// 	[105, 205], 
// 	[110, 190], 
// ];

// const loc1 = location[0];
// const loc2 = location[1];

// const [loc1, loc3] = location;

// const [loc1, ...rest] = location;
// const [[p1, p2], loc3, loc4 =  "test"] = rest;

// console.log(loc1, rest); 
// console.log(loc4); 
// console.log(p1, p2); 
// console.log(loc1, loc2); 

// for (const point of location) {
	
// 	for (const coord of point) {
// 		console.log(coord); 
// 	}
// }
// const location = [[100, 200], [105, 205], [110, 190],];
	
// 	for (const pointIndex in location) {
// 			console.log(lpcation(pointIndex)); 
// 			for (const coordIndex in location(pointIndex)) {
// 				console.log(llocation(pointIndex)[coordIndex]); 
// 			}
// 	}
// for (let i = 0; i < location.length; i++) {
// 	console.log(location(i));
// } for (let j = 0; j < location(i).length; j++) {
// 	console.log(location(i)(j));
// }
//  const l1 = [1, 3, 2];
//  const l1 = [1, 2, 3];
//  const l2 = [1, 2, 3];
//  const [...l3] =l1;
//  const l3 = [...l3];
//  const l3 = [...(l1 || [])];
// let l1 = [1, 2, 3];
// let l2 = [1, 2, 3];

//  const l3 = [100, ...(l1 || [])];
// //  console.log(l1.toString() === l2.toString());
// console.log(l1, l3);
// delete l1[0];
// console.log(l1, l3);

// [l1, l2] = [l2, l1];
// console.log(l1, l3);

// function printFullName(name, sunname, lastname) {

// 	return `${name} ${sunname} ${lastname}`;
// }
// console.log(printFullName('Ivan', 'Ivantnko', 'Ivannov'));

// function printFullName(...arg) {
// 	console.log(arg);
// 	return arg.toString;
// }
// console.log(printFullName('Ivan', 'Ivantnko', 'Ivannov'));

///////////////////////////////////////////////////////////////////////////
////////////
// function sumAllNum(...nums) {
// 	let sum = 0;
// 	for (const n of nums) {
// 		sum += n;
// 	}
// 	return (sum, nums.length);
// }
// console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9))

// function printFullName(name, surname, lastname, ...arg) {
// 		// console.log(arg);
// 		return `${name} ${surname} ${lastname} ${arg.length ? `(${arg.toString()}` : ""}`;
// 	}
// 	console.log(printFullName('Ivan', 'Ivantnko', 'Ivannov'));

///////////////////////////////////////////////////////////////////

// const key = "23jhjhdjg";

// const a = {
// 	amount: 100,
// 	[key]: "HelloWorld!",
// 	info: {
// 		name: "Ivan",
// 		age: 35,
// 	},
// };

// console.log(a)

// console.log(a [key]);
// console.log(a.amount);
// delete a.amount;
// const b = {}
// console.log(a [key]);
// console.log(b);
// console.log(a);
// const role = {
// 	value: "admin",
// 	status: 3,
// }
// const person = {
// 	name: "Ivan",
// 	age: 25,
// 	occupation: "розробгик програмного забеспечення",

// 	...role,
// 	adress: {
// 		city: "Dnipro",
// 		street: "Sichovih strilcov",
// 		houseNumber: 40
// 	},
// 	getAdress: function () {
// 		return this.adress;
// 	},
// };
// const person2 = {...person};
// delete person.adress;
// console.log("surname" in person);
// console.log( person2.getAdress());

// const { name, age, adress: {city, street}, ... rest} = person;

// console.log(name, age, city, street);
// console.log(rest);

// function getAdress ({adress: {city, street, houseNumber, zipcode = 10456}} ){
	
// 	return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipcode} `;
// }
// const test = getAdress(person)
// console.log(test);

// function getAdress({adress }) {
// 	if(adress) {
// 		const {
// 			city, street = "Не вказано", houseNumber, zipcode = 1000, } = adress;
// 			return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipcode} `;
// 	}
// 	return "Нема данніч";
// }
// const test = getAdress({city: "Dnipro"});
// console.log(test);

// for (const key in person) {
// 	const item = person[key];

// 	if(typeof person[key] === "object") {
// 		for (const key2 in item) {
// 			console.log(item[key2]);
// 		}
// 	} else {
// 		console.log(item);
// 	}
// };
// const a = {test: 1};
// const b = a;
// console.log(a === b);

// Number.prototype.toOnString = function () {
// 	console.log(this);
// 	return `"Число" ${this}`;
// };
// const b = 1;
// const c = b.toOnString();
// console.log(c);
////////////////////////////////////////////////////////////////////////////////
///////////Символи

// const a = {
// 	name: "Ольга",
// 	age: 34,
// };

// const key = "name";

// a[key] ="user";
// console.log(a);
// const phoneBook = {
// 	0: 1,
// 	Olga: "+380675638820",
// };

// function addToPhoneBook(phone, id) {
// 	const key = Symbol(id + phoneBook[0]);

// 	phoneBook[key] = phone;
// 	phoneBook[0]++;
// }
// addToPhoneBook("+380675638820", "Olga");

// addToPhoneBook("+380648218820", "Ol
// // console.log(phoneBook);
// const user = {
// 	name: "Olga",
// 	id: 1214531,
// 	bookid: null,

// 	getPhone(book) {
// 		return book[this.bookid];
// 	},
// };
// const phoneBook = {
// 	me: "+380675638820",
// 	name: "Phone Book",

// };

// function addToPhoneBook(phone, user) {
// 	const simKey = Symbol.for(user.id);

// 	phoneBook[simKey] = phone;
// 	user.bookid = simKey;
// }
// addToPhoneBook("+380675638820", user);

// ////////
// addToPhoneBook("+3806455638820", user);

// ////////

// console.log(user.getPhone(phoneBook));
// console.log(phoneBook);

// ////////...
// const id = user.bookid;

// console.log(Symbol.keyFor(simKey))

// function addToPhoneBook(phone, id) {
// 	const key = Symbol(id);

// 	phoneBook[key] = phone;
// 	return key;
// }
// const Olga1 = addToPhoneBook("+380675638820", "Olga@123");

// const Olga2 =  addToPhoneBook("+380648218820", "Olga@234");

// console.log(phoneBook);
// console.log(phoneBook[Olga1]);
// console.log(Olga1.description);

// const a = Symbol.for("1");
// const b = Symbol.for("1");

// // console.log(String(a), String(b));
// console.log(a, b);

// for (const key in phoneBook) {
// 	console.log(key);
// }

// let range = {
// 	from: 1,
// 	to: 5,
// 	[Symbol.iterator]() {
// 		this.corrent = this.from;
// 		return this;
// 	},
		
// 	next() {
// 		return this.corrent <= this.to ? {done: false, value: this.corrent++} : {done: true};
// 	},
// };
// for(let num of range) {
// 	console.log(num);
// }
// const iterator =range[Symbol.iterator]();
// do {
// 	console.log(iterator.corrent);
// 	result = iterator.next();
	
// } while (!result.done);
///////////////////////////////////////////////////////
///////////Вбудовані можливості для масиву 1
// const arr = [1, 2, 3, 4, 5];
// const iterator = arr[Symbol.iterator]();

// result = iterator.next();

// do {
// 	console.log(result.value);

// 	result = iterator.next();
// } while (!result.done);
/////////////////////////////////////////////////////////////////////////////
// Вбудовані можливості для Масивів 1 та 2 частина

// const obj = {0: "Hello", 1: "Worworld", 2: "!!!", length: 3, prefix: "():"};

// console.log(Array.from("Hello Worworld"));
// console.log(Array.from(obj, function (elem, index) {

// 	console.log(this, length);
// 	console.log(elem, index);

// 	return elem;
// },

// console.log(Array.from(obj, 
// 	function (elem, index) {
// 	return `${this.prefix}${elem}`;
// },
// obj
// )
// );
// console.log(Array.isArray(1));
// console.log(Array.of(1, 2, 3, 4, 5));

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [4, 5, 6, -5];

// console.log(Array.of(arr1, arr12));
// console.log(Array.of(...arr1, ...arr12));
// console.log([...arr1, ...arr12]);

// console.log(arr1.at(1));
// console.log(- (arr1.length - arr1.push(10, 20, 30)));
// console.log(arr1);
// console.log(arr1.pop());
// console.log(arr1);

// console.log(arr1.shift());
// console.log(arr1);
// console.log(arr1.unshift(0, 1));
// console.log(arr1);

// console.log(arr2.includes(5));
// console.log(arr2.indexOf(5));
// console.log(arr2.lastIndexOf(5));
// const arr3 = [...arr1, ...arr2]
// const arr3 = arr1.concat(...arr2)
// console.log(arr3);

// console.log(arr1);

// arr1.copyWithin(2, 6, 9);
// console.log(arr1);

// arr1.fill(5, 6, 9);
// console.log(arr1);

// arr1.reverse();
// console.log(arr1);

// const filterArr = arr1.filter((value, index, array) => value % 2);
// const filterArr1 = arr1.filter((value, index, array) => value % 2 === 0);
// console.log(filterArr, filterArr1);
// const sorFn = (elem1, elem2)  => (elem1, elem2);
// const sorFn = (elem1, elem2)  => -(elem1, elem2);
// const sorFn = (elem1, elem2)  => {
// 	if (elem1 === 10) {
// 		return 1;
// 	}
// 	return elem1 < elem2 ? 1 : -1;
// };
// const sorFn = (elem1, elem2)  => {
// 	if (elem1 % 2 === elem2 %2) {
// 		return 0;
// 	} else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
// 		return 1;
// 	} else {
// 		return -1;
// 	}
// };
// const sortArr = arr1.sort();
// const sortArr = [1, 2, 3, 4, 11, 20, 30, 40].sort(sorFn);
// console.log(sortArr);

// console.log(arr2.every((elem, index, array) => elem >= 0));
// console.log(arr2.some((elem, index, array) => elem >= 0));
/////////////////////////////////////////////////////////////////////////
// Вбудовані можливості для масиввів 2 час
// const userList = [
// {id: 1, name: "Diana", age: 19, balance: 300},
// {id: 23, name: "Ivan", age: 39, balance: 0},
// {id: 4581, name: "Anton", age: 43, balance: 3020},
// ];

// // let age = 0;
// // const userBigAge = userList.sort((user1, user2) => {
// // 	return user2.age - user1.age;
// // });
// let minage = 30;
// const userBigAge = userList.find(({age}) => age >= 30);
// const userBigAge = userList.findIndex(({age}) => age >= minage);
// const userBigAge = userList.findLastIndex(({age}) => age >= minage);

// console.log(userBigAge);
// const iter = userList.keys();
// const iter = userList.values();
// console.log(iter);

// const result = iter.next();
// console.log(result);

// for (const elem of iter) {
// console.log(elem);
// }
// const arr = ["Apple", "Hotdog", "Bread", "Milk"]

// // console.log(arr.toString());
// // console.log(arr.join(", "));
// // console.log(arr.join(", "));

// // const arrSmall = arr.splice(1, 1)
// // const arrSmall = arr.splice(1, 2, "Tea", "Chese", ...userList);
// // const arrSmall = [...arr].splice(1, 2);
// const arrSmall = arr.slice(1, 2);
// console.log(arrSmall);

// console.log(arr);

// const result = userList.reduce((num, user, userIndex, array) => {
// 	console.log(num, user.age);
// 	return user.age > num ? user.age : num;

// }, 1);
// console.log(result);

// const totolBalance = userList.reduce((num, user) => num + user.balance, 0);

// console.log(totolBalance);
// const result = userList.reduceRight((num, user, userIndex, array) => {
// 	console.log(num, user.age);
// 	return user.age > num ? user.age : num;

// }, 1);
// console.log(result);

// const result = userList.map((user, index, arrey) => {
// 	user.balanceLimit = 1000 -user.balance;

// 	if(user.balanceLimit < 0) {
// 		user.balanceLimit = 0;
// 	}
// 	return user;
// });
// console.log(result);

// const flatArray = [
// 		[
// 			[100, 105],
// 			[200, 205],
// 		],
// 		[
// 			[220, 300],
// 			[120, 110],
// 		],
// 		[
// 			[250, 250],
// 			[125, 230],
// 		],
// 	];

// console.log(flatArray.flat(20));
// console.log(flatArray.map((el) => el[0] - el[1]));
// console.log(flatArray.map((el) =>[...el, el[0] - el[1]]));
// console.log(flatArray.flatMap((el) =>[...el, el[0] - el[1]]));
//  const result = flatArray.map((el) => {
// 	console.log(el);

// 	el.map((it) => {
// 		console.log(it);

// 		return it;
// 	})
// 	return el;
//  });
//  const result = flatArray.map((el) => {
// 	return el.map((it) => {
// 		return it[0] - it[1];
// 	}),
//  });

//  console.log(result);
//  const result = flatArray.flatMap((el) => {
// 	return el.map((it) => {
// 		return it[0] - it[1];
// 	});
//  });

//  console.log(result);
// result.forEach((elem, index, array) => {
// 	console.log(elem);
// });
//////////////////////////////////////////////////////////////////////////
// Вбудовані можливості для обєкта

// const article = {
// 	info: {
// 		title: "My article",
// 		deccription: " This is info about arcticle",
// 	},
// 	id: 185325,
// 	categoryId: 1423,
// 	likeAmount: 442,
// };

// const ARTICLE_FIELD = {
// 	title: "ID статті",
// 	deccription: "Заголовок статті",

// };

// articlePhoto = {
// 	photoUrl: "...url",
// 	photoId: 100,
// 	photoType: "big",
// };

// articleCommenList = {
// 	list: [{id: 4323, user: "ivan", message: "крутой контент"}],
// };

// // Object.assign(article, articlePhoto, articleCommenList);

// console.log(article);
// console.log(Object.entries(article.info));

// const formList = Object.entries(article.info);

// const formListLayout =  formList.map(([key, value]) => {
// 	// return `${ARTICLE_FIELD[key]} : ${value}`;
// 	return `<p> <strong> ${ARTICLE_FIELD[key]} </strong> <br> <span> : ${value} </span> </p>`;
// });
// console.log(formListLayout);

// const objArr = [["id", 12558], ["Title", "My prod"], ["price", 1203],];
// console.log(Object.fromEntries(objArr));

// console.log(article.hasOwnProperty("125"));

// console.log(article.propertyIsEnumerable("id"));

// Object.freeze(article);
// Object.preventExtensions(article);
// article.test = "error";
// delete id;

// console.log(article.test);
// console.log(article.hasOwnProperty("tittle"));
// console.log(Object.isFrozen(article));
// Object.seal(article);

// delete article.id;
// console.log(article.id);
// console.log(Object.isExtensible(article));
// console.log(Object.isSealed(article));
// console.log(Object.keys(article))
//////////////////////////////////////////////////////////////////////////
////Рросунутий тип данних Множина//////////////////////////////////////

// const userIdList = new Set([4051, 4187, 50467, 45781]);
// console.log(userIdList);

// for(const value of userIdList) {
// 	console.log(value);
// }
// userIdList.forEach((value, value2, set) => console.log(value));
// console.log(userIdList.size);

// userIdList.add(4187);
// console.log(userIdList);
// console.log(userIdList.size);

// userIdList.add(45588);
// console.log(userIdList);
// console.log(userIdList.size);

// const result = userIdList.delete(45588);

// // userIdList.delete(45588);
// console.log(userIdList);
// console.log(userIdList.size);

// console.log(result);
// console.log(userIdList.has(45588));
// console.log(userIdList.has(4051));

// userIdList.clear();
// console.log(userIdList);

// const key = userIdList.keys();
// const key1 = userIdList.values();
// const key2 = userIdList.entries();
// console.log(key, key1, key2);

// const entry = userIdList.entries();
// const obj = Object.fromEntries(entry);
// console.log(obj);

// const valueList = userIdList.values();
// const arr= Array.from(valueList);
// console.log(arr);
///////........
// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// const set = new Set(arr);

// const arr2 = [...set];
// // або
// // const arr3 = Array.from(set.values());
// const arr3 = Array.from(set);

// console.log(set);
// console.log(arr2, arr3);

// const categoryList = new Set();

// function addCategory(category) {
// 	if (categoryList.has(category)) {
// 		console.log("Ця категорія вже є");
// 		return false;
// 	}
// 	categoryList.add(category);
// 	return true;
// }
// console.log(addCategory("спорт"));
// console.log(addCategory("спорт"));
// console.log(addCategory("їжа"));
// console.log(categoryList);

// const students = [
// 	{id: 1, name: "John", course: "Math"},
// 	{id: 2, name: "Jone", course: "Science"},
// 	{id: 3, name: "Adam", course: "Math"},
// 	{id: 4, name: "Eva", course: "English"},
// 	{id: 5, name: "Kate", course: "Science"},
// ];
// const course = students.map((student) => student.course);
// console.log(course);

// const courseList1 = new Set(course);
// ///або
// const courseList = new Set(students.map((student) => student.course));
// console.log(courseList, courseList1);
// ///чи в вигляді масиву
// console.log(Array.from(courseList));
//////////////////////////////////////////////////////////////////////////
////Рросунутий тип данних Словник//////////////////////////////////////

// const button = new Map([
// 	['color', 'red'],
// 	['size', '32px']
// ]);
// console.log(button);

// const obj = {
// 	color: "red",
// 	size: 32 + "px",
// };
// const set = new Set(["red", "32px"]);

// // const button2 = new Map(Object.entries(obj));
// ////чи можно 
// const button2 = new Map(Object.entries(Object.fromEntries(set.entries())));
// console.log(button2);

// const button3 = new Map(set.entries());
// console.log(button3);

// const set2 = new Set(button);
// console.log(set2);

// const button = new Map([
// 		['color', 'red'],
// 		['size', '32px']
// 	]);
// for (const [key, value] of button) {
// 	console.log(key, value);
// };
// for (const value of button) {
// 	console.log(value);
// };
// button.forEach((value, key, map) => console.log(value, key, map));
//  button.clear =1000;
//  button.set("weight", 600);

// // console.log(button.size);
// console.log(button);
// console.log(button.get("weight"));
// console.log(button.delete("weight"));
// console.log(button.delete("weight"));
// console.log(button);
// console.log(button.has("weight"));
// console.log(button.has("color"));
// button.clear();
// console.log(button);

// const LANG_LIST = {
// 	UA: "uk-UA",
// 	EU: "eu-US",
// };
// const lang = "uk";
// const ativeLang = LANG_LIST.UA;
// const product = {
// 	price: 100,
// 	amount: 3,

// 	info: new Map([
// 	[
// 		LANG_LIST.UA, 
// 		{
// 			title: "Заголовок",
// 			info: "Штформація",
// 		},
// 	],
// 	[
// 		LANG_LIST.EU, 
// 		{
// 			title: "title",
// 			info: "info",
// 		},
// 	],
// ]),
// };
// console.log(product);

// const info = product.info.get(ativeLang);
// console.log(info);
// console.log(product.info.has(ativeLang));

// const user1 = {
// 	id: 1325,
// 	name: "Ivan",
// };
// const user2 = {
// 	id: 1585,
// 	name: "Anton",
// };
// const product1 = {
// 	id: 325,
// 	title: "Mobile Phone",
// };
// const product2 = {
// 	id: 32334,
// 	title: "Apple",
// };
// const userProduct = new Map();

// userProduct.set(user1,product1).set(user2,product2);

// console.log(userProduct);
// console.log(userProduct.has(user1));
// console.log(userProduct.get(user2));

// const productClientList = new Map();
// productClientList.set(product1, new Set());
// console.log(productClientList);
// console.log(productClientList.set(product1, productClientList.get(product1).add(user1)));

// const productClientList = new Map([[product1, new Set()]]);

// productClientList.set(product1, productClientList.get(product1).add(user1));
// console.log(productClientList);
// productClientList.set(product1, productClientList.get(product1).add(user2));
// console.log(productClientList);
// const has = productClientList.get(product1).has(user1);
// console.log(has);
///////////////////////////////////////////////
////Json Url

// const roleField = "roleName";
// const data = {
// 	id: 1384,
// 	login: "user3454",
// 	pasword: "12354568",
// 	[roleField]: "Admin",
// 	go() {
// 		console.log(go);
// 	},
// 	test1: {
// 		test2:  123,
// 	}
// };
// const jsonData = JSON.stringify(data, (key, value) => {
// 	if (key === roleField) {
// 		return null;
// 	}
// 	if (typeof value === "string") {
// 		return value.toUpperCase();
// 	}
// 	if (typeof value === "number") {
// 		return value * 10;
// 	}
// 	console.log(key, value);
// 	return value;
// },
// 8
// );
// console.log(jsonData);

// const parseaData = JSON.parse(jsonData,  (key, value) => {
// 	if (key === roleField) {
// 		return "Admin";
// 	}
// 	if (typeof value === "string") {
// 		return value.toLowerCase();
// 	}
// 	if (typeof value === "number") {
// 		return value / 10;
// 	}
// 	console.log(key, value);
// 	return value;
// });

// console.log(parseaData);

// const url = new URL('/path', 'https://www.example.com');
// const url = new URL("https://www.example.com/path").href;
// const url = new URL("https://www.example.com/path").protocol;
// const url = new URL("https://www.example.com:4000/catalog/catalog-1/product-name/info#how-to-do").pathname;
// const url = new URL("https://www.example.com/path").origin;
// const url = new URL("https://www.example.com:4000/catalog/catalog-1/product-name/info#how-to-do").host;
// const url = new URL("https://www.example.com:4000/catalog/catalog-1/product-name/info#how-to-do").hostname;
// const url = new URL("https://www.example.com:4000/catalog/catalog-1/product-name/info#how-to-do).hash;
// const url = new URL("https://admin:450-356@www.example.com:4000/catalog/catalog-1/product-name/info#how-to-do").password;
// const url = new URL("https://admin:450-356@www.example.com:4000/catalog/catalog-1/product-name/info#how-to-do").port;
// const url = new URL("https://admin:450-356@www.example.com:4000/catalog/catalog-1/product-name/info#how-to-do").username;
// const url = new URL("https://www.google.com/search?q=hello&oq=hello&aqs=chrome.0.0i355i512j46i512l4j0i512j46i512l2j0i512j46i512.3532j0j7&sourceid=chrome&ie=UTF-8").search;
// const url = new URL("https://www.google.com/search?q=hello&q=hello World&aqs=chrome.0.0i355i512j46i512l4j0i512j46i512l2j0i512j46i512.3532j0j7&sourceid=chrome&ie=UTF-8"
// ).searchParams;

// const mainUrl = new URL("https://www.google.com/search?q=hello&q=hello World&aqs=chrome.0.0i355i512j46i512l4j0i512j46i512l2j0i512j46i512.3532j0j7&sourceid=chrome&ie=UTF-8"
// );
// const url = mainUrl.searchParams;

// // console.log(url);
// // console.log(url.has("q"));
// // console.log(url.append("name", "Guogle"));
// // console.log(url);
// // console.log(url.get("name"));
// // console.log(url.getAll("q"));
// // //  всі значення
// // url.sort();
// console.log(mainUrl);

// const url = new URL("https://www.google.com/search");

// url.searchParams.append("q", "cat photo");
// console.log(url.href);
////////////////////////////////////////////////////////////////////////////
///////Вбудована можливість Дата

// const date = new Date();
// console.log(date);

// const dateString = date.toISOString();
// console.log(dataString);

// console.log(new Date(dataString));

// console.log(Date.parse(dataString));
// ///або
// const data2 = Date.parse(dataString);
// console.log(data2);

// console.log(date.toString());
// console.log(date.toUTCString());
// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// const zone = date.getTimezoneOffset() / -60;
// console.log(zone);
/////
// const user = -3;

// // function getUserTimeZone(timezone) {
// 	// const date = Date.now();
// 	// let date = Date.now();

// 	// let date = new Date(2023, 5, 25, 12, 30, 0, 0);
// 	///час нашого поясу
// 	// let date = new Date(Date.UTC(2023, 5, 25, 12, 30, 0, 0));

// 	// console.log(date);
// 	// console.log(date.getTime());
// 	////або
// 	// console.log(date.getHours());
// 	// console.log(date.getUTCHours());

// 	// date.setHours(date.getUTCHours() + timezone);

// 	// const myTimeZone = date.getTimezoneOffset() / -60;

// 	// const myTimeZone = new Date().getTimezoneOffset() / -60;
// 	// console.log(myTimeZone);

// 	// date -= 1000 * 60 * 60 * myTimeZone;
// 	// date += 1000 * 60 * 60 * timezone;
// 	////або
// 	// date.setTime(date.getTime() - 1000 * 60 * 60 * myTimeZone);
// 	// date.setTime(date.getTime() + 1000 * 60 * 60 * timezone);
// 	///////або

// 	// return date.toString();l
// // 	return date;l
// // }
// // getUserTimeZone(user)
// // const userDate = getUserTimeZone(user);
// // console.log(userDate.toString());
// // console.log(userDate.toUTCString());

// // console.log(getUserTimeZone(user));
// // // console.log(new Date().toString(1693812273954));
// // console.log(new Date(getUserTimeZone(user)).toString());
// // console.log(new Date().toUTCString());
// // console.log(new Date(1687696200000).toString());
// // console.log(new Date(1687696200000).toUTCString());

// // console.log(userDate.getHours());
// // console.log(userDate.getUTCHours());
// // console.log(userDate.toString());
// // console.log(userDate.toTimeString());

// const date = new Date();
// const dateString = date.toISOString();

// console.log("year", date.getFullYear());
// date.setFullYear(2020);
// console.log("year", date.getFullYear());

// console.log("mouth", date.getMonth());
// date.setMonth(0);
// console.log("mouth", date.getMonth());

// console.log("date", date.getDate());
// date.setDate(31);
// console.log("date", date.getDate());

// console.log("day", date.getDay());

// console.log("minutes", date.getMinutes());
// date.setMinutes(29);
// console.log("minutes", date.getMinutes());

// console.log("seconds", date.getSeconds());
// date.setSeconds(25);
// console.log("seconds", date.getSeconds());

// console.log("millisecond", date.getMilliseconds());
// date.setMilliseconds(500);
// console.log("millisecond", date.getMilliseconds());

// console.log(date.toDateString());
/////////////////////////////////////////////////////////////////////////////////
///////Вбудована можливість Математика

// console.log(Math.PI);

// const a = 5.23567;
// const b = 10;
// const c = -5;
// const i = -0;
// const d = "dr";
// const arr =[20, 30, 40];

// console.log(Math.max(a, b, c, ...arr));
// console.log(Math.min(a, b, c, ...arr));
// console.log(Math.sign(i));
// console.log(Math.pow(b, 2));
// console.log(Math.sqrt(b));

// console.log(Math.floor(1.156), Math.floor(1.557), Math.floor(1.967));
// console.log(Math.ceil(1.156), Math.ceil(1.557), Math.ceil(1.967));
// console.log(Math.round(1.156), Math.round(1.499), Math.round(1.967));
// console.log(Math.trunc(1.156), Math.trunc(1.557), Math.trunc(1.967));

// const random = Math.trunc(Math.random() * 100) + 1;
// console.log(random);
// console.log(Math.random());

// console.log(0.1 + 0.2 === 0.3);
// console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));
// console.log(0.1 + 0.2);
// console.log(0.3);
// console.log(Math.fround(0.1 + 0.2));
// console.log(Math.fround(0.3));
// // 	///////або
// console.log(Math.floor(0.1 + 0.2) === Math.floor(0.3));
///////////////////////////////////////////////////////////////////////////
/////вбудовані можливості консолі

// {
// 	let a = 5;

// 	a = 10;

//  console.error("Error, а змінна повинна бути 5");
// }
// console.expection("Error, а змінна повинна бути 5");
// console.info("Error, а змінна повинна бути 5");
// console.warn("Error, а змінна повинна бути 5");
// console.debug("Error, а змінна повинна бути 5");
// console.log("Error, а змінна повинна бути 5");

// const counterLabel = "Timer";

// console.time(counterLabel);
// console.count(counterLabel);

// console.group("Group1");
// console.log("Test");
// console.warn("Test2");

// console.timeLog(counterLabel);
// console.count(counterLabel);

// console.groupCollapsed("Group2");
	// console.debug("Group3");
// 	console.groupEnd();
// console.groupEnd();

// console.timeEnd(counterLabel);
// console.countReset(counterLabel);

// const test1 = () => console.trace("Hello");
// const test2 = () => test1();
// const test3 = () => test2();

// test3();

// const data = [
// 	{name: "John", age: 25, city: "New York"},
// 	{name: "Alex", age: 47, city: "London"},
// ];
// console.table(data);
// console.table(data, ["name", "age"]);

// const a = 5;
// const b = 10;
// const result = a > b;
// console.assert(result, "info");

// if(result) {
// 	//.....
// } else {
// 	//.....
// };

// console.clear();

// console.log("%cHello World", "fond-size: 50px; color: yelow");

//////////////////////////////////////////////////////
///// Вбудовані Регулярні вирази

// const regexp = /test/gmsi;
// const regexp1 = RegExp("test", "g");

// console.log(regexp.flags);
// console.log(regexp.global);
// console.log(regexp.multiline);
// console.log(regexp.dotAll);
// console.log(regexp.ignoreCase);

// const result = regexp.exec("This is test");
// console.log(result);

// const regexp = /(?<group1>.e)(?<group2>st)/gims;

// console.log(regexp.exec("This is test and est"));
// console.log(regexp.exec("This is test and est"));
// console.log(regexp.exec("This is test and est"));

// console.log(regexp.test("This is test and est"));
// console.log(regexp.source);

// regexp.lastIndex = 9;
// console.log(regexp.exec("This is test and est"));
// // console.log(regexp.exec("This is test and est"));

// const test = "This is test and est";
// // console.log(test.replace(regexp, "###"));

// // console.log(test.search(regexp));
// // console.log(test.match(regexp));

// const result =test.matchAll(regexp);
// console.log(result.next());

//////////////////////////////////////////////////////////
///Обробка помилок

// try {
// const a = 10;
// a = 5;
// console.log("1");
// } catch (err) {
// 	console.log(err)
// } finally {
// 	console.log("2");
// }
// function getUserData(userId) {
// try {
// 	const a = 10;
// 	a = 5;
	
// 	//// робить запит до бази данних
// 	} catch (err) {
// 	////////////err - помилка про те, що данні з сервера не можуть бути отриманні
// 	throw new Error(
// 	`Помилка, Неможливо отримати данні користувача ${userId}`, 
// 	{
// 	cause: err,
// 	});
// 	}
// } 

// function updateUserData(userId) {
// 	try {
// 		const data = getUserData(userId);
// 		data.name = "Ivan";
// 		//// ........
// 		} catch (err) {
// 		const nawError = new Error(
// 		`Помилка, Неможливо оновити данні користувача ${userId}`, 
// 		{
// 		cause: err,
// 		});
// 		console.log(nawError.message);
// 		}
// 	} 
// 	getUserData(32432);	

	// const ERROR_ID_LIST = {
	// 	NOT_NUMBER: 1,
	// }
	// function sumNum(a, b) {
	// 	if(typeof a !== "number" || b !== "number") {
	// 		const error= new Error("Аргументи не є числами");
	// 		error.name = ERROR_ID_LIST.NOT_NUMBER;
	// 		throw error;
	// 	}
	// 	return a + b;
	// }

	// try {
	// 	sumNum(10, "abc");
	// } catch (err) {
	// 	console.log(err.message);
	// 	console.log(err.name);
	// 	console.log(err.steck);
	// 	console.log(err.toString);
	// 	console.log(err.casle);
	// }
	