type Expect<T> = Success<T> | Faliure

class Success<T> {
    success: true = true
    value: T
    constructor(value: T) {
        this.value = value
    }
}

class Faliure {
    success: false = false
    message: string
    index : number
    constructor(errMsg: string, index: number) {
        this.message = errMsg
        this.index = index
    }    
}

const Expect = {
    result: <T>(value: T) => new Success<T>(value),
    error: (errMsg: string, lineNo: number = -1) => new Faliure(errMsg, lineNo),
    isError: (e:Expect<any>):e is Faliure => !e.success
}

export { Expect }
