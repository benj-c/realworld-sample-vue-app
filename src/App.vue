<template>
    <div class="container">
        <div
            class="nav"
            v-if="authenticated === true"
            :style="navActive ? 'visibility: visible' : 'visibility: hidden'"
        >
            <div class="user">
                <div class="heading">
                    <span
                        >Sample Management
                        <br />
                        System
                    </span>
                </div>
            </div>

            <ul class="main-nav-links">
                <li v-for="(r, index) in navLinks" :key="index">
                    <router-link :to="r.path" v-if="r.meta.activeNav">
                        <i :class="`pi ${r.meta.icon}`"></i>
                        <span>{{ r.name }}</span>
                    </router-link>
                </li>
            </ul>

            <ul class="nav-bottom">
                <li @click="logoutUser">
                    <i class="pi pi-sign-out"></i>
                    <span>Log out</span>
                </li>
            </ul>
        </div>

        <div class="page-container" id="pg-container">
            <div class="p-gird" style="height: 100%">
                <div class="p-lg-12" v-if="authenticated === true">
                    <h1 class="header">
                        <i class="pi pi-bars" @click="resetNav"></i>
                        <span class="title">
                            {{ title }}
                        </span>
                    </h1>
                </div>

                <div
                    class="p-lg-12"
                    :style="
                        `padding: 0; margin: 0; ${
                            !title || title == 'Login' ? 'height: inherit' : ''
                        }`
                    "
                >
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@base-color: #6a75ca;
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
.container {
    height: 100%;
    padding: 0;
    background-color: @base-color;
    background: url("./assets/color-background-2.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;


    
    // background-color: #a9c9ff;
    // background-image: linear-gradient(180deg, #ffbbec 0%, #a9c9ff 100%);

    .nav {
        color: #fff;
        z-index: 0;
        position: fixed;
        // left: 10px;
        top: 29%;
        width: 250px;

        .main-nav-links,
        .nav-bottom {
            padding: 0;
            margin: 0;
            width: 100%;

            li {
                list-style: none;
                font-size: 20px;
                margin-bottom: 10px;

                a {
                    color: #fff;
                    text-decoration: none;
                    text-decoration-color: none;
                    width: 100%;
                    transition: 0.2s ease-out;
                    padding: 7px;
                    padding-left: 0;

                    i {
                        padding: 8px;
                    }

                    &:hover {
                        text-shadow: 1px 1px 8px #fff;
                    }
                }
            }
        }

        .user {
            position: fixed;
            top: 2%;
            left: 10px;

            .heading {
                padding: 0 10px 10px 0;
                text-shadow: 1px 1px 8px #fff;
                font-size: 1em;
            }
        }

        .nav-bottom {
            position: fixed;
            bottom: 2%;
            li {
                cursor: pointer;
            }

            i {
                padding: 8px;
            }
        }
    }

    .page-container {
        background-color: #f7faff;
        height: 100%;
        transition: 0.3s;
        transition-timing-function: ease;

        .header {
            font-weight: 100;
            margin: 0 0 0 10px;
            font-size: 1.5em;
            color: #333;
            transition: 0.2s ease-out;
            i {
                cursor: pointer;
                vertical-align: middle;
                font-size: 28px;
                transition: 0.1s;
                margin-bottom: 5px;

                &:hover {
                    text-shadow: 0px 0px 8px #000;
                }
            }

            .title {
                margin-left: 5px;
            }
        }
    }

    .navigation-active {
        margin-left: 250px;
        margin-right: -250px;
        transform: scale(1, 0.97);
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
    }

    .router-link-active {
        font-weight: 500;
        text-shadow: 0px 0px 8px #fff;
        border-left: 5px solid #fff;
    }
}
</style>

<script>
/* eslint-disable */
import { routes } from "./router";
import { getUser, isAuthenticated, logOut } from "./service/Auth";

export default {
    data() {
        return {
            navActive: false,
            navLinks: routes,
            title: null
        };
    },
    mounted() {
        this.title = this.$route.meta.title;
    },
    created() {
        this.title = this.$route.meta.title;
    },
    computed: {
        authenticated: function() {
            return isAuthenticated();
        },
        user: function() {
            return getUser();
        }
    },
    methods: {
        resetNav() {
            this.navActive = !this.navActive;
            let ele = document.getElementById("pg-container");
            if (this.navActive) {
                ele.classList.add("navigation-active");
            } else {
                ele.classList.remove("navigation-active");
            }
        },
        logoutUser() {
            logOut();
        }
    },
    watch: {
        "$route.path": function(p) {
            this.title = this.navLinks.filter(i => i.path == p)[0].meta.title;
        }
    }
};
</script>
