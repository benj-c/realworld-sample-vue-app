<template>
    <div class="login-page p-grid">
        <div class="p-col-12 header" style="margin: 0; margin-top: 3%">
            <h4>Welcome Back :)</h4>
            <h2>Sample Management System</h2>
        </div>
        <div class="p-col-12 pre-logins" v-if="pre_logins.length > 0">
            <p>Select your account to continue</p>
            <ul>
                <li
                    v-for="(v, i) in pre_logins"
                    :key="i"
                    @click="() => setPreLogin(v)"
                >
                    <h2 :style="`background: ${v.c}`">
                        {{ v.l.substring(0, 1) }}
                    </h2>
                    <p>{{ v.l }}</p>
                </li>
            </ul>
        </div>

        <div class="bottom">
            <span
                class="new-account"
                @click="show_login_popup = !show_login_popup"
                v-if="pre_logins.length > 0"
            >
                <span><i class="pi pi-plus"></i>Add Account</span>
            </span>
            <br />
            <br />
        </div>

        <div :class="`login-pop ${show_login_popup ? 'show-pop' : ''}`">
            <div class="pop-close">
                <i
                    class="pi pi-times"
                    @click="show_login_popup = !show_login_popup"
                    v-if="pre_logins.length > 0"
                ></i>
            </div>
            <div class="login-header">
                <h4>Welcome Back :)</h4>
                <h1>Sample Management System</h1>
            </div>
            <form :model="loginData" ref="loginData" @submit="handleSubmit">
                <div class="form-item">
                    <label for="username">Username</label>
                    <br />
                    <InputText
                        type="text"
                        id="username"
                        autofocus
                        v-model="loginData.username"
                    />
                </div>
                <div class="form-item">
                    <label for="password">Password</label>
                    <br />
                    <InputText
                        type="password"
                        id="password"
                        v-model="loginData.password"
                    />
                </div>
                <div class="form-item">
                    <Button
                        label="Login"
                        class="p-button-sm"
                        type="submit"
                        :icon="submitting ? 'pi pi-spin pi-spinner' : ''"
                        :disabled="submitting"
                    />
                </div>
            </form>
        </div>

        <div :class="`login-pop ${show_pre_login_popup ? 'show-pop' : ''}`">
            <div class="pop-close">
                <i
                    class="pi pi-times"
                    @click="show_pre_login_popup = !show_pre_login_popup"
                ></i>
            </div>
            <div class="login-header">
                <h4>Welcome Back :)</h4>
                <h1>Sample Management System</h1>
            </div>
            <form
                :model="preLoginData"
                @submit="handleSubmitPreUser"
                v-if="show_pre_login_popup"
            >
                <div class="pre-user">
                    <h2 :style="`background: ${preLoginData.c}`">
                        {{ preLoginData.username.substring(0, 1) }}
                    </h2>
                    <p>{{ preLoginData.username }}</p>
                </div>
                <div class="form-item">
                    <label for="password">Password</label>
                    <br />
                    <InputText
                        type="password"
                        id="password"
                        v-model="preLoginData.password"
                    />
                </div>
                <div class="form-item">
                    <Button
                        label="Login"
                        class="p-button-sm"
                        type="submit"
                        :icon="submitting ? 'pi pi-spin pi-spinner' : ''"
                        :disabled="submitting"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="less">
