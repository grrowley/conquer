<template lang="pug">
#conquer
</template>

<script>
import Phaser from 'phaser'
import LoadScene from '@/scenes/LoadScene'
import MenuScene from '@/scenes/MenuScene'
import GameScene from '@/scenes/GameScene'
export default {
  name: 'Conquer',
  mounted() {
    new Phaser.Game({
      parent: this.$el,
      renderer: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [
        LoadScene,
        MenuScene,
        GameScene
      ],
      render: {
        pixelArt: true,
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: true
        }
      },
      dom: {
        createContainer: true
      }
    })
  }
}
</script>

<style lang="scss">
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

#conquer {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
</style>