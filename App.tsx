import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import axios from 'axios';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

export default function App() {
  const replaceAt = function (input: string, index: number, character: string) {
    return input.substr(0, index) + character + input.substr(index + character.length);
  }

  const [city, setCity] = useState("Loading...")
  const [ok, setOk] = useState(true)
  const [meal2, setMeal2] = useState('')
  const [dinner2, setDinner2] = useState('')
  const [meal3, setMeal3] = useState('')
  const [dinner3, setDinner3] = useState('')
  const [meal4, setMeal4] = useState('')
  const [dinner4, setDinner4] = useState('')
  const [meal5, setMeal5] = useState('')
  const [dinner5, setDinner5] = useState('')
  const [meal6, setMeal6] = useState('')
  const [dinner6, setDinner6] = useState('')

  const getCurrentWeek = () => {
    const day = new Date();
    const sunday = day.getTime() - 86400000 * day.getDay();

    day.setTime(sunday);

    const result = [day.toISOString().slice(0, 10)];

    for (let i = 1; i < 7; i++) {
      day.setTime(day.getTime() + 86400000);
      result.push(day.toISOString().slice(0, 10));
    }

    return result;
  }

  const getMeal2 = () => {
    axios.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&KEY=5692fa4bb8c54216b2b4194b0075d6f6&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010462&MLSV_YMD=${getCurrentWeek()[2].replace(/\-/gi, '')}`).then((Response) => {
      setMeal2(Response.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
      setDinner2(Response.data.mealServiceDietInfo[1].row[1].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
    }).catch((Error) => {
      console.log(Error);
    })
  }
  const getMeal3 = () => {
    axios.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&KEY=5692fa4bb8c54216b2b4194b0075d6f6&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010462&MLSV_YMD=${getCurrentWeek()[3].replace(/\-/gi, '')}`).then((Response) => {
      setMeal3(Response.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
      setDinner3(Response.data.mealServiceDietInfo[1].row[1].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
    }).catch((Error) => {
      console.log(Error);
    })
  }
  const getMeal4 = () => {
    axios.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&KEY=5692fa4bb8c54216b2b4194b0075d6f6&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010462&MLSV_YMD=${getCurrentWeek()[4].replace(/\-/gi, '')}`).then((Response) => {
      setMeal4(Response.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
      setDinner4(Response.data.mealServiceDietInfo[1].row[1].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
    }).catch((Error) => {
      console.log(Error);
    })
  }
  const getMeal5 = () => {
    axios.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&KEY=5692fa4bb8c54216b2b4194b0075d6f6&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010462&MLSV_YMD=${getCurrentWeek()[5].replace(/\-/gi, '')}`).then((Response) => {
      setMeal5(Response.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
      setDinner5(Response.data.mealServiceDietInfo[1].row[1].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
    }).catch((Error) => {
      console.log(Error);
    })
  }
  const getMeal6 = () => {
    axios.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&KEY=5692fa4bb8c54216b2b4194b0075d6f6&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=S10&SD_SCHUL_CODE=9010462&MLSV_YMD=${getCurrentWeek()[6].replace(/\-/gi, '')}`).then((Response) => {
      setMeal6(Response.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
      setDinner6(Response.data.mealServiceDietInfo[1].row[1].DDISH_NM.replace(/\<br\/\>/gi, '\n').replace(/\(점심\)/gi, '').replace(/\([^\)]*\)/gi, ''))
    }).catch((Error) => {
      console.log(Error);
    })
  }

  useEffect(() => {
    getCurrentWeek()
    getMeal2()
    getMeal3()
    getMeal4()
    getMeal5()
    getMeal6()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.title}>
        <Text style={styles.titleContent}>IMHO WITM</Text>
        <Text style={styles.subtitleContent}>What is Today's Meal?</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.box}>
          <View style={styles.mealBox}>
            <View style={styles.date}>
              <Text style={styles.date}>
                {replaceAt(getCurrentWeek()[2], 4, '년 ').substring(0, 7)}
                월&nbsp;
                {getCurrentWeek()[2].substring(8, 10)}
                일
              </Text >
              <View style={styles.line}></View>
            </View>
            <View style={styles.lunch}>
              <Text style={styles.mealText}>{meal2}</Text >
            </View>
            <View style={styles.line}></View>
            <View style={styles.dinner}>
              <Text style={styles.mealText}>{dinner2}</Text >
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.mealBox}>
            <View style={styles.date}>
              <Text style={styles.date}>
                {replaceAt(getCurrentWeek()[3], 4, '년 ').substring(0, 7)}
                월&nbsp;
                {getCurrentWeek()[3].substring(8, 10)}
                일
              </Text >
              <View style={styles.line}></View>
            </View>
            <View style={styles.lunch}>
              <Text style={styles.mealText}>{meal3}</Text >
            </View>
            <View style={styles.line}></View>
            <View style={styles.dinner}>
              <Text style={styles.mealText}>{dinner3}</Text >
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.mealBox}>
            <View style={styles.date}>
              <Text style={styles.date}>
                {replaceAt(getCurrentWeek()[4], 4, '년 ').substring(0, 7)}
                월&nbsp;
                {getCurrentWeek()[4].substring(8, 10)}
                일
              </Text >
              <View style={styles.line}></View>
            </View>
            <View style={styles.lunch}>
              <Text style={styles.mealText}>{meal4}</Text >
            </View>
            <View style={styles.line}></View>
            <View style={styles.dinner}>
              <Text style={styles.mealText}>{dinner4}</Text >
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.mealBox}>
            <View style={styles.date}>
              <Text style={styles.date}>
                {replaceAt(getCurrentWeek()[5], 4, '년 ').substring(0, 7)}
                월&nbsp;
                {getCurrentWeek()[5].substring(8, 10)}
                일
              </Text >
              <View style={styles.line}></View>
            </View>
            <View style={styles.lunch}>
              <Text style={styles.mealText}>{meal5}</Text >
            </View>
            <View style={styles.line}></View>
            <View style={styles.dinner}>
              <Text style={styles.mealText}>{dinner5}</Text >
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.mealBox}>
            <View style={styles.date}>
              <Text style={styles.date}>
                {replaceAt(getCurrentWeek()[6], 4, '년 ').substring(0, 7)}
                월&nbsp;
                {getCurrentWeek()[6].substring(8, 10)}
                일
              </Text >
              <View style={styles.line}></View>
            </View>
            <View style={styles.lunch}>
              <Text style={styles.mealText}>{meal6}</Text >
            </View>
            <View style={styles.line}></View>
            <View style={styles.dinner}>
              <Text style={styles.mealText}>{dinner6}</Text >
            </View>
          </View>
        </View>
      </ScrollView>
      <Text style={styles.insta}>만든놈 인스타 : @ubin._ing  버그 제보 환영</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center"
  },
  titleContent: {
    fontSize: 40,
    fontWeight: "800",
    color: '#1074e3'
  },
  subtitleContent: {
    fontSize: 21.8,
    fontWeight: "500",
    color: '#1074e3'
  },

  box: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    flex: 1,
  },
  mealBox: {
    flex: 1,
    width: SCREEN_WIDTH * 0.65,
    height: SCREEN_HEIGHT * 0.9,
    marginTop: 0,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },

  date: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "600",
    alignItems: "center",
    color: '#1074e3'
  },

  line: {
    width: SCREEN_WIDTH * 0.65,
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
  },
  insta: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 20,
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