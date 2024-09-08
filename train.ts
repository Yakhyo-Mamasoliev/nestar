// ZS-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

function singleNumber(arr) {
	return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(singleNumber([4, 2, 1, 2, 1]));

// // ZQ-TASK:

// // Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// // MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function findDuplicates(arr: number[]): number[] {
// 	const elementCount: { [key: number]: number } = {};
// 	const duplicates: number[] = [];

// 	for (const num of arr) {
// 		elementCount[num] = (elementCount[num] || 0) + 1;
// 	}

// 	for (const num in elementCount) {
// 		if (elementCount[num] > 1) {
// 			duplicates.push(Number(num));
// 		}
// 	}

// 	return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));

// // ZP-TASK:

// // shunday function yozing, u 2 ta array parametr qabul qilsin. Siz bu ikki arrayning qiymatlari o'xshash bo'lishini (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// // MASALAN:
// // areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// // areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// // areArraysEqual([1, 2, 3], [4, 1, 2]) // false
// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);

//     if (set1.size !== set2.size) {
//         return false;
//     }

//     for (let item of set1) {
//         if (!set2.has(item)) {
//             return false;
//         }
//     }

//     return true;
// }

// // Examples:
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); // true
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); // false

// // // ZO-TASK:

// // // Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// // // MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true
// // function areParenthesesBalanced(s: string): boolean {
// // 	let balance = 0;

// // 	for (const char of s) {
// // 		if (char === '(') {
// // 			balance++;
// // 		} else if (char === ')') {
// // 			balance--;
// // 		}

// // 		if (balance < 0) {
// // 			return false;
// // 		}
// // 	}

// // 	return balance === 0;
// // }

// // console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));

// // // Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// // // MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// // function rotateArray(arr: number[], index: number): number[] {
// // 	index = (index + 1) % arr.length;

// // 	const firstPart = arr.slice(index);
// // 	const secondPart = arr.slice(0, index);

// // 	return firstPart.concat(secondPart);
// // }

// // const originalArray = [1, 2, 3, 4, 5, 6];
// // const rotatedArray = rotateArray(originalArray, 3);
// // console.log(rotatedArray);
// // // ZM-TASK:

// // // Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
// // // MASALAN: reverseInteger(123456789) return 987654321

// // function reverseInteger(num) {
// // 	return parseInt(num.toString().split('').reverse().join(''));
// // }

// // console.log(reverseInteger(123456789));

// // // ZL-TASK:

// // // Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// // // MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// // function stringToKebab(str) {
// // 	return str
// // 		.toLowerCase()
// // 		.replace(/[^a-z0-9]+/g, '-')
// // 		.replace(/^-+|-+$/g, '');
// // }

// // console.log(stringToKebab('I love Kebab'));

// // // ZK-TASK:

// // // Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// // // MASALAN: printNumbers()

// // function printNumbers() {
// // 	let number = 1;
// // 	const intervalId = setInterval(() => {
// // 		console.log(number);
// // 		if (number === 5) {
// // 			clearInterval(intervalId);
// // 		}
// // 		number++;
// // 	}, 1000);
// // }

// // printNumbers();

// // // ZJ-TASK:

// // // Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// // // MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// // function reduceNestedArray(arr) {
// // 	return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
// // }
// // console.log(reduceNestedArray([1, [1, 2, [4]]]));
