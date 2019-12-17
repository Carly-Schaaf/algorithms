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

    let next;
    if (head.next && copied[head.next.id]) {
        next = copied[head.next.id];
    } else {
        next = copyRandomList(head.next);
    }

    let random;
    let newHead;

    if (head.random === head.next) {
        random = next;
    } else if (head.random === head) {
        newHead = new Node(head.val, next, null);

        newHead.random = newHead;
    } else {
        if (head.random && copied[head.random.id]) {
            random = copied[head.random.id];
        } else {
            random = copyRandomList(head.random);
        }
    };

    if (newHead === undefined) {
        newHead = new Node(head.val, next, random);
    }
    copied[newHead.id] = newHead;

    return newHead;
};

n1 = new Node("-1", null, null)
n2 = new Node("1", null, null)

n1.next = n2;

counter = 1;
ids = [];

console.log(copyRandomList(n1))
// {"$id":"1",
// "next":
//     {"$id":"2",
//     "next": {
//         "$id":"3",
//         "next": {
//             "$id":"4",
//             "next":null,
//             "random":null,"val":4
//         },
//         "random":null,"val":3
//     },
//     "random": {"$ref":"3"},
//     "val":2
//     },
// "random":{"$ref":"3"},
// "val":1}