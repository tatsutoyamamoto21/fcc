import { React, useCallback, useRef } from 'react';
import isEmpty from 'lodash/isEmpty';
import { CalendarProvider, AgendaList, ExpandableCalendar } from 'react-native-calendars';
import AgendaItem from '../component/AgendaItem';
import useGetItems from '../hooks/useGetItems';

// const today = new Date().toISOString().split('T')[0];
// const fastDate = getPastDate(5);
// const futureDates = getFutureDates(12);
// const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays) {
  return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
}

export const foodItems = [
  {
    title: '2023-08-29',
    data: [{itemID: '1', itemName: 'Chicken', isBestBefore: true, expDate: '2023-08-29'}],
  },
  {
    title: '2023-08-30',
    data: [
      {itemID: '2', itemName: 'Eggs', isBestBefore: false, expDate: '2023-08-30'},
      {itemID: '3', itemName: 'Milk', isBestBefore: true, expDate: '2023-08-30'},
    ],
  },
];
`export const foodItems = useGetItems();
console.log(foodItems);`
const ITEMS = foodItems;
console.log(ITEMS[0].data[0]);

// ITEMS.forEach((item) => {

// });

// [
//   {itemID: '1', itemName: 'Chicken', isBestBefore: true, expDate: '2023-08-29'},
//   {itemID: '2', itemName: 'Eggs', isBestBefore: false, expDate: '2023-08-30'},
//   {itemID: '3', itemName: 'Milk', isBestBefore: true, expDate: '2023-08-30'},
// ];

export const getMarkedDates = ( props ) => {
  const marked = {};

  ITEMS.forEach((item) => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {disabled: true};
    }
  });
  return marked;
};

const Calendar = () => {
  const renderItem = useCallback(({item}) => {
    return <AgendaItem item={item}/>;
  }, []);

  const marked = useRef(getMarkedDates());

  const foodItems = useGetItems();
  console.log(foodItems);

  return (
    <CalendarProvider showTodayButton date={ITEMS[1]?.title}>
      <ExpandableCalendar markedDates={marked.current} />
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
      />
    </CalendarProvider>
  );
};

export default Calendar;
