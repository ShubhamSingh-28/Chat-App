
export const samplechats =[
    {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id:"1",
    groupChat:false,
    members:["1", "2"],
},


{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John De",
    _id:"2",
    groupChat:false,
    members:["1", "2", ],
},

];


export const sampleUsers= [
    {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John Deiii",
    _id:"1",
},
{
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John De",
    _id:"2",
}
];

export const sampleNotification=[
    {
       sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Deihiibubi",
        },
        _id:"1",
    },
    {
       sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John ",
        },
        _id:"2",
    },

];






export const sampleMessage=[
    {
        attachments: [],
        content:"Lauda ka message hai",
        _id:"hhguguhhjggyt6788",
        sender:{
            _id:"user._id",
            name:"chaman"
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630z"
    },

    {
        attachments: [
            {
                public_id: "asdsad2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content:"",
        _id:"hhguguhhjggyt",
        sender:{
            _id:"ffjhgjh",
            name:"chaman 2"
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630z"
    }
];



export const dashboardData ={
    users:[
        {
            name:"John Deo",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"1",
            username:"john_doe",
            friends:20,
            groups:5,
        },
        {
            name:"John Boi",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"2",
            username:"john_boei",
            friends:20,
            groups:25,
        }
],

chats:[
    {
        name:"LabadBass Group",
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        _id:"1",
        groupChat:false,
        members:[
            {_id:"1", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
            {_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
        ],
        totalMembers:2,
        totalMessages:20,
        creator:{
            name:" John Deo",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
        }
    },
    {
        name:"LabadBass 2 Group",
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        _id:"2",
        groupChat:false,
        members:[
            {_id:"1", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
            {_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
        ],
        totalMembers:2,
        totalMessages:20,
        creator:{
            name:" John Beo",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
        }
    }
],

messages:[
    {
        attachments:[],
        content:"Lauda ka message hai",
        _id:"hhguguhhjggyt6788",
        sender:{
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            name:"chaman"
        },
        chat:"chatId",
        groupChat:false,
        createdAt:"2024-02-12T10:41:30.630z"
    },
    {
        attachments: [
            {
                public_id: "asdsad2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content:"jgvkbjb",
        _id:"hhguguhhjggyt",
        sender:{
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            name:"chaman 2"
        },
        chat:"chatId",
        groupChat:true,
        createdAt:"2024-02-12T10:41:30.630z"
    }
]

}