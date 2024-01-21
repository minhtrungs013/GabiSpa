// const today = startOfToday();

// const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
// let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

// const daysInMonth = eachDayOfInterval({
// start: firstDayOfMonth,
// end: endOfMonth(firstDayOfMonth),
// });

// const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
// event.preventDefault();
// const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
// setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
// };

// const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
// event.preventDefault();
// const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
// setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
// };