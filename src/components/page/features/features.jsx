import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const features = [
    {
        id: 0,
        title: "Massage Bầu",
        description:
            "Massage Bầu giúp tăng cường tuần hoàn máu, cung cấp oxy và dưỡng chất cho thai nhi, giúp thai nhi phát triển khỏe mạnh...",
        icon: "bx:bxs-briefcase",
    },
    {
        id: 1,
        title: "Tắm Bé",
        description:
            "Bé sẽ được Điều dưỡng có nhiều kiến thức chuyên khoa và kinh nghiệm chăm sóc kỹ lưỡng trong 60 phút...",
        icon: "bx:bxs-window-alt",
    },
    {
        id: 2,
        title: "Gội Đầu Dưỡng Sinh",
        description:
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
        icon: "bx:bxs-data",
    },
    {
        id: 3,
        title: "Massage Chăm Sóc Sau Sinh",
        description:
            "Kết hợp các phương pháp chăm sóc hiện đại và truyền thống giúp Mẹ vượt qua giai đoạn hậu sản một cách an toàn nhất: hồi phục sức khỏe, làm đẹp đúng cách, giảm đau nhức, thư giãn và tránh trầm cảm sau sinh...",
        icon: "bx:bxs-bot",
    },
    {
        id: 4,
        title: "Giảm Béo Sau Sinh",
        description:
            "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
        icon: "bx:bxs-file-find",
    },
    {
        id: 5,
        title: "Thông Tắc Tia Sữa",
        description:
            "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
        icon: "bx:bxs-user",
    },
];

export default function Features() {
    return (
        <div>
            <div className="mt-16 md:mt-0">
                <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight text-[#214581]">
                    DỊCH VỤ CHĂM SÓC MẸ VÀ BÉ
                </h2>
                <p className="text-lg mt-4 text-[#214581]">
                    <span className="font-medium text-[#cb8a40]"> Gabi spa</span> Là dịch vụ chăm sóc Y tế tại nhà uy
                    tín hàng đầu hiện nay và được Sở Y Tế TP.HCM <br />cấp giấy phép hoạt động Chăm sóc sau sinh theo tiêu chuẩn của Bộ Y TẾ
                </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
                {
                    features.map((item) => (
                        <div className="flex gap-4 items-start " key={item.id}>
                            <div className="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0 flex justify-center">
                                <FontAwesomeIcon className="text-white" icon={faBriefcase} />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-[#214581]">{item.title}</h2>{" "}
                                <p className="four-line-paragraph text-[#214581] mt-2 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
