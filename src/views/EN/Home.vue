<template>

    <div class="w-full h-[100vh] relative flex justify-center">
        
        <div id="hero_sidemask" class="absolute bg-[#E7F2FF] left-0 top-0 w-[calc((100%/2)-1500px/2)] h-[200vh]"></div>

        <img id="hero" class="desktop:max-w-[1500px] w-full h-auto absolute" :src="require('@/assets/svg/hero.svg')" alt="Hero illustration" />  

            <div class="desktop:max-w-[1500px] w-full desktop:pt-[15em] laptop:pt-[17%] flex flex-col items-center relative">

                <h1 class="font-bold text-7xl text-main relative text-center">Focus on learning, <br> forget the noise.</h1>

                <p class="font-medium text-2xl text-main relative text-center mt-7">We kill the noise, by creating a <br> soundproof learning bubble.</p>

                <div class="w-full flex justify-center mt-4">

                    <button class="pt-[1px] text-white h-full w-auto bg-[#93B3D8] font-semibold text-lg m-2 ml-2 pl-5 pr-5 rounded-full     hover:bg-[#AAC3E1]      transition duration-300">Kontakt os</button>
                    <button class="pt-[1px] text-white h-full w-auto bg-[#0097ff] font-semibold text-lg m-2 ml-2 pl-5 pr-5 rounded-full shadow-xl shadow-[#0097ff]/[0.3]    hover:bg-[#2BA9FF]      transition duration-300"><fa icon="play" class="h-[16px]" /> Se video</button>

                </div>

            </div>

    </div>



    <div class="w-full h-auto relative flex justify-center">  

        <div class="desktop:max-w-[1250px] w-full flex flex-col items-center relative">

            <h2 class="font-bold text-6xl text-main relative text-center">Bubbles i Løvens hule.</h2>

            <p class="font-medium w-[75%] text-2xl text-main relative text-center mt-4">I 2023 deltog vi i løvens hule season 8, hvor vi stolt kunne udvide ejerstablen med ingen mindre end Louise Herping Ellegaard, den brilliante kvinde bag læringsplatformen Clio. Yderligere har vi allieret os med hele Danmarks tidligere uddannelses- og forskningsminister, Tommy Ahlers!</p>

            <div class="w-full flex flex-auto justify-center h-[2em] mt-7 gap-5">

                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/DR.svg')" alt="Hero illustration" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/Finans.svg')" alt="Hero illustration" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/BT.svg')" alt="Hero illustration" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/BDO.svg')" alt="Hero illustration" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/Folkeskolen.svg')" alt="Hero illustration" />  

            </div>

        </div>

    </div>



</template>

<script>

export default {
    data() { 
        return {

        }
    },
    setup() {

    },
    components: {},
    methods: {
        handleScroll(){
            let hero = document.getElementById('hero')
    
            let scrollVal = window.pageYOffset/(hero.clientHeight-window.innerHeight)

            document.getElementById('hero').style.opacity = 1.0 - scrollVal
            document.getElementById('hero_sidemask').style.opacity = 1.0 - scrollVal
            
        }
    },
    unmounted(){
        //scroll listener stop
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted(){
        //scroll listener start
        window.addEventListener('scroll', this.handleScroll) }
    }


</script>