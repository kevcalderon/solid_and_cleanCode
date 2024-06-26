class Product {
  constructor(
    public name: string,
    public price: number = 0,
    public size: number = 0,
  ){}

  toString(){
    if (this.name.length <=0 ) throw Error('name is empty')
    if (this.price <=0 ) throw Error('price is empty')
    if (this.size <=0 ) throw Error('size is empty')
    
    return `${this.name},${this.price},${this.size}`
  }
}

(()=>{

  const bluePants = new Product('Blue Large Pants');
  console.log(bluePants);
})
