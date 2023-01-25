<script setup>
const login = () => {
  window.location.href = "/dashboard"
}
</script>

<template>
  <section class="login">
    <div class="title">
      <h1>Cloud Central Platform</h1>
      <h2>One stop for Enterprise cloud journey</h2>
    </div>
    <div class="form">
      <h2>Login</h2>
      <form>
        <label>Username</label>
        <input type="text" class="username">
        <label>Password</label>
        <input type="password" class="password">
        <a href="#">Forgot password</a>
        <button @click="login" type="button">Login</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/mixins/buttons";

.login {
  background-color: var(--color-primary);
  width: 100%;
  height: 100%;
  padding: 3rem 12rem 3rem 6rem;
  display: flex;
  align-items: center;
  gap: 10rem;
  justify-content: space-between;

  .title {    
    margin-top: -20rem;

    h1,
    h2 {
      color: var(--color-background);
    }
    
    h1 {
      font-size: 6rem;
      font-weight: 700;
    }
    
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
  }

  .form {
    width: 45rem;
    //height: 47rem;
    background-color: var(--color-background);
    border-radius: 2rem;
    padding: 6rem 4rem;

    h2 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--color-text-soft);
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      label, 
      input {
        color: var(--color-text-soft);
      }

      input {
        border: 0;
        border-bottom: 1px solid var(--color-border);
        padding-left: 3rem;
        background-repeat: no-repeat;
        background-position: 0 50%;
        height: 4rem;
        font-size: 1.8rem;

        & + label {
          margin-top: 2rem;
        }

        &.username {
          background-image: url(/icons/user-login.svg);
          background-size: 1.86rem 2.23rem;
        }
        &.password {
          background-image: url(/icons/locker-login.svg);
          background-size: 1.45rem 2.04rem;
        }
      }

      a {
        text-align: right;
        color: var(--color-border);
        text-decoration: none;
      }

      button {
        @include button;
        justify-content: center;
        margin-top: 3rem;
      }
    }
  }
}
</style>
