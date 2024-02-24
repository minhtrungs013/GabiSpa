export const userFormFields = [
    { name: 'fullName', label: 'Họ và tên', required: true, textrequired: "Vui lòng điền họ và tên" },
    { name: 'address', label: 'Địa chỉ', required: true, textrequired: "Vui lòng điền Địa chỉ" },
    { name: 'role', label: 'Quyền', required: true, textrequired: "Vui lòng điền Quyền" },
    { name: 'status', label: 'Trạng thái', required: true, textrequired: "Vui lòng điền Trạng thái" },
    { name: 'email', label: 'Email', type: 'email', required: true, textrequired: "Vui lòng điền Email" },
    { name: 'phoneNumber', label: 'Số điện thoại', type: 'tel', required: true, textrequired: "Vui lòng điền Số điện thoại" },
    { name: 'image', label: 'image', type: 'file', required: true, textrequired: "Vui lòng điền Email" },
];

export const dataUserManagement = [
    {
        id: 0,
        name: 'John Michael',
        role: 'Manager',
        roleDetails: 'Manager Employee',
        email: 'Manager@gmail.com',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: true,
    },
    {
        id: 1,
        name: 'John Michael',
        role: 'Manager',
        roleDetails: 'Manager Employee',
        email: 'Manager@gmail.com',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: true,
    },
    {
        id: 2,
        name: 'John Michael',
        role: 'Manager',
        roleDetails: 'Manager Employee',
        email: 'Manager@gmail.com',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: false,
    },
    {
        id: 3,
        name: 'John Michael',
        role: 'Manager',
        roleDetails: 'Manager Employee',
        email: 'Manager@gmail.com',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: false,
    },
    {
        id: 4,
        name: 'John Michael',
        role: 'Manager',
        roleDetails: 'Manager Employee',
        email: 'Manager@gmail.com',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: true,
    },
    {
        id: 5,
        name: 'John Michael',
        role: 'Manager',
        roleDetails: 'Manager Employee',
        email: 'Manager@gmail.com',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: false,
    },
];
export const dataServiceManagement = [
    {
        id: 0,
        nameService: 'John Michael',
        description: 'Manager',
        ServiceScheduleDetails: [
            'Manager Employee',
            'Manager Employee',
            'Manager Employee',
            'Manager Employee',
            'Manager Employee',
            'Manager Employee'],
        imageURL: [
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        ],
        rating: 2,
        CategoryId: 1,
        price: 100,
        CreatedAt: '12-02-2024 10:30 PM',
        UpdatedAt: '12-02-2024 11:30 PM',
        isActive: true,
    },
    {
        id: 2,
        nameService: 'John Michael',
        description: 'Manager',
        ServiceScheduleDetails: [
            'Manager Employee',
            'Manager Employee',
            'Manager Employee',
            'Manager Employee',
            'Manager Employee',
            'Manager Employee'],
        imageURL: [
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        ],
        rating: 3,
        CategoryId: 1,
        price: 100,
        CreatedAt: '12-02-2024 10:30 PM',
        UpdatedAt: '12-02-2024 11:30 PM',
        isActive: true,
    },
];

export const dataCategoriesManagement = [
    {
        id: 0,
        nameCategory: 'Dịch Vụ Cho Mẹ Bầu',
        description: 'Mẹ Bầu',
        CreatedAt: '12-02-2024 10:30 PM',
        UpdatedAt: '12-02-2024 11:30 PM',
        isActive: true,
    },
    {
        id: 2,
        nameCategory: 'Dịch Vụ Cho Mẹ Sau Sinh',
        description: ' Mẹ Sau Sinh',
        CreatedAt: '12-02-2024 10:30 PM',
        UpdatedAt: '12-02-2024 11:30 PM',
        isActive: true,
    },
    {
        id: 3,
        nameCategory: 'Dịch Vụ Cho Bé',
        description: ' Bé',
        CreatedAt: '12-02-2024 10:30 PM',
        UpdatedAt: '12-02-2024 11:30 PM',
        isActive: true,
    },
];


