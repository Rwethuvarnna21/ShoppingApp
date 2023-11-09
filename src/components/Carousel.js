import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React ,{useState}from 'react'
import Carousel from 'react-native-snap-carousel'
import { Pagination } from 'react-native-snap-carousel'
const { width: screenWidth } = Dimensions.get("screen")
const image = [
    { url: 'https://img.freepik.com/free-psd/super-sale-podium-product-banner-with-editable-text_47987-12084.jpg?w=2000' },
    { url: 'https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-template_120329-2128.jpg?size=626&ext=jpg&ga=GA1.1.1755627661.1693042834&semt=ais' },
    { url: 'https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-template_106176-1494.jpg' },
  ]
  

const SubCarousel = () => {
    const [slider, setSlider] = useState(0);
    const renderitem = ({ item }) => {
        return (
  
    <><View style={{ height: 120, width: '100%' }}>
                <Image source={{ uri: item.url }} style={{ height: '150%', width: '96%', resizeMode: 'stretch', justifyContent: 'center', alignSelf: 'center', borderRadius: 10 }} />
                <Pagination
                    dotsLength={3}
                    activeDotIndex={slider}
                    containerStyle={styles.page}
                    dotStyle={styles.Dot}
                    inactiveDotStyle={styles.inDot}
                    inactiveDotOpacity={0.6}
                    inactiveDotScale={0.8} />
            </View>
            <View style={{ width: '100%', flexDirection: 'row', height: 200, backgroundColor: 'white' }}>

                    <Carousel
                        data={image}
                        renderItem={renderitem}
                        sliderWidth={screenWidth}

                        itemWidth={screenWidth}
                        onSnapToItem={(index) => setSlider(index)}
                        //  autoplay
                        loop />
                </View></>
    
  )
}
}
export default SubCarousel

const styles = StyleSheet.create({})