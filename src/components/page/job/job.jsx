// import { faBars, faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Tooltip, Checkbox } from "@material-tailwind/react";
// import {
//   add,
//   eachDayOfInterval,
//   endOfMonth,
//   endOfWeek,
//   format,
//   getDay,
//   isSameMonth,
//   isToday,
//   parse,
//   startOfToday,
//   startOfWeek,
// } from "date-fns";
// import React, { useState } from 'react';
// const data = [
//   {
//     id: 0,
//     job: "Công việc 1",
//     check: true
//   },
//   {
//     id: 1,
//     job: "Công việc 2",
//     check: true
//   },
//   {
//     id: 2,
//     job: "Công việc 3",
//     check: true
//   },
//   {
//     id: 3,
//     job: "Công việc 4",
//     check: true
//   },
//   {
//     id: 4,
//     job: "Công việc 5",
//     check: true
//   },
//   {
//     id: 5,
//     job: "Công việc 6",
//     check: true
//   },
//   {
//     id: 6,
//     job: "Công việc 7",
//     check: true
//   },
//   {
//     id: 7,
//     job: "Công việc 8",
//     check: true
//   },
//   {
//     id: 8,
//     job: "Công việc 9",
//     check: true
//   },
//   {
//     id: 9,
//     job: "Công việc 10",
//     check: true
//   },
//   {
//     id: 10,
//     job: "Công việc 11",
//     check: true
//   },
//   {
//     id: 11,
//     job: "Công việc 12",
//     check: true
//   },
//   {
//     id: 12,
//     job: "Công việc 13",
//     check: true
//   },
//   {
//     id: 13,
//     job: "Công việc 14",
//     check: true
//   },
//   {
//     id: 14,
//     job: "Công việc 15",
//     check: true
//   },
//   {
//     id: 15,
//     job: "Công việc 16",
//     check: true
//   },
//   {
//     id: 16,
//     job: "Công việc 17",
//     check: true
//   },
//   {
//     id: 17,
//     job: "Công việc 18",
//     check: true
//   },
//   {
//     id: 18,
//     job: "Công việc 19",
//     check: true
//   },
//   {
//     id: 19,
//     job: "Công việc 20",
//     check: true
//   },
//   {
//     id: 20,
//     job: "Công việc 21",
//     check: true
//   },
//   {
//     id: 21,
//     job: "Công việc 22",
//     check: true
//   },
//   {
//     id: 22,
//     job: "Công việc 23",
//     check: true
//   },
//   {
//     id: 23,
//     job: "Công việc 24",
//     check: true
//   },
//   {
//     id: 24,
//     job: "Công việc 25",
//     check: true
//   },
//   {
//     id: 25,
//     job: "Công việc 26",
//     check: true
//   },
//   {
//     id: 26,
//     job: "Công việc 27",
//     check: true
//   },
//   {
//     id: 27,
//     job: "Công việc 28",
//     check: true
//   },
//   {
//     id: 28,
//     job: "Công việc 29",
//     check: true
//   },
//   {
//     id: 29,
//     job: "Công việc 30",
//     check: true
//   },

// ];
// export default function Job() {
//   const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
//   const colStartClasses = [
//     "",
//     "col-start-2",
//     "col-start-3",
//     "col-start-4",
//     "col-start-5",
//     "col-start-6",
//     "col-start-7",
//   ];
//   const today = startOfToday();

//   const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
//   let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

//   const daysInMonth = eachDayOfInterval({
//     start: firstDayOfMonth,
//     end: endOfMonth(firstDayOfMonth),
//   });

//   const getPrevMonth = (event) => {
//     event.preventDefault();
//     const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
//     setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
//   };

//   const getNextMonth = (event) => {
//     event.preventDefault();
//     const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
//     setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
//   };
//   return (
//     <div>

