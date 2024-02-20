export const userFormFields = [
    { name: 'fullName', label: 'Họ và tên', required: true, textrequired: "Vui lòng điền họ và tên" },
    { name: 'address', label: 'Địa chỉ', required: true, textrequired: "Vui lòng điền Địa chỉ" },
    { name: 'role', label: 'Quyền', required: true, textrequired: "Vui lòng điền Quyền" },
    { name: 'status', label: 'Trạng thái', required: true, textrequired: "Vui lòng điền Trạng thái" },
    { name: 'email', label: 'Email', type: 'email', required: true, textrequired: "Vui lòng điền Email" },
    { name: 'phoneNumber', label: 'Số điện thoại', type: 'tel', required: true, textrequired: "Vui lòng điền Số điện thoại" },
    { name: 'image', label: 'image', type: 'file', required: true, textrequired: "Vui lòng điền Email" },
];

export const data = [
    {
        name: 'John Michael',
        role: 'Manager',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: 'Đang hoạt động',
        statusColor: 'from-green-600 to-lime-500',
    },
    {
        name: 'John Michael',
        role: 'Manager',
        imageURL: 'https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png',
        address: 'Thái Nguyên',
        status: 'Đang hoạt động',
        statusColor: 'from-green-600 to-lime-500',
    },
];


export const columnNameUser = [
    { name: 'Họ và Tên', field: 'name' },
    { name: 'Quyền', field: 'role' },
    { name: 'Địa chỉ', field: 'address' },
    { name: 'Trạng thái', field: 'status' },
];