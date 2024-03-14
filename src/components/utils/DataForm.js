export const userFormFields = [
    { name: 'username', label: 'Tài Khoản', type: 'text', required: true, textrequired: "Vui lòng điền Tài Khoản" },
    { name: 'password', label: 'Mật Khẩu', type: 'password', required: true, textrequired: "Vui lòng điền Mật Khẩu" },
    { name: 'confirmPassword', label: 'Nhập Lại Mật Khẩu', type: 'password', required: true, textrequired: "Vui lòng Nhập Lại Mật Khẩu" },
    { name: 'fullName', label: 'Họ Và Tên', type: 'text', required: true, textrequired: "Vui lòng điền họ và tên" },
    { name: 'address', label: 'Địa Thỉ', type: 'text', required: true, textrequired: "Vui lòng điền Địa chỉ" },
    { name: 'role', label: 'Quyền', type: 'select', required: true, textrequired: "Vui lòng điền Quyền" },
    { name: 'dateOfBirth', label: 'Ngày Sinh', type: 'date', required: true, textrequired: "Vui lòng điền ngày sinh" },
    { name: 'age', label: 'Tuổi', required: true, type: 'number', textrequired: "Vui lòng điền ngày sinh" },
    { name: 'email', label: 'Email', type: 'email', required: true, textrequired: "Vui lòng điền Email" },
    { name: 'phone', label: 'Số Điện Thoại', type: 'number', required: true, textrequired: "Vui lòng điền Số điện thoại" },
    { name: 'avatar', label: 'Ảnh Đại Diện', type: 'file', required: true, textrequired: "Vui lòng thêm hình ảnh" },
    { name: 'isActive', label: 'Trạng Thái', type: 'checkbox', required: true, textrequired: "Vui lòng điền mô tả" },
];

export const userUpdateFormFields = [
    { name: 'note', label: 'Lưu ý', type: 'text', required: true, textrequired: "Vui lòng điền ..." },
    { name: 'isActive', label: 'Trạng Thái', type: 'checkbox', required: true, textrequired: "Vui lòng điền mô tả" },
];

export const categoryFormFields = [
    { name: 'name', label: 'Tên Dịch Vụ', type: 'text', required: true, textrequired: "Vui lòng điền tên dịch vụ" },
    { name: 'description', label: 'Mô Tả', type: 'text', required: true, textrequired: "Vui lòng điền mô tả" },
    { name: 'isActive', label: 'Trạng Thái', type: 'checkbox', required: true, textrequired: "Vui lòng điền mô tả" },
];
export const taskFormFields = [
    { name: 'name', label: 'Tên Nhiệm Vụ', type: 'text', required: true, textrequired: "Vui lòng điền tên Nhiệm Vụ" },
    { name: 'description', label: 'Mô Tả', type: 'text', required: true, textrequired: "Vui lòng điền mô tả" },
    { name: 'object', label: 'Loại Nhiệm Vụ', type: 'select', required: true, textrequired: "Vui lòng Chọn Loại Nhiệm Vụ" },
    { name: 'workingTimePerDay', label: 'Thời Gian Làm Việc', type: 'number', required: true, textrequired: "Vui lòng nhập thời gian làm việc" },
    { name: 'isActive', label: 'Trạng Thái', type: 'checkbox', required: true, textrequired: "Vui lòng điền mô tả" },
];
export const serviceFormFields = [
    { name: 'name', label: 'Tên Nhiệm Vụ', type: 'text', required: true, textrequired: "Vui lòng điền tên Nhiệm Vụ" },
    { name: 'description', label: 'Mô Tả', type: 'text', required: true, textrequired: "Vui lòng điền mô tả" },
    { name: 'categoryId', label: 'Danh Mục', type: 'select', required: true, textrequired: "Vui lòng điền mô tả" },
    { name: 'price', label: 'Giá Tiền', type: 'number', required: true, textrequired: "Vui lòng điền mô tả" },
    { name: 'workingDay', label: 'Tổng ngày làm việc', type: 'number', required: true, textrequired: "Vui lòng điền số ngày làm việc cho dịch vụ" },
    { name: 'images', label: 'Ảnh', type: 'file', required: false, textrequired: "Vui lòng điền mô tả" },
    { name: 'isActive', label: 'Trạng Thái', type: 'checkbox', required: false, textrequired: "" },
];