//       <h4 className="text-base lg:text-lg font-bold lg:tracking-tight text-[#214581] mb-16">
//         <FontAwesomeIcon className='pr-3 text-xl text-[#cb8a40]' icon={faBars} /> Chi tiết lịch trình của dịch vụ 1
//       </h4>
//       <div className="p-8 w-screen h-screen flex items-center justify-center">
//         <div className="w-[900px] h-[600px]">
//           <div className="flex items-center justify-between">
//             <p className="font-semibold text-xl">
//               {format(firstDayOfMonth, "MMMM yyyy")}
//             </p>
//             <div className="flex items-center justify-evenly gap-6 sm:gap-12">
//               <FontAwesomeIcon  icon={faStar}
//                 className="w-6 h-6 cursor-pointer"
//                 onClick={getPrevMonth}
//               />
//               <FontAwesomeIcon  icon={faStar}
//                 className="w-6 h-6 cursor-pointer"
//                 onClick={getNextMonth}
//               />
//             </div>
//           </div>
//           <hr className="my-6" />
//           <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
//             {days.map((day, idx) => {
//               return (
//                 <div key={idx} className="font-semibold">
//                   {day}
//                 </div>
//               );
//             })}
//           </div>
//           <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
//             {daysInMonth.map((day, idx) => {
//               return (
//                 <div key={idx} className={colStartClasses[getDay(day)]}>
//                   <p
//                     className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full  hover:text-white ${isSameMonth(day, today) ? "text-gray-900" : "text-gray-400"
//                       } ${!isToday(day) && "hover:bg-blue-500"} ${isToday(day) && "bg-red-500 text-white"
//                       }`}
//                   >
//                     {format(day, "d")}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>


//       <div className="grid  grid-cols-7 gap-4 mb-5">
//         <div className="row-span-1 border rounded-lg lg p-3 ">
//           <div className='flex justify-center'>
//             <span className=''>Thứ 2</span>
//           </div>
//         </div>
//         <div className="row-span-1 border rounded-lg lg p-3 ">
//           <div className='flex justify-center'>
//             <span className=''>Thứ 3</span>
//           </div>
//         </div>
//         <div className="row-span-1 border rounded-lg lg p-3 ">
//           <div className='flex justify-center'>
//             <span className=''>Thứ 4</span>
//           </div>
//         </div>
//         <div className="row-span-1 border rounded-lg lg p-3 ">
//           <div className='flex justify-center'>
//             <span className=''>Thứ 5</span>
//           </div>
//         </div>
//         <div className="row-span-1 border rounded-lg lg p-3 ">
//           <div className='flex justify-center'>
//             <span className=''>Thứ 6</span>
//           </div>
//         </div>
//         <div className="row-span-1 border rounded-lg lg p-3 ">
//           <div className='flex justify-center'>
//             <span className=''>Thứ 7</span>
//           </div>
//         </div>
//         <div className="row-span-1 border rounded-lg lg p-3 ">
//           <div className='flex justify-center'>
//             <span className=''>Chủ Nhật</span>
//           </div>
//         </div>
//       </div>
//       <div className="grid  grid-cols-7 gap-4 mb-5">
//         {data.map((item) => (
//           <div className="row-span-1 shadow-md rounded-lg p-3 cursor-pointer " key={item.id}>
//             <div className='flex justify-between'>
//               <span className=''>{item.id + 1}</span>
//               <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="amber">
//                 <input type="checkbox" defaultChecked={item.check}
//                   className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
//                   id="amber" />
//                 <FontAwesomeIcon icon={faCheck} className="absolute text-white text-xs transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100" />
//               </label>
//             </div>
//             <Tooltip content={item.job} className=" bg-white text-black shadow-md rounded-lg">
//               <p className="my-3 text-[#214581]">{item.job}</p>
//             </Tooltip>
//           </div>
//         ))}

//       </div>
//     </div>
//   )
// }


import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-01-21T13:00',
    endDatetime: '2024-01-22T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-01-21T13:00',
    endDatetime: '2024-01-22T14:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-01-22T13:00',
    endDatetime: '2024-01-23T14:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-01-20T13:00',
    endDatetime: '2024-01-20T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-01-21T13:00',
    endDatetime: '2024-01-22T14:30',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Job() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className="pt-16">
      <Helmet>
        <title>Gabi Spa Chăm Sóc Mẹ Và Bé</title>
        <meta name="description" content="Gabi Spa Chăm Sóc Mẹ Và Bé" />
        <meta name="keywords" content="Gabi Spa Chăm Sóc Mẹ Và Bé" />
        <link rel="Gabi Spa" href="https://gabi-spa.vercel.app/cong-viec" />
      </Helmet>
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      'text-red-500',
                      !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-900',
                      !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                      'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                        <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime)
  let endDateTime = parseISO(meeting.endDatetime)

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]