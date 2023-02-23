import { Image, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";
import {MEALS} from '../data/dummy-meal';

function MealDetailScreen({route}){

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId)
    return <View>
        <Image source={{ uri:selectedMeal.imageUrl}} />
        <Text>
           {selectedMeal.title}
        </Text>
        <View>
          <MealDetails 
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability} />
        </View>
        <Text>Ingredians</Text>
        {selectedMeal.ingredients.map(ingredient=>{
            return <Text key={ingredient}>{ingredient}</Text>
        })}
        <Text>Steps</Text>
        {selectedMeal.steps.map(step=>{
            return <Text key={step}>{step}</Text>
        })}
              <View style={styles.detailContainer}>
           
 
           </View>
    </View>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    detailContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start'
    }
})