export const dataBookingManagement = [
    {
        id: 0,
        User: {
            id: 0,
            name: 'John Michael',
        },
        Service: {
            id: 0,
            nameService: 'John Michael',
            price: 1000,
        },
        ScheduledDate: '2024-02-22 14:30:00',
        Employee: {
            id: 0,
            name: 'John aswr',
        },
        Status: "Hoàn Thành",
    },
    {
        id: 1,
        User: {
            id: 0,
            name: 'John Michael',
        },
        Service: {
            id: 0,
            nameService: 'John Michael',
            price: 1000,
        },
        ScheduledDate: '2024-02-22 14:30:00',
        Employee: {
            id: 0,
            name: 'John aswr',
        },
        Status: "Đang thực hiện",
    },
    {
        id: 2,
        User: {
            id: 0,
            name: 'John Michael',
        },
        Service: {
            id: 0,
            nameService: 'Dịch vụ 1',
            price: 1000,
        },
        ScheduledDate: '2024-02-22 14:30:00',
        Employee: null,
        Status: "Đang chờ",
    },
    {
        id: 3,
        User: {
            id: 0,
            name: 'John Michael',
        },
        Service: {
            id: 0,
            nameService: 'Dịch vụ 2',
            price: 1000,
        },
        ScheduledDate: '2024-02-22 14:30:00',
        Employee: {
            id: 0,
            name: 'John aswr',
        },
        Status: "Đã hủy",
    },
];

export const dataMeetings = [
    {
        id: 0,
        user: {
            id: 0,
            name: 'John Michael',
        },
        employee: {
            id: 0,
            name: 'John aswr',
        },
        service: {
            id: 0,
            nameService: 'Dịch vụ 1',
            description: 'Manager',
            ServiceScheduleDetails: [
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee'],
            imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            price: 100,
        },
        startDatetime: '2024-02-23T13:00',
        endDatetime: '2024-02-23T17:30',
    },
    {
        id: 1,
        user: {
            id: 0,
            name: 'John Michael',
        },
        employee: {
            id: 0,
            name: 'John aswr',
        },
        service: {
            id: 0,
            nameService: 'Dịch vụ 1',
            description: 'Manager',
            ServiceScheduleDetails: [
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee',
                'Manager Employee Manager Employee'],
            imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            price: 100,
        },
        startDatetime: '2024-02-25T13:00',
        endDatetime: '2024-02-25T17:30',
    },
    {
        id: 2,
        user: {
            id: 0,
            name: 'John Michael',
        },
        employee: {
            id: 0,
            name: 'John aswr',
        },
        service: {
            id: 0,
            nameService: 'Dịch vụ 2',
            description: 'Manager',
            ServiceScheduleDetails: [
                'Manager Employee',
                'Manager Employee',
                'Manager Employee',
                'Manager Employee',
                'Manager Employee',
                'Manager Employee'],
            imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            price: 100,
        },
        startDatetime: '2024-02-23T13:00',
        endDatetime: '2024-02-23T17:30',
    },
    {
        id: 3,
        user: {
            id: 0,
            name: 'John Michael',
        },
        employee: {
            id: 0,
            name: 'John aswr',
        },
        service: {
            id: 0,
            nameService: 'Dịch vụ 2',
            description: 'Manager',
            ServiceScheduleDetails: [
                'Manager Employee',
                'Manager Employee',
                'Manager Employee',
                'Manager Employee',
                'Manager Employee',
                'Manager Employee'],
            imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            price: 100,
        },
        startDatetime: '2024-02-24T13:00',
        endDatetime: '2024-02-24T17:30',
    },

]

export const columnNameBooking = [
    { name: 'Tên Người Dùng', field: 'User' },
    { name: 'Tên Dịch Vụ', field: 'Service' },
    { name: 'Người Thực Hiện', field: 'Employee' },
    { name: 'Ngày Thực Hiện', field: 'ScheduledDate' },
    { name: 'Giá Dịch Vụ', field: 'price' },
    { name: 'Trạng Thái', field: 'Status' },
];
export const columnNameService = [
    { name: 'Tên Dịch Vụ', field: 'nameService' },
    { name: 'Mô Tả', field: 'description' },
    { name: 'Hình Ảnh', field: 'imageURL' },
    { name: 'Đánh Giá', field: 'rating' },
    { name: 'Giá Dịch Vụ', field: 'price' },
    { name: 'Ngày tạo', field: 'CreatedAt' },
    { name: 'Trạng Thái', field: 'isActive' },
];

export const columnNameUser = [
    { name: 'Họ và Tên', field: 'name' },
    { name: 'Quyền', field: 'role' },
    { name: 'Địa chỉ', field: 'address' },
    { name: 'Trạng thái', field: 'status' },
];

export const columnNameCategories = [
    { name: 'Tên Dịch Vụ', field: 'name' },
    { name: 'Mô Tả', field: 'description' },
    { name: 'Ngày tạo', field: 'CreatedAt' },
    { name: 'Trạng thái', field: 'isActive' },
];