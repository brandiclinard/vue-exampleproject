<template>
    <div class="home">
        <h1>Home</h1>
        <ButtonHome>Make sure I change and I am really long</ButtonHome>
        <CardHome />
    </div>
   
    
</template>

<script> 
import ButtonHome from '../_shared/Button.vue'
import CardHome from '../_shared/Card.vue'

export default {
    name: 'HomePage', 
    components: {
        ButtonHome, CardHome
    }
}
   

</script>