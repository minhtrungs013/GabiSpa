import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
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
} from 'date-fns';
import React, { useState } from 'react';
import Meeting from '../../UI/Meeting';
import { dataMeetings } from '../../utils/DataForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalenderManagement() {
  const [serviceDetails, setServiceDetails] = useState({})
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

  let selectedDayMeetings = dataMeetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  const handleDetails = (meeting) => {
    setServiceDetails(meeting);
  }

  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="min-h-[60vh] relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'> Chi Tiết công việc</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              </div>
            </div>
            <div className="flex px-0 pt-0 relative">
              <div className=" px-4 sm:px-7 lg:min-w-[920px] ">
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
                      <div>Su</div>
                      <div>Mo</div>
                      <div>Tu</div>
                      <div>We</div>
                      <div>Th</div>
                      <div>Fr</div>
                      <div>Sa</div>
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
                            {dataMeetings.some((meeting) =>
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
                          <Meeting meeting={meeting} key={meeting.id} handleDetails={handleDetails} />
                        ))
                      ) : (
                        <p>No meetings for today.</p>
                      )}
                    </ol>
                  </section>
                </div>
              </div>
              <div>
                <h2 className="flex-auto font-semibold text-gray-900">{serviceDetails?.service?.nameService} </h2>
                <h3 className="flex-auto font-semibold text-gray-900">{serviceDetails?.service?.description} </h3>
                <h3 className="flex-auto font-semibold text-gray-900">Công Việc cần làm: </h3>
                <ul className=' grid grid-cols-2 gap-4 w-full'>
                  {serviceDetails?.service?.ServiceScheduleDetails?.map((schedule, index) => (
                    <li key={index} className='flex items-center py-2 pl-6 '>
                      <FontAwesomeIcon icon={faCircle} className='text-[06px]' />
                      <p className="text-sm pl-3 text-gray-900">{schedule}</p>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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