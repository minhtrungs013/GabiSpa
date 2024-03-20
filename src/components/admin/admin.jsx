import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarAdmin from '../UI/navbarAdmin';
import SlideBar from '../UI/slideBar';
import BookingManagement from './bookingAdmin/bookingManagement';
import CalenderManagement from './calendarAdmin/calendarManagement';
import CategoriesManagement from './categoriesAdmin/categoriesManagement';
import ServiceManagement from './serviceAdmin/serviceManagement';
import TaskManagement from './taskAdmin/taskManagement';
import UserManagement from './userAdmin/userManagement';


export default function Admin() {
    return (
        <div className="lg:flex lg:flex-row">
            <div className="lg:basis-1/6 hidden lg:block">
                <SlideBar />
            </div>
            <div className="lg:basis-5/6 sm:basis-full ">
                <div className="lg:flex-row">
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