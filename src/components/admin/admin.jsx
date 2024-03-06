import React from 'react';
import SlideBar from '../UI/slideBar';
import UserManagement from './userAdmin/userManagement';
import NavbarAdmin from '../UI/navbarAdmin';
import ServiceManagement from './serviceAdmin/serviceManagement';
import { Route, Routes } from 'react-router-dom';
import CategoriesManagement from './categoriesAdmin/categoriesManagement';
import BookingManagement from './bookingAdmin/bookingManagement';
import CalenderManagement from './calendarAdmin/calendarManagement';
import TaskManagement from './taskAdmin/taskManagement';


export default function Admin() {
    return (
        <div className="flex flex-row">
            <div className="basis-1/6 ">
                <SlideBar />
            </div>
            <div className="basis-5/6">
                <div className=" flex-row">
                    <main className="ease-soft-in-out relative h-full max-h-screen rounded-xl transition-all duration-200">
                        <div className="basis-full ">
                            <NavbarAdmin />
                        </div>
                        <div className="basis-full ">

                            <Routes>
                                <Route path="GabiSpa/admin/user-management" element={<UserManagement />} />
                                <Route path="GabiSpa/admin/service-management" element={<ServiceManagement />} />
                                <Route path="GabiSpa/admin/categories-management" element={<CategoriesManagement />} />
                                <Route path="GabiSpa/admin/booking-management" element={<BookingManagement />} />
                                <Route path="GabiSpa/admin/calendar-management" element={<CalenderManagement />} />
                                <Route path="GabiSpa/admin/task-management" element={<TaskManagement />} />
                            </Routes>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}

// import { Quill } from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// const Size = Quill.import('attributors/style/size');
// const FontAttributor = Quill.import('attributors/className/font');
// FontAttributor.whitelist = ['arial', 'calibri', 'courier', 'georgia', 'lucida',
//     'open', 'roboto', 'tahoma', 'times', 'trebuchet', 'verdana'];
// Quill.register(FontAttributor, true);
// // const fontSizeArr = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];
// const fontSizeArr = ['14px', '16px', '18px']
// Size.whitelist = fontSizeArr
// Quill.register(Size, true);


// const [value, setValue] = useState('');
// const toolbarOptions = [
//     ['bold', 'italic', 'underline', 'strike', 'link', 'image'],        // toggled buttons
//     ['blockquote', 'code-block'],

//     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//     [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
//     [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
//     [{ 'direction': 'rtl' }],                         // text direction

//     [{ 'size': fontSizeArr }],  // custom dropdown
//     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//     [{
//         'font': ['arial', 'calibri', 'courier', 'georgia', 'lucida',
//             'open', 'roboto', 'tahoma', 'times', 'trebuchet', 'verdana']
//     }],
//     [{ 'align': [] }],

//     ['clean']                                         // remove formatting button
// ];
// const module = {
//     toolbar: toolbarOptions
// }
// <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} />