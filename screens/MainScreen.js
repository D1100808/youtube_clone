
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { getVideos } from '../util/getVideos'
import ListOfVideos from "../components/ListOfVideos";
import ErrorOverlay from "../UI/ErrorOverlay";
import LoadingOverlay from "../UI/LoadingOverlay";

function MainScreen() {
  const [error, setError]=useState()
  const [info, setInfo] = useState([])
  const [fetchingData, setFetchingData] = useState(true)
  
  useEffect(() => {
    const getData = async () => {
      setFetchingData(true)
      try {
        const videos = await getVideos()
        setInfo(videos)
      } catch (error) {
        setError('Could not get the data!')
      }
      setFetchingData(false)
    }

    getData()
  }, [])

  if (error && !fetchingData) {
    <ErrorOverlay message={error}/>
  }

  if (fetchingData) {
    <LoadingOverlay/>
  }

  const renderInfoList = (itemData) => {
    const item = itemData.item
    return (
      <ListOfVideos {...item} />
    )
  }
  return (
    <FlatList
      data={info}
      renderItem={renderInfoList}
      keyExtractor={(item)=>item.id}
    />
  );
}

export default MainScreen;