export const serviceBookedFormFields = [
    { name: 'employeeId', label: 'Nhân viên Thực Hiện', type: 'select', required: true, textrequired: "Vui lòng điền tên Nhiệm Vụ" },
    { name: 'status', label: 'Trạng Thái', type: 'select', required: true, textrequired: "Vui lòng điền mô tả" },
];

export const UserDetails = {
    avatar: null,
    fullName: null,
    dateOfBirth: null,
    age: null,
    email: null,
    address: null,
    phone: null,
}

export const ServiceBooked = {
    customerId: null,
    serviceId: null,
    startDate: null
}

export const User = {
    username: null,
    password: null,
    confirmPassword: null,
    role: null,
    userDetail: UserDetails
}

export const Service = {
    id: null,
    name: null,
    categoryId: null,
    description: null,
    price: null,
    workingDay: null,
    isActive: null,
    images: [],
    jobs: []
}

export const ChangePassword = {
    oldPassword: null,
    newPassword: null,
    confirmPassword: null,
}

export const Task = {
    id: null,
    name: null,
    description: null,
    object: null,
    createdAt: null,
    isActive: null,
}

export const ObjectTask = [
    {
        id: "Mẹ mang thai",
        name: "Mẹ mang thai",
    },
    {
        id: "Mẹ cho con bú",
        name: "Mẹ cho con bú",
    },
    {
        id: "Em bé",
        name: "Em bé",
    },
    {
        id: "Mẹ và bé",
        name: "Mẹ và bé"
    },
]

export const Role = [
    {
        id: "Quản trị viên",
        name: "Quản trị viên",
    },
    {
        id: "Nhân viên",
        name: "Nhân viên",
    },
    {
        id: "Khách hàng",
        name: "Khách hàng",
    }
]


