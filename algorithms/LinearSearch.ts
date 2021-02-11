function linearSearch(array: Array<any>, element:any){
    for(const [index,el] of array.entries()) {
       return  el === element ? index : -1
    }
}