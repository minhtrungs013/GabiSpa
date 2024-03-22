import React from 'react'
import BlogItem from '../../UI/blogItem';
import { Helmet } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';

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
    },
    {
        id: 3,
        title: "6 ways to prepare breakfast for 30",
        description:
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-2.jpg",
    },
    {
        id: 4,
        title: "6 ways to prepare breakfast for 30",
        description:
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-2.jpg",
    },
    {
        id: 5,
        title: "6 ways to prepare breakfast for 30",
        description:
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
        image: "https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-2.jpg",
    },
];

export default function News() {
    return (
        <div>
             <Helmet>
                <title>GabiSpa - tin tuc</title>
                <link rel="GabiSpa - tin tuc" href="https://gabi-spa.vercel.app/tin-tuc" />
              </Helmet>
            <div className="my-10 md:mt-0">
                <h2 className="text-2xl lg:text-3xl font-bold lg:tracking-tight text-[#214581]">
                    TIN TỨC - BÀI VIẾT NỔI BẬT
                </h2>
            </div>
            <div className=" grid gap-3 lg:grid-cols-6 md:grid-cols-3 xl:grid-cols-4">
                <div className="xl:col-span-1 lg:col-span-2 md:col-span-3  lg:block ">
                    <h2 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581]">
                        BÀI VIẾT GẦN ĐÂY
                    </h2>
                    <div className="relative flex gap-4 items-start cursor-pointer mb-3 py-1 " >
                        <div className="mt-1 shrink-0 flex justify-center">
                            <img className=' max-w-[120px] max-h-[120px]' src={"https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-2.jpg"} alt="" />
                        </div>
                        <div>
                            <h2 className="one-line-paragraph font-bold text-base  text-[#214581]">sdasdasdasd</h2>{" "}
                            <p className="two-line-paragraph text-sm text-[#214581] !max-w-full mt-2 leading-relaxed">Need some JS? Astro can automatically hydrate interactive components when they become visible on the page. </p>
                        </div>

                    </div>
                    <div className="relative flex gap-4 items-start cursor-pointer mb-3 py-1" >
                        <div className="mt-1 shrink-0 flex justify-center">
                            <img className=' max-w-[120px] max-h-[120px]' src={"https://res.cloudinary.com/dax8xvyhi/image/upload/v1700588980/cld-sample-3.jpg"} alt="" />
                        </div>
                        <div>
                            <h2 className="one-line-paragraph font-bold text-base  text-[#214581]">sdasdasdasd</h2>{" "}
                            <p className="two-line-paragraph text-sm text-[#214581] !max-w-full mt-2 leading-relaxed">Need some JS? Astro can automatically hydrate interactive components when they become visible on the page. </p>
                        </div>

                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mt-8">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-5 md:gap-5 xl:gap-10 sm:gap-5">
                        {
                            features.map((item) => (
                                <BlogItem item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
ReactDOM.hydrate(
    News,
    document.getElementById(News)
);