export const ObjectTask1 = [
    {
        id: '0',
        name: "Mẹ mang thai",
    },
    {
        id: '1',
        name: "Mẹ cho con bú",
    },
    {
        id: '2',
        name: "Em bé",
    },
    {
        id: '3',
        name: "Mẹ và bé"
    },
]

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
            phoneNumber: '0339372465',
        },
        employee: {
            id: 0,
            name: 'John aswr',
            phoneNumber: '0339372465',
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
        status: true,
        startDatetime: '2024-02-23T13:00',
        endDatetime: '2024-03-23T17:30',
        roleDetails: [
            { startDateTime: '2024-02-23T13:00', endDateTime: '2024-02-23T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-24T13:00', endDateTime: '2024-02-24T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-25T13:00', endDateTime: '2024-02-25T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-27T13:00', endDateTime: '2024-02-27T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-28T13:00', endDateTime: '2024-02-28T13:40', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-02-29T13:00', endDateTime: '2024-02-29T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-01T13:00', endDateTime: '2024-03-01T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-02T13:00', endDateTime: '2024-03-02T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-03T13:00', endDateTime: '2024-03-03T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-04T13:00', endDateTime: '2024-03-04T17:30', isCompleted: false, note: "hi hi hi" },
        ]
    },
    {
        id: 1,
        user: {
            id: 0,
            name: 'John Michael',
            phoneNumber: '0339372465',
        },
        employee: {
            id: 0,
            name: 'John aswr',
            phoneNumber: '0339372465',
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
                'Manager Employee Manager Employee'
            ],
            imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
            price: 100,
        },
        status: true,
        startDatetime: '2024-02-22T13:00',
        endDatetime: '2024-03-27T17:30',
        roleDetails: [
            { startDateTime: '2024-02-24T13:00', endDateTime: '2024-02-24T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-25T13:00', endDateTime: '2024-02-25T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-26T13:00', endDateTime: '2024-02-26T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-27T13:00', endDateTime: '2024-02-27T17:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-28T15:48', endDateTime: '2024-02-28T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-02-29T13:00', endDateTime: '2024-02-29T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-01T13:00', endDateTime: '2024-03-01T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-02T13:00', endDateTime: '2024-03-02T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-03T13:00', endDateTime: '2024-03-03T17:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-04T13:00', endDateTime: '2024-03-04T17:30', isCompleted: false, note: "hi hi hi" },
        ]
    },
    {
        id: 2,
        user: {
            id: 0,
            name: 'John Michael',
            phoneNumber: '0339372465',
        },
        employee: {
            id: 0,
            name: 'John aswr',
            phoneNumber: '0339372465',
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
        status: true,
        startDatetime: '2024-02-23T13:00',
        endDatetime: '2024-03-23T17:30',
        roleDetails: [
            { startDateTime: '2024-02-23T10:00', endDateTime: '2024-02-23T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-24T10:00', endDateTime: '2024-02-24T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-25T10:00', endDateTime: '2024-02-25T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-26T10:00', endDateTime: '2024-02-26T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-27T10:00', endDateTime: '2024-02-27T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-28T10:00', endDateTime: '2024-02-28T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-02-29T10:00', endDateTime: '2024-02-29T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-01T10:00', endDateTime: '2024-03-01T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-02T10:00', endDateTime: '2024-03-02T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-04T10:00', endDateTime: '2024-03-04T13:30', isCompleted: false, note: "hi hi hi" },
        ]
    },
    {
        id: 3,
        user: {
            id: 0,
            name: 'John Michael',
            phoneNumber: '0339372465',
        },
        employee: {
            id: 0,
            name: 'John aswr',
            phoneNumber: '0339372465',
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
        status: true,
        startDatetime: '2024-02-24T13:00',
        endDatetime: '2024-03-24T17:30',
        roleDetails: [
            { startDateTime: '2024-02-23T10:00', endDateTime: '2024-02-23T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-24T10:00', endDateTime: '2024-02-24T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-25T10:00', endDateTime: '2024-02-25T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-02-26T10:00', endDateTime: '2024-02-26T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-27T10:00', endDateTime: '2024-02-27T13:30', isCompleted: true, note: "hi hi hi" },
            { startDateTime: '2024-02-29T10:00', endDateTime: '2024-02-29T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-01T10:00', endDateTime: '2024-03-01T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-02T10:00', endDateTime: '2024-03-02T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-03T10:00', endDateTime: '2024-03-03T13:30', isCompleted: false, note: "hi hi hi" },
            { startDateTime: '2024-03-04T10:00', endDateTime: '2024-03-04T13:30', isCompleted: false, note: "hi hi hi" },
        ]
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
    { name: 'Họ và Tên', field: 'fullName' },
    { name: 'Tài Khoản', field: 'username' },
    { name: 'Quyền', field: 'role' },
    { name: 'Địa chỉ', field: 'address' },
    { name: 'Ngày Sinh', field: 'dateOfBirth' },
    { name: 'Tuổi', field: 'age' },
    { name: 'Số Điện Thoại', field: 'phone' },
    { name: 'Ghi Chú', field: 'note' },
    { name: 'Trạng thái', field: 'isActive' },
];

export const columnNameCategories = [
    { name: 'Tên Danh Mục', field: 'name' },
    { name: 'Mô Tả', field: 'description' },
    { name: 'Ngày tạo', field: 'CreatedAt' },
    { name: 'Trạng thái', field: 'isActive' },
];

export const columnNameTask = [
    { name: 'Tên Nhiệm Vụ', field: 'name' },
    { name: 'Mô Tả', field: 'description' },
    { name: 'Loại Nhiệm Vụ', field: 'object' },
    { name: 'Ngày tạo', field: 'CreatedAt' },
    { name: 'Trạng thái', field: 'isActive' },
];