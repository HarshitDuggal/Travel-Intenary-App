import { View } from 'react-native'
import Topbar from '../../Components/TopBar'
import OverrideRenderTimeLine from '../../Components/Itenary'

const Guide = () => {
  return (
    <View style={{flex:1}}>
      <Topbar/>
      <OverrideRenderTimeLine/>
    </View>
  )
}

export default Guide