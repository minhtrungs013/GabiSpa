import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const features = [
    {
        id: 0,
        title: "Dịch Vụ 1",
        description:
            "Massage Bầu giúp tăng cường tuần hoàn máu, cung cấp oxy và dưỡng chất cho thai nhi, giúp thai nhi phát triển khỏe mạnh...",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png",
    },
    {
        id: 1,
        title: "Dịch Vụ 2",
        description:
            "Bé sẽ được Điều dưỡng có nhiều kiến thức chuyên khoa và kinh nghiệm chăm sóc kỹ lưỡng trong 60 phút...",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png",
    },
    {
        id: 2,
        title: "Dịch Vụ 3",
        description:
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png",
    },
    {
        id: 3,
        title: "Dịch Vụ 4",
        description:
            "Kết hợp các phương pháp chăm sóc hiện đại và truyền thống giúp Mẹ vượt qua giai đoạn hậu sản một cách an toàn nhất: hồi phục sức khỏe, làm đẹp đúng cách, giảm đau nhức, thư giãn và tránh trầm cảm sau sinh...",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png",
    },
    {
        id: 4,
        title: "Dịch Vụ 5",
        description:
            "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png",
    },
    {
        id: 5,
        title: "Dịch Vụ 6",
        description:
            "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1705772414/b7hrtq1xljrctwe089kv.png",
    },
];
export default function Service() {
    return (
        <div>
            <div className="mt-16 md:mt-0 mb-4">
                <h2 className="text-2xl lg:text-2xl font-bold lg:tracking-tight text-[#214581]">
                    DỊCH VỤ CHĂM SÓC MẸ VÀ BÉ
                </h2>
            </div>
            <div className='mb-16'>
                <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581]">
                    <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faBars} /> Dịch Vụ Cho Mẹ Bầu
                </h4>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-10">
                    {
                        features.map((item) => (
                            <div className="relative flex gap-4 items-start shadow-md rounded-lg p-3 pb-8 " key={item.id}>
                                <div className="mt-1  shrink-0 flex justify-center">
                                    <img className=' max-w-[120px] max-h-[120px]' src={item.image} alt="" />
                                </div>
                                <div className='pb-3'>
                                    <h2 className="one-line-paragraph font-bold text-xl  text-[#214581]">{item.title}</h2>{" "}
                                    <p className="two-line-paragraph  text-[#214581] mt-2 leading-relaxed">{item.description}</p>
                                    <p className='py-2 font-semibold text-base text-[#46b252]' >300.000 VND</p>
                                </div>
                                <div className='absolute right-3 bottom-[10px] flex justify-end'>
                                    <Link to={'/dich-vu/chi-tiet'} className='px-4 py-2 font-semibold text-sm bg-[#214581] text-white rounded-md shadow-sm' >Xem Chi Tiết</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mb-16'>
                <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581]">
                    <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faBars} /> Dịch Vụ Cho Mẹ Sau Sinh
                </h4>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-10">
                    {
                        features.map((item) => (
                            <div className="relative flex gap-4 items-start shadow-md rounded-lg p-3 pb-8" key={item.id}>
                                <div className="mt-1  shrink-0 flex justify-center">
                                    <img className=' max-w-[120px] max-h-[120px]' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h2 className="one-line-paragraph font-bold text-xl  text-[#214581]">{item.title}</h2>{" "}
                                    <p className="two-line-paragraph  text-[#214581] mt-2 leading-relaxed">{item.description}</p>
                                    <p className='py-2 font-semibold text-base text-[#46b252]' >300.000 VND</p>
                                </div>
                                <div className='absolute right-3 bottom-[10px] flex justify-end'>
                                    <Link to={'/dich-vu/chi-tiet'} className='px-4 py-2 font-semibold text-sm bg-[#214581] text-white rounded-md shadow-sm' >Xem Chi Tiết</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mb-16'>
                <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581]">
                    <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faBars} /> Dịch Vụ Cho Bé
                </h4>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-10">
                    {
                        features.map((item) => (
                            <div className="relative flex gap-4 items-start shadow-md rounded-lg p-3 pb-8" key={item.id}>
                                <div className="mt-1  shrink-0 flex justify-center">
                                    <img className=' max-w-[120px] max-h-[120px]' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h2 className="one-line-paragraph font-bold text-xl  text-[#214581]">{item.title}</h2>{" "}
                                    <p className="two-line-paragraph  text-[#214581] mt-2 leading-relaxed">{item.description}</p>
                                    <p className='py-2 font-semibold text-base text-[#46b252]' >300.000 VND</p>
                                </div>
                                <div className='absolute right-3 bottom-[10px] flex justify-end'>
                                    <Link to={'/dich-vu/chi-tiet'} className='px-4 py-2 font-semibold text-sm bg-[#214581] text-white rounded-md shadow-sm' >Xem Chi Tiết</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
