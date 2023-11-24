import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import dummyData from './data';
import {Colors} from '../../Constants/theme';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: Colors.progressBarBlue,
  separatorFinishedColor: Colors.progressBarBlue,
  separatorUnFinishedColor: Colors.unfinished,
  stepIndicatorFinishedColor: Colors.progressBarBlue,
  stepIndicatorUnFinishedColor: Colors.unfinished,
  stepIndicatorCurrentColor: Colors.white,
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: Colors.black,
  stepIndicatorLabelFinishedColor: Colors.white,
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: Colors.progressBarBlue,
};



export default function VerticalStepIndicator() {
  const [currentProgress, setCurrentProgress] = React.useState<number>(0);
  const viewabilityConfig = React.useRef({
    itemVisiblePercentThreshold: 40,
  }).current;

  const renderPage = (rowData: any) => {
    const item = rowData.item;
    return (
      <View style={styles.rowItem}>
        <Text style={styles.title}>{item.time}</Text>
      </View>
    );
  };
 
  const renderPage2 = (rowData: any) => {
    const item = rowData.item;
    return (
      <View style={styles.rowItem}>
         <Image source={item.image}  style={styles.descriptionList}/>
      </View>
    );
  };

  const dateCurrent = new Date();
  const currentHour = dateCurrent.getHours();
  const currentMinutes = dateCurrent.getMinutes();
  const time = `${currentHour}:${currentMinutes}`;
  const calculatePercentage = () => {
    const [hours, minutes] = time.split(':').map(Number);

    const totalMinutes = hours * 60 + minutes;
    const totalMinutesMidnight = 23 * 60 + 58; // 23:59 in minutes
    const final = (totalMinutes / totalMinutesMidnight) * 3;

    setCurrentProgress(final);
  };
  React.useEffect(() => {
    calculatePercentage();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.timeList}
        data={dummyData.data}
        renderItem={renderPage}
        // onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={4}
          direction="vertical"
          currentPosition={currentProgress}
          labels={dummyData.data.map(item => `\n${item.title}\n\n${item.body}`)}
        />
      </View>

      <FlatList
        style={styles.descriptionList}
        data={dummyData.data}
        renderItem={renderPage2}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  stepIndicator: {
    marginTop: 5,
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 32,
    padding: 10,
  },
  title: {
    flex: 1,
    fontFamily:'Poppins',
    fontSize: 18,
    color: Colors.black,
    paddingVertical: 16,
    fontWeight: '400',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
  timeList: {
    marginLeft: 5,
    width: 70,
    marginTop: 15,
  },
  descriptionList: {
    marginTop: 15,
    padding: 8,
  },
});
