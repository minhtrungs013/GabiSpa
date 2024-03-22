import { format } from 'date-fns';
import React, { Fragment } from 'react';
import { VALIDATION_DATE_TIME, subtract7HoursFromDate } from '../utils/utils';

/**
  * @param {object} meeting - meeting object
  * @param {object} data - service object
  * @param {function} handleDetails - function to handle meeting details
 */
export default function Meeting({ meeting, data, handleDetails }) {
  return (
    <li onClick={() => handleDetails(data, meeting)} className={`${meeting?.isCompleted && '!bg-green-50 '} mb-2 bg-amber-50 shadow-md cursor-pointer flex items-center px-4 py-1 space-x-4 group rounded-lg focus-within:bg-gray-100 hover:bg-gray-100`}>
      <img
        src={data.service?.images[0]}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{data?.service?.name}</p>
        <p className="mt-0.5">
          <time dateTime={subtract7HoursFromDate(meeting?.startDateTime)}>
            {format(subtract7HoursFromDate(meeting?.startDateTime), 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={subtract7HoursFromDate(meeting?.endDateTime)}>
            {format(subtract7HoursFromDate(meeting?.endDateTime), 'h:mm a')}
          </time>
        </p>
        <div className='flex items-center'>
          {meeting?.isCompleted ? (
            <Fragment>
              <h3 className="flex-auto font-semibold text-green-500">Hoàn thành</h3>
            </Fragment>
          )
            : !meeting?.isCompleted && VALIDATION_DATE_TIME(meeting?.startDateTime, meeting?.endDateTime) ? (
              <Fragment>
                <h3 className="flex-auto font-semibold text-amber-500">Đang chờ</h3>
              </Fragment>
            ) : !meeting?.isCompleted && !VALIDATION_DATE_TIME(meeting?.startDateTime, meeting?.endDateTime) ? (
              <Fragment>
                <h3 className="flex-auto font-semibold text-red-600">Đã hủy</h3>
              </Fragment>) : <></>
          }
        </div>
      </div>
      {/* <Menu
        as="div"
        className="lg:hidden relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
      <div>
        <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          đasđ
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
          <Menu.Items className="absolute w-[332px] z-10 right-[-32px] mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <JobDetails meeting={meeting} serviceDetails={data} />
            </div>
          </Menu.Items>
        </Transition>
      </Menu> */}
    </li>
  )
}