@baseColor: #5c3882;
.login-page {
    height: inherit;
    background-color: #f5f6fc;
    padding: 0;
    margin: 0;

    background: url("../../assets/color-background-2.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    // background-color: #a9c9ff;
    // background-image: linear-gradient(180deg, #ffbbec 0%, #a9c9ff 100%);

    .header {
        text-align: center;
        // margin-top: 3%;
        h2,
        h4,
        p {
            font-weight: 200;
            margin: 0;
            color: #fff;
            text-shadow: 0px 0px 10px #e95434;
        }

        p {
            margin-top: 1%;
            font-weight: 400;
        }
    }

    .pre-logins {
        margin-top: -10%;
        text-align: center;
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;

            li {
                text-align: center;
                list-style: none;
                // display: inline-flex;

                margin: 10px 20px;
                padding: 10px;
                cursor: pointer;
                background: rgba(0, 0, 0, 0.05);
                border-radius: 5px;
                transition: 0.3s ease-in;
                width: 80px;

                &:hover {
                    background: rgba(0, 0, 0, 0.2);
                }

                h2 {
                    font-weight: 200;
                    text-transform: uppercase;
                    margin: 5px;
                    border-radius: 100%;
                    background: #e95434;
                    color: #fff;
                    padding: 10px 18px;
                    height: 50px;
                    width: 50px;
                }

                p {
                    margin: 0;
                    color: #fff;
                    text-shadow: 0px 0px 10px #000;
                }
            }
        }

        p {
            color: #fff;
            text-shadow: 0px 0px 10px #000;
        }
    }

    .bottom {
        position: fixed;
        bottom: 10px;
        left: 0;
        right: 0;
        text-align: center;
        color: #888;

        .new-account {
            padding: 10px;
            margin-bottom: 20px;
            background: rgba(0, 0, 0, 0.1);
            color: #fff;
            text-shadow: 0px 0px 5px #777;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s ease-in;

            i {
                margin-right: 10px;
            }

            &:hover {
                background: rgba(0, 0, 0, 0.3);
                text-shadow: 0px 0px 5px #888;
            }
        }
    }

    .login-pop {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        width: 100%;
        // height: 0px;
        z-index: -1;
        margin: 0 auto;
        transition: all ease-in 0.3s;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        .pop-close {
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);

            .pi-times {
                cursor: pointer;
                font-size: 1.5em;
                padding: 8px;
            }
        }

        .login-header {
            text-align: center;
            h1,
            h4 {
                font-weight: 200;
                margin: 2% 0 0 0;
                color: #fff;
                text-shadow: 0px 0px 10px #e95434;
                padding: 0 10px;
            }
            p {
                margin: 10px 0 0 0;
                color: #444;
                text-shadow: 0px 0px 10px #000;
            }
        }
        form {
            // margin: 0;
            position: absolute;
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);

            .form-item {
                margin-bottom: 20px;

                label {
                    text-align: left;
                    color: #495057;
                }

                input[type="text"],
                input[type="password"] {
                    border: none;
                    outline: none;
                    width: 250px;

                    font-size: 1rem;
                    background: rgba(255, 255, 255, 0.5);
                    color: #495057;
                    padding: 0.5rem 0.5rem;
                    border: 1px solid #ffac99;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;

                    &:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: 0 0 0 0.2rem #ffac99;
                        border-color: #e95434;
                        background: rgba(255, 255, 255, 0.8);
                    }
                }
                button {
                    width: 100%;
                    background: #e95434;
                    border-color: #e95434;

                    &:focus {
                        box-shadow: 0 0 0 0.2rem #ffac99;
                    }
                }
            }

            .pre-user {
                text-align: center;
                h2 {
                    font-weight: 200;
                    text-transform: uppercase;
                    margin: 5px;
                    border-radius: 100%;
                    background: #e95434;
                    color: #fff;
                    padding: 10px 18px;
                    height: 50px;
                    width: 50px;
                    margin: 0 auto;
                }

                p {
                    margin-top: 2px;
                }
            }
        }
    }

    .show-pop {
        opacity: 1;
        z-index: 1;
    }
}
</style>

<script>
/* eslint-disable */
import { getPreLogins, put } from "../../service/Auth";
import { UserApi } from "../../service/Api";

export default {
    data() {
        return {
            pre_logins: [],
            show_login_popup: true,
            show_pre_login_popup: false,
            submitting: false,
            loginData: { username: null, password: null },
            preLoginData: { username: null, password: null }
        };
    },
    mounted() {
        this.pre_logins = getPreLogins().map(v => {
            return { l: v, c: this.getThumnailColor() };
        });
        this.show_login_popup = this.pre_logins.length == 0;
    },
    methods: {
        getThumnailColor: function() {
            let c = ["#5c3882", "#e95434", "#139eb8"];
            let r = (Math.random() * (c.length + 1)) << 0;
            return c[r];
        },
        handleSubmit(e) {
            e.preventDefault();
            if (this.loginData.username && this.loginData.password) {
                this.login(this.loginData);
            }
        },
        handleSubmitPreUser: function(e) {
            e.preventDefault();
            if (this.preLoginData.username && this.preLoginData.password) {
                this.login(this.preLoginData);
            }
        },
        login: function(d) {
            this.submitting = true;
            UserApi.login(d)
                .then(res => {
                    let d = {
                        id: res.data.id,
                        username: res.data.username,
                        email: res.data.email,
                        active: true,
                        roles: res.data.role,
                        token: res.data.token
                    };
                    put(d);
                    window.location.reload();
                })
                .catch(e => {
                    e;
                    this.submitting = false;
                })
                .finally(() => {});
        },
        setPreLogin: function(d) {
            this.show_pre_login_popup = !this.show_pre_login_popup;
            this.preLoginData.username = d.l;
            this.preLoginData.c = d.c;
        }
    }
};
</script>
