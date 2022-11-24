'use strict';

class Store {
    constructor() {
        this.data = []
    }
    set(key, data) {
        this.data.push({key: key, data : data})
    }
    get(key) {        
        if (key == '' || key == null) {
            return this.data
        } else {
            let arrKey = key.split('.')
                if (arrKey.length <= 1) {
                    let findData = this.data.find(item => item.key == arrKey[0])  
                    return findData
                }
                if (arrKey.length <= 2) {
                    let findData = this.data.find(item => item.key == arrKey[0])  
                    return findData.data[arrKey[1]]
                }}       
        
    }
    changeData(key ,value) {
        let arrKey = key.split('.')        
        
        let findData = this.data.find(item => item.key == arrKey[0])  
        findData.data[arrKey[1]] = value
        
    }
    deleteData(key) {
        let arrKey = key.split('.')
                if (arrKey.length <= 1) {
                    this.data.forEach((item, ind) => {
                        if(item.key == key) {
                        //    delete this.data[ind]
                        // let arr = this.data.slice(ind, -ind)
                        this.data = arr
                        }
                    })                    
                }
                if (arrKey.length <= 2) {
                    this.data.forEach((item, ind) => {
                        if(item.key == key) {
                           
                        }
                    })                    
                }}
            }   


let store = new Store;

store.set('ola', {a: 1, b: 42, c: 33})
store.set('tor', {a: 4, b: 67, c: 12})
store.set('Oleg', {a: 5, b: 52, c: 43})
// store.set('Koly', {a: 23, b: 34, c: 33})
// store.set('Nardi', {a: 78, b: 56, c: 63})

 
 store.changeData('ola.a', 76)
 store.changeData('ola.b', 87)

 store.deleteData('ola')

 let beb = store.get()

console.log(beb)
