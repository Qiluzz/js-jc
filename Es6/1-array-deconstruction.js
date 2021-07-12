/**
 * 数组解构
 */

 const arr = [100, 200, 300]

//  const [ foo, bar , baz] = arr;

//  console.log(foo, bar, baz);

 const [ , foo, , ] = arr;

 const [far,...b] = arr;

//  const [...b2, bat] = arr // rest element must be last element;
const path = '/foo/bar/baz'
const temp = path.split('/');
const [, rootdir] = path.split('/')
console.log(foo, temp, rootdir);


