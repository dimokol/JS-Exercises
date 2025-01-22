// a) Find the number of suppliers’ certifications (check the user type)(sum)
// b) Find the number of Approved certifications

const users = [
    {
    _id: "3546565",
    name: "Maria",
    type: "SUPPLIER",
    certifications: [
        {
        _id: "3565",
        title: "ISO2020",
        type: "ISO",
        status: "Approved"
        },
        {
        _id: "35655",
        title: "FLAG2020",
        type: "FLAG",
        status: "Approved"
        }
    ]
    },
    {
    _id: "355646565",
    name: "Manos",
    type: "SHIPPING_COMPANY"
    },
    {
    _id: "3546565",
    name: "Maria",
    type: "SUPPLIER",
    certifications: [
        {
        _id: "35654",
        title: "ISO2018",
        type: "ISO",
        status: "Pending"
        }
    ]
    }
];

// const result = users.filter(user => user.type === "SUPPLIER").reduce((acc, cur) => {
//     return acc + cur.certifications.filter(certification => certification.status === "Approved").length
// }, 0)

const result = users.reduce((acc, cur) => {
    if (cur.type === "SUPPLIER") {    
        return acc + cur.certifications.filter(certification => certification.status === "Approved").length
    }
    return acc;
}, 0)

console.log(result);