<template>
  <div class="error-container h-full -mr-6 -ml-6">
    <div class="maincontainer">
      <div class="bat">
        <img class="wing leftwing" src="../assets/bat-wing.png" />
        <img class="body" src="../assets/bat-body.png" alt="bat" />
        <img class="wing rightwing" src="../assets/bat-wing.png" />
      </div>
      <div class="bat">
        <img class="wing leftwing" src="../assets/bat-wing.png" />
        <img class="body" src="../assets/bat-body.png" alt="bat" />
        <img class="wing rightwing" src="../assets/bat-wing.png" />
      </div>
      <div class="bat">
        <img class="wing leftwing" src="../assets/bat-wing.png" />
        <img class="body" src="../assets/bat-body.png" alt="bat" />
        <img class="wing rightwing" src="../assets/bat-wing.png" />
      </div>
      <img
        class="foregroundimg"
        src="./../assets/HauntedHouseForeground.png"
        alt="haunted house"
      />
    </div>
    <h1 class="errorcode text-yellow-700">ERROR 403</h1>
    <div class="errortext text-orange-900">
      This area is forbidden. Turn back now!
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessDenied"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Creepster");

.error-container {
  /*background-color: #000121 !important;*/
  font-family: "Roboto", sans-serif;
}

.maincontainer {
  position: relative;
  top: 24px;
  transform: scale(0.8);
  background: url("./../assets/HauntedHouseBackground.png") no-repeat center;
  background-size: 700px 600px;
  width: 800px;
  height: 600px;
  margin: 0px auto;
  display: grid;
}

.foregroundimg {
  position: relative;
  width: 100%;
  top: -584px;
  z-index: 5;
}

.errorcode {
  position: relative;
  top: -56px;
  font-family: "Creepster", cursive;
  text-align: center;
  font-size: 6em;
  letter-spacing: 0.1em;
}

.errortext {
  position: relative;
  top: -78px;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8em;
}

.bat {
  opacity: 0;
  position: relative;
  transform-origin: center;
  z-index: 3;
}

.bat:nth-child(1) {
  top: 360px;
  left: 120px;
  transform: scale(0.5);
  animation: 13s 1s flyBat1 infinite linear;
}

.bat:nth-child(2) {
  top: 220px;
  left: 80px;
  transform: scale(0.3);
  animation: 8s 4s flyBat2 infinite linear;
}

.bat:nth-child(3) {
  top: 24px;
  left: 150px;
  transform: scale(0.4);
  animation: 12s 2s flyBat3 infinite linear;
}

.body {
  position: relative;
  width: 50px;
  top: 81px;
}

.wing {
  width: 150px;
  position: relative;
  transform-origin: right center;
}

.leftwing {
  left: -140px;
  top: 157px;
  animation: 0.8s flapLeft infinite ease-in-out;
}

.rightwing {
  left: -112px;
  transform: scaleX(-1);
  animation: 0.8s flapRight infinite ease-in-out;
}

@keyframes flapLeft {
  0% {
    transform: rotateZ(0);
  }
  50% {
    transform: rotateZ(10deg) rotateY(40deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes flapRight {
  0% {
    transform: scaleX(-1) rotateZ(0);
  }
  50% {
    transform: scaleX(-1) rotateZ(10deg) rotateY(40deg);
  }
  100% {
    transform: scaleX(-1) rotateZ(0);
  }
}

@keyframes flyBat1 {
  0% {
    opacity: 1;
    transform: scale(0.5);
  }
  25% {
    opacity: 1;
    transform: scale(0.5) translate(-400px, -330px);
  }
  50% {
    opacity: 1;
    transform: scale(0.5) translate(400px, -800px);
  }
  75% {
    opacity: 1;
    transform: scale(0.5) translate(600px, 100px);
  }
  100% {
    opacity: 1;
    transform: scale(0.5) translate(100px, -330px);
  }
}

@keyframes flyBat2 {
  0% {
    opacity: 1;
    transform: scale(0.3);
  }
  25% {
    opacity: 1;
    transform: scale(0.3) translate(200px, -330px);
  }
  50% {
    opacity: 1;
    transform: scale(0.3) translate(-300px, -800px);
  }
  75% {
    opacity: 1;
    transform: scale(0.3) translate(-400px, 100px);
  }
  100% {
    opacity: 1;
    transform: scale(0.3) translate(100px, -100px);
  }
}

@keyframes flyBat3 {
  0% {
    opacity: 1;
    transform: scale(0.4);
  }
  25% {
    opacity: 1;
    transform: scale(0.4) translate(-350px, -330px);
  }
  50% {
    opacity: 1;
    transform: scale(0.4) translate(400px, -800px);
  }
  75% {
    opacity: 1;
    transform: scale(0.4) translate(-600px, 100px);
  }
  100% {
    opacity: 1;
    transform: scale(0.4) translate(100px, -350px);
  }
}
</style>
