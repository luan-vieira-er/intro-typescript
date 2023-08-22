const add = (a: number, b: number): number => a + b

// console.log("🤬 ~ file: functions.ts:2 ~ add ~ add:", add(2,2))

const addWithOptionalTax = (a: number, b: number, tax?: number): number => {
    if (!tax) return a + b
    return (a + b) - tax
}

// console.log("🤬 ~ file: functions.ts:8 ~ addWithOptionalTax ~ addWithOptionalTax:", addWithOptionalTax(2,2,1))
// console.log("🤬 ~ file: functions.ts:8 ~ addWithOptionalTax ~ addWithOptionalTax:", addWithOptionalTax(2,2))

const applyDiscount = (price: number, percentage: number = 5): number => {
    if (percentage <= 0) return price
    return price - ( price * (percentage / 100))
}

// console.log("🤬 ~ file: functions.ts:16 ~ applyDiscount ~ applyDiscount:", applyDiscount(100, 20))
// console.log("🤬 ~ file: functions.ts:16 ~ applyDiscount ~ applyDiscount:", applyDiscount(100))

const calcTotal = (name: string, ...numbers: number[]): number => numbers.reduce((total, value) => total + value)

console.log("🤬 ~ file: functions.ts:22 ~ calcTotal ~ calcTotal:", calcTotal('Cliente', 1,2,3,45))