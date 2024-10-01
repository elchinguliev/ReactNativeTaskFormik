import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native'; 

const MusicListScreen = () => {
  const router = useRouter();
  const musicList = [
    { id: '1', title: 'Music 1' },
    { id: '2', title: 'Music 2' },
    { id: '3', title: 'Music 3' }
  ];

  const openMusicDetail = (musicId) => {
    router.push(`/music/${musicId}`);
  };

  const navigation = useNavigation();  
  navigation.setOptions({
    headerShown: false,
  });
  
  return (
    <View>
      <FlatList
        data={musicList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openMusicDetail(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MusicListScreen;
