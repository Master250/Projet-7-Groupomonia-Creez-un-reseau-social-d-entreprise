<template>
    <v-app id="accueil" class="text-center">
        <top-header/>
        <h1 >Bienvevue chez Goupomania</h1>       
        
        <router-view></router-view>
         
    </v-app>
</template>
<script>
import TopHeader from "./Accueil/TopHeader"

export default {
    name: "Accueil",
    data(){
        return{
            
        }
    },
    components: {
        "top-header": TopHeader,
    },
}
</script>
<style lang="scss">
    #accueil{
        background: no-repeat center/80% url("../assets/icon-left-font-monochrome-black.svg") ;
        
    }
    .header{
        background-color: rgb(253,45,1);
        color: white;
    }
        
    .v-image__image--cover {
     background-size: auto !important; 
}
</style>