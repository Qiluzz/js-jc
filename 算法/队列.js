function Queue() {
    let items = []
    //入队
    this.enqueue = function (item) {
        items.push(item)
    }
    // 出队
    this.dequeue = function () {
        return items.shift()
    }
    
    this.front = function () {
        return items[0]
    }

    this.size = function () {
        return items.length;
    }

    this.isEmpty = function () {
        return items.length === 0
    }

}

let a = new Queue()

