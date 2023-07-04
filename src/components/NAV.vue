<template>


    <div id="NAV" class="fixed top-0 w-full z-40">

        <div class="w-full bg-[#8DFF8D]/[0.32] h-[50px] flex items-center justify-center">

            <p class="font-semibold text-sm text-[#005726]">KONCENTRERET OG UFORSTYRRET UNDERVISNING   -  GRATIS DEMO OG INTRODUKTIONS KURUS   -   FULD TEKNISK SUPPORT </p>

        </div>

        <div class="h-[80px] p-[20px] w-full flex justify-center relative">

            <div class="h-full desktop:w-[1400px] laptop:w-[100%] tablet:w-[100%] flex flex-row relative">

                <img class="w-auto h-full" :src="require('@/assets/svg/bubbles_logo.svg')" alt="Navigation Bubbles logo" />

                <div class="w-auto h-full absolute right-0 flex flex-row">

                    <button v-if="name== 'da'" @click="gotoEN" class="pt-[1px] text-md h-full w-auto bg-transparent font-bold text-main ml-2 rounded-full pl-4 pr-4 opacity-50     hover:bg-[#F7FAFF] hover:opacity-100     transition duration-300"><fa icon="earth-americas" class="text-[#3A913C] h-[16px]" /> DK</button>
                    <button v-else @click="gotoDA" class="pt-[1px] text-md h-full w-auto bg-transparent font-bold text-main ml-2 rounded-full pl-4 pr-4 opacity-50     hover:bg-[#F7FAFF] hover:opacity-100     transition duration-300"><fa icon="earth-americas" class="text-[#3A913C] h-[16px]" /> EN</button>

                    <button class="pt-[1px] text-md h-full w-auto bg-transparent font-bold text-main ml-2 pl-4 pr-4 rounded-full     hover:bg-[#F7FAFF]      transition duration-300">Til forældre</button>
                    <button class="pt-[1px] text-md h-full w-auto bg-transparent font-bold text-main ml-2 pl-4 pr-4 rounded-full     hover:bg-[#F7FAFF]      transition duration-300">Pakker</button>
                    <button class="pt-[1px] text-md h-full w-auto bg-transparent font-bold text-main ml-2 pl-4 pr-4 rounded-full     hover:bg-[#F7FAFF]      transition duration-300">Om os</button>
                    <button class="pt-[1px] text-md h-full w-auto bg-[#F6FBFF] font-bold text-bubbles ml-2 pl-4 pr-4 rounded-full    hover:bg-[#0097ff] hover:text-white    transition duration-500">Kontakt os</button>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {
    props: ["name"],
    components: {},
    methods: {
        gotoEN(){
            this.$store.state.lang = "en"
            this.$router.push('/en/home')
        },
        gotoDA(){
            this.$store.state.lang = "da"
            this.$router.push('/da/home')
        }
    }
}

</script>