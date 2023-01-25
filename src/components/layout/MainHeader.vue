<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="/logo.svg" alt="CC Home" />
      </a>
    </div>
    <nav>
      <ul>
        <li><button class="profile">Tirupathi Rao</button></li>
        <li>
          <button class="notifications"><i>2</i></button>
        </li>
        <li><button class="settings"></button></li>
        <li><button class="book"></button></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    ul {
      display: flex;
      gap: 3rem;

      li {
        button {
          border: 0;
          background-color: transparent;
          font-size: 1.8rem;
          color: var(--color-text);
          position: relative;
          display: flex;
          height: 100%;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: 100% 50%;

          &.profile {
            background-image: url(/icons/user.svg);
            background-size: 25px 27px;
            padding-right: 4rem;
          }
          &.notifications {
            background-image: url(/icons/bell.svg);
            background-size: 22px 31px;
            width: 26px;

            i {
              background-color: var(--c-red);
              color: var(--c-white);
              width: 16px;
              height: 16px;
              position: absolute;
              right: -5px;
              top: 2px;
              border-radius: 50%;
              line-height: 16px;
              font-size: 11px;
              text-align: center;
            }
          }
          &.settings {
            background-image: url(/icons/settings.svg);
            background-size: 24px 24px;
            width: 24px;
          }
          &.book {
            background-image: url(/icons/book.svg);
            background-size: 24px 22px;
            width: 24px;
          }
        }
      }
    }
  }
}
</style>
