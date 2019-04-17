<template>
    <div class="page">
        <div class="navbar">
            <router-link :to="{ name: 'home' }"><img src="" /></router-link>

            <div clas="navmenu">
                <ul>
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'contactus' }">Contact Us</router-link></li>
                </ul>
            </div>
        </div>

        <div class="container">
            <router-view></router-view>
        </div>

        <div class="footer">
            <div>
                <p>Copyright Richard Bates 2019&copy;</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>