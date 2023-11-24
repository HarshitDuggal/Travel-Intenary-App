import {View, Text} from 'react-native';
import Button from '../Button';
import {style} from './topBarStylesheet';
import {useState} from 'react';

const Topbar = () => {
  const [activeButton, setActiveButton] = useState('Today');
  const handleButton = (buttonName: string) => {
    console.log('This is clicking');
    setActiveButton(buttonName);
  };

  const date = new Date();

  let day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });

  
  const dateToday = `${day} ${month}`;
  const dateTomorrow = `${day + 1} ${month }`;
  const dateYesterday = `${day - 1} ${month }`;

  return (
    <View style={style.container}>
      <Text style={style.heading}>Itinerary Form</Text>
      <View style={style.buttonsContainer}>
        <Button
          headerText={'Yesterday'}
          subText={dateYesterday}
          onPress={() => handleButton('Yesterday')}
          style={[
            style.button,
            activeButton === 'Yesterday' ? style.activeButton : null,
          ]}
        />
        <Button
          headerText={'Today'}
          subText={dateToday}
          onPress={() => handleButton('Today')}
          style={[
            style.button,
            activeButton === 'Today' ? style.activeButton : null,
          ]}
        />
        <Button
          headerText={'Tomorrow'}
          subText={dateTomorrow}
          onPress={() => handleButton('Tomorrow')}
          style={[
            style.button,
            activeButton === 'Tomorrow' ? style.activeButton : null,
          ]}
        />
      </View>
    </View>
  );
};

export default Topbar;
