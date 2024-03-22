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
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllServiceBookedAPI, getAllServiceBookedByUserIdAPI } from '../../../api/service/serviceBooked';
import Meeting from '../../UI/Meeting';
import Modal from '../../UI/Modal ';
import JobDetails from '../../UI/jobDetails';
import { ROLE_ADMIN, SECRET_ROLE } from '../../../commom/messageConstant';
import { compareData } from '../../utils/utils';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalenderManagement() {
  const [serviceDetails, setServiceDetails] = useState({})
  const [meeting, setMeeting] = useState(null)
  const [selectedDayMeetings, setSelectedDayMeetings] = useState([])
  const [showJobDetails, setShowServiceDetails] = useState(false)
  const [dataServiceBooked, setDataServiceBooked] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const idUser = useSelector(state => state.userReducer.idUser);
  const role = useSelector((state) => state.userReducer.role)
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    return dataServiceBooked?.find((meeting) =>
      meeting.id === id
    )
  }

  useEffect(() => {
    const getDataMeetingToday = () => {
      let data = []
      for (let i = 0; i < dataServiceBooked?.length; ++i) {
        let a1 = dataServiceBooked[i].bookedDetails?.find((meeting) =>
          isSameDay(parseISO(meeting.startDateTime), selectedDay)
        )
        if (a1) {
          a1 = { ...a1, idMeeting: dataServiceBooked[i].id };
          data.push(a1)
        }
      }
      setSelectedDayMeetings(data)
    }
    getDataMeetingToday()
  }, [selectedDay, dataServiceBooked])

  const sortedMeetings = selectedDayMeetings.sort((a, b) => {
    return new Date(a.startDateTime) - new Date(b.startDateTime);
  });

  const getAllServiceBooked = (idUser, role) => {
    if (compareData(ROLE_ADMIN, role, SECRET_ROLE)) {
      getAllServiceBookedAPI(`services-booked/get-many`, {}).then((res) => {
        if (res) {
          setDataServiceBooked(res.data.data?.items)
        }
      }).catch((error) => {
        toast.error(error.response?.data?.message)
      })
    } else {
      getAllServiceBookedByUserIdAPI(`services-booked/get-by-user-id/${idUser}/user-id`).then((res) => {
        if (res) {
          setDataServiceBooked(res.data.data)
        }
      }).catch((error) => {
        toast.error(error.response?.data?.message)
      })
    }
  }

  useEffect(() => {
    getAllServiceBooked(idUser, role)
  }, [idUser, role]);

  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="min-h-[60vh] relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl drop-shadow-lg overflow-hidden rounded-2xl bg-clip-border">
            <div className='flex justify-between'>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h4 className='text-lg font-semibold'>Quản lý công việc</h4>
              </div>
              <div className="p-6 pb-0 mb-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              </div>
            </div>
            <div className="lg:flex px-0 pt-0 relative">
              <div className=" px-4 sm:px-7 lg:min-w-[920px] ">
                <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
                  <div className="md:pr-14">
                    <div className="flex items-center">
                      <h2 className="flex-auto font-semibold text-gray-900">
                       Tháng {format(firstDayCurrentMonth, 'MM yyyy')}
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
                      <div>CN</div>
                      <div>T2</div>
                      <div>T3</div>
                      <div>T4</div>
                      <div>T5</div>
                      <div>T6</div>
                      <div>T7</div>
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
                            {dataServiceBooked?.find((meeting) =>
                              meeting.bookedDetails?.some((detail) => isSameDay(parseISO(detail.startDateTime), day))
                            ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <section className=" mt-12 md:mt-0 md:pl-14">
                    <h2 className="font-semibold text-gray-900">
                      Lịch trình ngày{' '}
                      <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                        {format(selectedDay, 'dd - MM - yyy')}
                      </time>
                    </h2>
                    <ol className="mb-10 lg:mb-0 mt-4 space-y-1 text-sm leading-6 text-gray-500 overflow-y-auto max-h-[400px]">
                      {sortedMeetings.length > 0 ? (
                        sortedMeetings.map((meeting) => (
                          <div onClick={() => openModal()}>
                            <Meeting meeting={meeting} data={findDataMettingById(meeting?.idMeeting)} handleDetails={handleDetails} />
                          </div>
                        ))
                      ) : (
                        <p>No meetings for today.</p>
                      )}
                    </ol>
                  </section>
                </div>
              </div>
              <div className='hidden lg:block'>
                {showJobDetails && <JobDetails serviceDetails={serviceDetails} meeting={meeting} getAllServiceBooked={getAllServiceBooked} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden'>
        <Modal isOpen={isModalOpen} onClose={closeModal} title={'Chi Tiết Công việc'} style1={'min-w-[300px]'}>
          <JobDetails serviceDetails={serviceDetails} meeting={meeting} getAllServiceBooked={getAllServiceBooked} />
        </Modal>
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