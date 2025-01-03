<script setup></script>

<template>
  <div class="card-container">
    <div class="card front">
      <div class="social">
        <img
          id="social-image"
          src="../../assets/github-logo.png"
          alt="github-icon"
        />
        <img
          id="social-image"
          src="../../assets/linkedin-logo.png"
          alt="linkedin-icon"
        />
      </div>

      <div class="profile">
        <img id="pfp" src="../../assets/pfp.png" alt="profile-picture" />

        <h1>@CodeInPieces</h1>
        <p>Engineer by day, and sometimes by night...</p>
        <p class="poem">
          "In the brightest screen, in the darkest tasks, no bug shall scape
          from my sight, make those who worship anti patterns designs, beware my
          code, CodeInPieces style"
        </p>
      </div>

      <div class="flip-zone">
        <img class="flip-icon" src="../../assets/flip.svg" alt="flip-icon" />
      </div>
    </div>

    <div class="card back">
      <div class="back-content">
        <img
          class="back-image"
          src="../../assets/old-computer.png"
          alt="old-computer-image"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          similique, libero reiciendis nostrum, quas unde soluta, tempora
          tenetur accusantium molestias quibusdam. Qui veniam nostrum suscipit
          dicta pariatur tenetur, fugiat quod?
        </p>

        <p class="poem">
          I turn problems into solutions, and I'm always looking for new
          challenges
        </p>
      </div>
      <div class="flip-zone">
        <img class="flip-icon" src="../../assets/flip.svg" alt="flip-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
div.card-container {
  display: flex;
  perspective: 1280px;
  width: 70vh;
  height: 40vh;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: var(--alternative-background);
  border-radius: 10px;
  box-shadow: 0px 0px 20px 5px var(--main-green);

  backface-visibility: hidden;
  transition: transform 1s;
}

.front {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  transform: rotateY(180deg);
}

/*
.card-container:hover .front {
  transform: rotateY(-180deg);
}

.card-container:hover .back {
  transform: rotateY(0deg);
}
*/

div.social {
}

div.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

div.flip-zone {
  display: flex;
  align-items: end;
}

img#pfp {
  display: block;
  border: 1px solid var(--text-dark-main);
  border-radius: 100%;
  margin: 0 auto;
  width: 200px;
}
img#social-image {
  width: 50px;
  margin: 5px auto;
}

div.back-content {
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img.back-image {
  display: block;
  margin: 0 auto;
  width: 150px;
}
img.flip-icon {
  width: 50px;
  margin: 5px auto;
}

p {
  font-size: 1rem;
  color: var(--text-dark-main);
  text-align: center;
}

p.poem {
  font-style: italic;
  font-size: 1rem;
  color: var(--text-dark-main);
  text-align: center;
  margin-top: 1rem;
}

h1 {
  font-size: 2rem;
  color: var(--text-dark-main);
  margin-top: 2rem;
  text-align: center;
}
</style>
