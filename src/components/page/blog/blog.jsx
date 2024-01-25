import React from 'react';
import BlogItem from '../../UI/blogItem';

const features = [
    {
        id: 0,
        title: "Khám thai định kỳ quan trong như thế nào?",
        description:
            "Massage Bầu giúp tăng cường tuần hoàn máu, cung cấp oxy và dưỡng chất cho thai nhi, giúp thai nhi phát triển khỏe mạnh...",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-2.jpg",
    },
    {
        id: 1,
        title: "Các lưu ý bảo quản sữa mẹ khi vắt",
        description:
            "Bé sẽ được Điều dưỡng có nhiều kiến thức chuyên khoa và kinh nghiệm chăm sóc kỹ lưỡng trong 60 phút...",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-3.jpg",
    },
    {
        id: 2,
        title: "6 ways to prepare breakfast for 30",
        description:
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-2.jpg",
    }
];

export default function Blog() {
    return (
        <div>
            <div className="mt-16 md:mt-0">
                <h2 className="text-3xl lg:text-4xl font-bold lg:tracking-tight text-[#214581]">
                    TIN TỨC - BÀI VIẾT NỔI BẬT
                </h2>
                <p className="text-lg mt-4 text-[#214581]">
                    <span className="font-medium text-[#cb8a40]"> Gabi spa</span> Là dịch vụ chăm sóc Y tế tại nhà uy
                    tín hàng đầu hiện nay và được Sở Y Tế TP.HCM <br />cấp giấy phép hoạt động Chăm sóc sau sinh theo tiêu chuẩn của Bộ Y TẾ
                </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
                {
                    features.map((item) => (
                        <BlogItem item={item} />
                    ))
                }
            </div>
        </div>
    )
}
