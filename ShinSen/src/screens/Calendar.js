import { React, useCallback, useRef, useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { CalendarProvider, AgendaList, ExpandableCalendar } from 'react-native-calendars';
import AgendaItem from '../component/AgendaItem';

const initFoodItems = [
  {
    title: '2023-01-01',
    data: [{itemID: '1', itemName: 'Admin', isBestBefore: true, expDate: '2023-01-01'}],
  },
];

let INIT_ITEMS = initFoodItems;

const Calendar = ( props ) => {
  const { foodItemsAPI } = props;
  const [foodItems, setFoodItems] = useState(INIT_ITEMS);

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
