// const myResult = { 
//     "$id": "1", 
//     "val": 1, 
//     "next": { 
//         "$id": "2", 
//         "val": 2, 
//         "next": { 
//             "$id": "3", 
//             "val": 3, 
//             "next": { 
//                 "$id": "4", 
//                 "val": 4, 
//                 "next": null, 
//                 "random": null 
//             }, 
//             "random": null 
//         }, 
//         "random": { "$ref": "3" } 
//     }, 
//     "random": { 
//         "$id": "5", 
//         "val": 3, 
//         "next": { 
//             "$id": "6", 
//             "val": 4, 
//             "next": null, 
//             "random": null 
//         }, 
//         "random": null 
//     } 
// }

// const solution = {
//     "$id":"1",
//     "next": {
//         "$id":"2",
//         "next": {
//             "$id":"3",
//             "next": {
//                 "$id":"4",
//                 "next":null,
//                 "random":null,
//                 "val":4
//             },
//             "random":null,
//             "val":3
//         },
//         "random": {"$ref":"3"},
//         "val":2
//     },
//     "random": {"$ref":"3"},
//     "val":1
// }
counter = 1;
ids = [];
function Node(val, next, random) {
    if (ids.includes(val)) {
        this.id = counter;
    } else {
        this.id = val;
    }
    ids.push(this.id);
    counter ++;
    this.val = val;
    this.next = next;
    this.random = random;
};
  
const copied = {}
var copyRandomList = function (head) {
    if (head === null) return head;

    let headCopy = copied[head];
    if (!headCopy) {
        let next;
        let random;

        if (head.next && copied[head.next]) {
            next = copied[head.next];
        } else if (head.next === head) {
            headCopy = new Node(head.val, null, null);
            headCopy.next = headCopy;
        } else {
            next = copyRandomList(head.next);
            if (next) copied[next] = next;
        }

        if (head.random && copied[head.random]) {
            random = copied[head.random];
        } else if (head.random === head) {
            if (headCopy) {
                headCopy.random = headCopy;
            } else {
                headCopy = new Node(head.val, next, null);
                headCopy.random = headCopy;
            }
        } else {
            random = copyRandomList(head.random);
            if (random) copied[random] = random;
        }

        if (headCopy === undefined) {
            if (copied[head]) {
                headCopy = copied[head];
            } else {
                headCopy = new Node(head.val, next, random);
            }
        } else if (headCopy && !headCopy.random) {
            headCopy.random = random;
        }

        if (headCopy) copied[headCopy] = headCopy;

    }

    return headCopy;
};

// {
//     "$id":"1",
//     "next":null,
//     "random":null,
//     "val":-1
// }

// n1 = new Node("1", null, null)
// n2 = new Node("2", null, null)
// n3 = new Node("3", null, null)
// n4 = new Node("4", null, null)

// n3.next = n4;
// n2.next = n3;
// n2.random = n3;
// n1.next = n2;
// n1.random = n3;


n1 = new Node("-1", null, null)

counter = 1;
ids = [];

console.log(copyRandomList(n1))


