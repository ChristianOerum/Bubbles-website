<template>

    <div id="page">

        <div class="w-full h-[100vh] relative flex justify-center">
        
        <div class="hero-fade    absolute bg-[#E7F2FF] left-0 top-0 w-[calc((100%/2)-1500px/2)] h-[200vh]"></div>

        <img class="hero-fade     desktop:max-w-[1500px] w-full h-auto absolute z-10" :src="require('@/assets/svg/hero.svg')" alt="Hero illustration" />  

            <div class="desktop:max-w-[1500px] w-full desktop:pt-[15em] laptop:pt-[17%] flex flex-col items-center relative z-20">

                <h1 class="font-bold text-7xl text-main relative text-center">Fokus på læring, <br> ikke på støjen.</h1>

                <p class="font-medium text-2xl text-main relative text-center mt-7">Vi dæmper klassens støj, og skaber en <br> lydtæt læringsboble i klasselokalet.</p>

                <div class="w-full flex justify-center mt-4">

                    <button class="pt-[1px] text-white h-full w-auto bg-[#93B3D8] font-semibold text-lg m-2 ml-2 pl-5 pr-5 rounded-full     hover:bg-[#AAC3E1]      transition duration-300">Kontakt os</button>
                    <button class="pt-[1px] text-white h-full w-auto bg-[#0097ff] font-semibold text-lg m-2 ml-2 pl-5 pr-5 rounded-full shadow-xl shadow-[#0097ff]/[0.3]    hover:bg-[#2BA9FF]      transition duration-300"><fa icon="play" class="h-[16px]" /> Se video</button>

                </div>

            </div>

    </div>



    <div class="section1-fade w-full h-auto relative flex justify-center z-20">  

        <div class="desktop:max-w-[1250px] w-full flex flex-col items-center relative">

            <h2 class="font-bold text-6xl text-main relative text-center">Bubbles i Løvens hule.</h2>

            <p class="font-medium w-[75%] text-2xl text-main relative text-center mt-4">I 2023 deltog vi i løvens hule season 8, hvor vi stolt kunne udvide ejerstablen med ingen mindre end Louise Herping Ellegaard, den brilliante kvinde bag læringsplatformen Clio. Yderligere har vi allieret os med hele Danmarks tidligere uddannelses- og forskningsminister, Tommy Ahlers!</p>

            <div id="hule-testimonials" class="w-full flex flex-auto justify-center h-[2em] mt-7 gap-5">

                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/DR.svg')" alt="DR Logo" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/Finans.svg')" alt="Finans Logo" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/BT.svg')" alt="BT Logo" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/BDO.svg')" alt="BDO Logo" />  
                <img class="w-auto h-full opacity-30    hover:opacity-70   transition duration-300" :src="require('@/assets/svg/Folkeskolen.svg')" alt="Folkeskolen Logo" />  

            </div>

            <img class="w-[800px] mt-5" :src="require('@/assets/images/løverne.png')" alt="Løvens hule billede"/>

        </div>

    </div>



    <div class="w-full h-auto relative flex justify-center mt-[100px]">  

        <div class="desktop:max-w-[1250px] w-full flex flex-col items-center relative">

            <h2 class="font-bold text-6xl text-main relative text-center">Stolt omtalt i</h2>

            <p class="font-medium w-[75%] text-2xl text-main relative text-center mt-4">Klik på et logo for at læse mere</p>

            

            <div class="w-full overflow-hidden h-28 flex relative opacity-70">

                <div class="marquee flex w-[150%] justify-around absolute left-[100%] gap-4">

                    <div class="marquee_item w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/DelaVega.svg')" alt="DelaVega Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/JA worldwide.svg')" alt="JA worldwide Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/ADHD.svg')" alt="ADHD Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/FFE.svg')" alt="FFE Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/Mikrolegat.svg')" alt="Mikrolegat Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/Dansk industri.svg')" alt="Dansk industri Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/AT&T.svg')" alt="AT Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/Inilab.svg')" alt="Inilab Logo" /> 
                    </div>
                    

                </div>

                <div class="marquee marquee_offset w-[150%] flex justify-around absolute left-[100%] gap-4">

                    <div class="marquee_item w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/DelaVega.svg')" alt="DelaVega Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/JA worldwide.svg')" alt="JA worldwide Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/ADHD.svg')" alt="ADHD Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/FFE.svg')" alt="FFE Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/Mikrolegat.svg')" alt="Mikrolegat Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/Dansk industri.svg')" alt="Dansk industri Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/AT&T.svg')" alt="AT Logo" /> 
                    </div>

                    <div class="marquee_item  w-auto h-28 p-4 flex items-center">
                        <img class="w-auto h-full" :src="require('@/assets/svg/Inilab.svg')" alt="Inilab Logo" /> 
                    </div>
                    
                </div>

                <div class="bg-gradient-to-r from-white h-full left-0 absolute w-[300px] h-[50px]"></div>
                <div class="bg-gradient-to-l from-white h-full right-0 absolute w-[300px] h-[50px]"></div>
                

            </div>



        </div>

    </div>



    <div class="w-full h-auto relative flex justify-center mt-[100px]">  

        <div class="desktop:max-w-[1250px] w-full flex flex-col items-center relative">

            <h2 class="font-bold text-xl text-main relative text-center">Pssst... dem her er vi VIRKELIGT stolte af</h2>


            <div class="flex w-full h-auto gap-4 items-start">
                
                <div class="w-auto h-28 bg-[#FFE5D0] rounded-xl p-6 flex items-center gap-8">

                    <img class="w-auto h-full" :src="require('@/assets/svg/ADHD foreningen.svg')" alt="ADHD foreningens Logo" />  
                    <h2 class="font-bold text-2xl text-[#724622]">Omtalt  på ADHD-foreningens hjemmeside</h2>

                </div>


                <div class="h-auto bg-[#DFE4EE] w-[80%] rounded-xl p-8">

                    <h2 class="font-bold text-4xl text-main">Verdensmestre i Entreprenørskab</h2>

                    <p class="font-medium text-xl text-main mt-4 w-[60%]">I 2021 vandt Bubbles "De La Vega" prisen som kulmination af deltagelsen i verdens største entreprænørskabs konkurrence for ungdomsuddannelser.</p>

                </div>

            </div>


        </div>

    </div>



    <div class=h-[3000px]></div>

    </div>



