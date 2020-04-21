import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './${NAME}.scss'

/**
 * @author 潘维吉  
 * @date ${DATE} ${TIME}
 */
export default class  extends Component {

  config: Config = {
    navigationBarTitleText: ''
  } ;

  state: any = {};
  
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  render() {
    return (
      <View className='${NAME}'>
      </View>
    )
  }
}
