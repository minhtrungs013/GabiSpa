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
  startOfToday
} from 'date-fns';
import React, { useEffect, useState } from 'react';
import Meeting from '../../UI/Meeting';
import JobDetails from '../../UI/jobDetails';
import { dataMeetings } from '../../utils/DataForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalenderManagement() {
  const [serviceDetails, setServiceDetails] = useState({})
  const [meeting, setMeeting] = useState(null)
  const [selectedDayMeetings, setSelectedDayMeetings] = useState([])
  const [showJobDetails, setShowServiceDetails] = useState(false)
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  const showJob = (isShow) => {
    setShowServiceDetails(isShow)
  }
  const onClickSelecedDay = (day) => {
    setSelectedDay(day)
  }

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const handleDetails = (data, meeting) => {
    setServiceDetails(data);
    setMeeting(meeting)
    showJob(true)
  }

  const findDataMettingById = (id) => {
    return dataMeetings.find((meeting) =>
      meeting.id === id
    )
  }
  // const renderTask = (start, end, id) => {
  //   const startDatetime = parseISO(start);
  //   const endDatetime = parseISO(end);

  //   const extractTime = (datetimeString) => {
  //     const [date, time] = datetimeString.split('T');
  //     const [hour, minute] = time.split(':');
  //     return { hour: parseInt(hour, 10), minute: parseInt(minute, 10) };
  //   };
  //   const startTime = extractTime(start);
  //   const endTime = extractTime(end);

  //   const interval = eachDayOfInterval({ start: startDatetime, end: endDatetime });
  //   const dateObjects = interval.map(date => ({
  //     id: id,
  //     startDateTime: format(new Date(date.setHours(startTime.hour, startTime.minute)), "yyyy-MM-dd'T'HH:mm"),
  //     endDateTime: format(new Date(date.setHours(endTime.hour, endTime.minute)), "yyyy-MM-dd'T'HH:mm"),
  //   }));
  //   setDateJob(prevData => [...prevData, dateObjects])
  // }

  useEffect(() => {
    const getDataMeetingToday = () => {
      let data = []
      for (let i = 0; i < dataMeetings.length; ++i) {
        let a1 = dataMeetings[i].roleDetails?.find((meeting) =>
          isSameDay(parseISO(meeting.startDateTime), selectedDay)
        )
        if (a1) {
          a1 = { ...a1, idMeeting: dataMeetings[i].id };
          data.push(a1)
        }
      }
      setSelectedDayMeetings(data)
    }
    getDataMeetingToday()
  }, [selectedDay])

  const sortedMeetings = selectedDayMeetings.sort((a, b) => {
    return new Date(a.startDateTime) - new Date(b.startDateTime);
  });
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
                            onClick={() => { onClickSelecedDay(day); showJob(false); }}
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
                            {dataMeetings.find((meeting) =>
                              meeting.roleDetails?.some((detail) => isSameDay(parseISO(detail.startDateTime), day))
                            ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
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
                      {sortedMeetings.length > 0 ? (
                        sortedMeetings.map((meeting) => (
                          <Meeting meeting={meeting} data={findDataMettingById(meeting?.idMeeting)} handleDetails={handleDetails} />
                        ))
                      ) : (
                        <p>No meetings for today.</p>
                      )}
                    </ol>
                  </section>
                </div>
              </div>
              {showJobDetails && <JobDetails serviceDetails={serviceDetails} meeting={meeting} />}
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