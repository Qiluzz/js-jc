var name = '时间跳跃';
var obj = {
    name: '听风是风'
};

function fn() {
    console.log(this.name);
};
fn(); //时间跳跃
fn.call(obj); //听风是风