</template>

<script>

import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default {
    data() { 
        return {

        }
    },
    setup() {

    },
    components: {},
    methods: {},
    unmounted(){ 
        //scroll destroy
        
    },
    mounted(){

         //GSAP animations
        const scrollContainer = document.querySelector('#page');
        const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: false,
        });

        scroll.on('scroll', ScrollTrigger.update);

        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.hero-fade', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-fade',
            start: 'top 0%',
            end: 'bottom 100%',
            scrub: true,
            //invalidateOnRefresh: true, // Invalidate the ScrollTrigger on refresh for accurate timing
            //markers: true, // Optional: Show ScrollTrigger markers for debugging
        },
        });
        
        gsap.fromTo('#NAV',{ y: 0 },{
        y: -60, // Target position
        duration: 2, // Duration of the slide animation
        scrollTrigger: {
          trigger: '#NAV',
          start: 'top top',
          end: 'bottom -40%',
          scrub: true,
          //invalidateOnRefresh: true, // Invalidate the ScrollTrigger on refresh for accurate timing
          //markers: true, // Optional: Show ScrollTrigger markers for debugging
        },
        });

        gsap.fromTo(
        '#hule-testimonials',
        { y: 0, opacity: 0, scale: 0.9 }, // Initial position, opacity, and scale
      {
        y: 0, // Target position
        opacity: 1, // Target opacity
        scale: 1, // Target scale
        duration: 0.5, // Duration of the animation
        ease: 'power2.out', // Easing function
        scrollTrigger: {
          trigger: '#hule-testimonials',
          start: 'bottom 80%', // Animation starts when the element is 80% in view from the top
          end: 'bottom 40%', // Animation ends when the element is at the center of the viewport
          scrub: true, // Smoothly updates the animation as you scroll
        },
        })


        ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
            if (arguments.length) {
            scroll.scrollTo(value, 0, 0);
            }
            return scroll.scroll.instance.scroll.y;
        },
        
        getBoundingClientRect() {
            return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            };
        },
        });

        }
    }


</script>



<style>
.marquee {
    
  animation: marquee 40s linear infinite;
  cursor: grab;
}

.marquee_offset {
    animation-delay: 20s;
  }

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>