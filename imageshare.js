import React from "react";
import { useState } from "react";
import { Text,View,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import * as sharing from 'expo-sharing';
import * as ShareFile from 'expo-file-system';

const Imageshare =()=>{
    
     const FileShare =async()=>{
            const ImageURL = "https://adityauniversity.in/static/media/AU-logo.d4c9addb1494f8538d6a.jpg"
            const FileURL =`${ShareFile.cacheDirectory}/Shared_image.png`;

            const {uri}=await ShareFile.downloadAsync(ImageURL,FileURL);

            const permission = await sharing.isAvailableAsync();
            if(permission){
                sharing.shareAsync(uri);
            }
            else{
                alert("give permission to share");
            }
     }
    return(
        <SafeAreaView>
            <View>
                <Button mode="contained" onPress={FileShare}>Share</Button>
            </View>
        </SafeAreaView>
    )
}
    
export default Imageshare;