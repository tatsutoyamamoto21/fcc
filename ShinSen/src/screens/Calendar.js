import { React, useCallback, useRef, useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { CalendarProvider, AgendaList, ExpandableCalendar } from 'react-native-calendars';
import AgendaItem from '../component/AgendaItem';

const foodItemsNoMore = [
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

let ITEMS = foodItemsNoMore;

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

const Calendar = ( props ) => {
  const { foodItemsAPI } = props;
  const [foodItems, setFoodItems] = useState(ITEMS);
  const [key, setKey] = useState(null)

  useEffect(() => {
    if (!isEmpty(foodItemsAPI)) {
      setFoodItems(JSON.parse(JSON.stringify(foodItemsAPI)));
    };
  }, [foodItemsAPI]);

  const markednow = {};

  foodItems.forEach((item) => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      markednow[item.title] = {marked: true};
    } else {
      markednow[item.title] = {disabled: true};
    }
  });

  const renderItem = useCallback(({item}) => {
    return <AgendaItem item={item}/>;
  }, []);

  const marked = useRef(getMarkedDates(foodItems));

  return (
    <CalendarProvider showTodayButton date={foodItems[0]?.title}>
      <ExpandableCalendar markedDates={markednow} />
      <AgendaList
        sections={foodItems}
        renderItem={renderItem}
      />
    </CalendarProvider>
  );
};

export default Calendar;
