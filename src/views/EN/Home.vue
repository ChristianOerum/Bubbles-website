<template>

    <div class="relative">
        
        <img id="test" class="w-[80%] absolute" :src="require('@/assets/svg/hero.svg')" alt="Hero illustration" />  
        <h1 class="font-medium text-6xl text-main relative">Remove distraction, improve consentration</h1>

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
    methods: {},

    mounted(){

        //get country code and redirect to relevant subsite
        try {

            fetch("https://ipapi.co/country/")
            .then(response => {
                if (response.ok) {
                return response.text();
                } else {
                console.log("error: " + response.status)
                }
            })
            .then(country => {
                console.log(country)

                if (country != "DK") {
                this.$router.push('/en/home');
                } else {
                this.$router.push('/da/home');
                }

            })
            .catch(function(error) {
                console.log("ERROR: api endpoint did not return lang-code: " + error);
            });

        } catch (error) {
            console.error("ERROR: Couldn't get info for langauge redirect: " + error)
        }


    }
}
</script>