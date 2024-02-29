<template>
  <div class="contact-wrapper">
    <h1 class="contact-title">Contact</h1>
    <div class="contact-container">
      <div class="contact-information">
        <h3 class="contact-information-title">Address</h3>
        <div class="contact-info">
          <img src="../assets/home.png">
          Manico
          Svärmaregatan 5 2 SE-603 61, Norrköping
        </div>
      </div>
      <div class="contact-information">
        <h3 class="contact-information-title">Phone</h3>
        <div class="contact-info">
          <img src="../assets/phone.png">
          +4611100070
        </div>
      </div>
      <div class="contact-information">
        <h3 class="contact-information-title">Email</h3>
        <div class="contact-info">
          <img src="../assets/email.png">
          info@manicotouch.com
        </div>
      </div>
    </div>
    <h3 class="contact-title-end">© www.eduplive.com</h3>
  </div>
</template>

<script setup>
console.log('contact');
</script>

<style lang="scss" scoped>
.contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .contact-title {
    border-bottom: 2px solid var(--clr-primary-dark);
    padding: .5rem 1rem;
    width: 90%;
    margin: 1rem;
  }

  .contact-title-end {
    text-align: center;
    border-top: 2px solid var(--clr-primary-dark);
    width: 90%;
    margin-top: auto;
    margin-bottom: 2rem;
  }

  .contact-container {
    background-color: var(--clr-primary);
    border: 3px solid var(--clr-primary-dark);
    border-radius: 10px;
    margin: 2rem;
    align-content: center;
    padding: 1rem;
    widows: auto;

    .contact-information {
      display: grid;
      grid-template-columns: 100px 1fr;
      margin: 1rem;

      .contact-information-title {
        text-align: end;
        padding-right: 1rem;
        font-weight: 550;
        color: var(--fc-dark);
        font-style: italic;
        // border-right: 2px solid var(--clr-primary-dark);
      }

      .contact-info {
        display: flex;
        color: var(--fc-dark);
        align-items: center; /* Vertically align image and text */

        img {
          margin-inline: 1rem;
        }
      }
    }
  }
}
</style>