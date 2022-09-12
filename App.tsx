import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions, BackHandler } from 'react-native'
import axios from 'axios';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

export default function App() {
  const [city, setCity] = useState("Loading...")
  const [ok, setOk] = useState(true)
  const [meal, setMeal] = useState('')
  const [dinner, setDinner] = useState('')

  const getMeal = () => {
    axios.get('https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&KEY=5692fa4bb8c54216b2b4194b0075d6f6&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010462&MLSV_YMD=20220913').then((Response) => {
      setMeal(Response.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
      setDinner(Response.data.mealServiceDietInfo[1].row[1].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
    }).catch((Error) => {
      console.log(Error);
    })

  }
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync()
    if (!granted) {
      setOk(false)
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 6 })
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false })
    setCity(`${location[0].city} ${location[0].street}`)
  }

  useEffect(() => {
    getWeather()
    getMeal()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.title}>
        <Text style={styles.titleContent}>Today</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}

      >
        <View style={styles.box}>
          <View style={styles.mealBox}>

            <View style={styles.date}>
              <Text style={styles.date}>9월 13일 화요일</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.lunch}>
              <Text style={styles.mealText}>{meal}</Text >
            </View>
            <View style={styles.line}></View>
            <View style={styles.dinner}>
              <Text style={styles.mealText}>{dinner}</Text >
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  title: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  titleContent: {
    fontSize: 60,
    fontWeight: "600",
  },
  city: {
    fontSize: 20,
    fontWeight: "500"
  },

  weather: {
  },
  box: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    flex: 1,
  },
  mealBox: {
    flex: 1,
    backgroundColor: "white",
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.9,
    marginTop: 0,
    marginBottom: 30,
    borderRadius: 10,
  },

  date: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: "600",
    alignItems: "center"
  },

  line: {
    width: SCREEN_WIDTH * 0.9,
    height: 1,
    marginTop: 10,
    backgroundColor: "gray",
  },
  lunch: {
    justifyContent: "center",
    flex: 1,
  },
  dinner: {
    justifyContent: "center",
    flex: 1,
    marginTop: -10
  },
  mealText: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  }
})


/*
       신청인자
       ATPT_OFCDC_SC_CODE        STRING(필수)       시도교육청코드
       SD_SCHUL_CODE        STRING(필수)       표준학교코드
       MMEAL_SC_CODE        STRING(선택)       식사코드
       MLSV_YMD        STRING(선택)       급식일자
       MLSV_FROM_YMD        STRING(선택)       급식시작일자
       MLSV_TO_YMD        STRING(선택)       급식종료일자
   
   
       출력인자
   1       ATPT_OFCDC_SC_CODE       시도교육청코드
   2       ATPT_OFCDC_SC_NM       시도교육청명
   3       SD_SCHUL_CODE       표준학교코드
   4       SCHUL_NM       학교명
   5       MMEAL_SC_CODE       식사코드
   6       MMEAL_SC_NM       식사명
   7       MLSV_YMD       급식일자
   8       MLSV_FGR       급식인원수
   9       DDISH_NM       요리명
   10       ORPLC_INFO       원산지정보
   11       CAL_INFO       칼로리정보
   12       NTR_INFO       영양정보
   13       MLSV_FROM_YMD       급식시작일자
   14       MLSV_TO_YMD       급식종료일자
   */