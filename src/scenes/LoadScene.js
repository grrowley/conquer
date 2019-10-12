import Phaser from 'phaser'
export default class LoadScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'LoadScene'
        })
    }

    init() {
        console.log('LoadScene: init()')
    }

    preload() {
        console.log('LoadScene: preload()')

        this.load.spritesheet('champion', './assets/sprites/champion/default.png', { frameWidth: 64, frameHeight: 64 })
        this.load.spritesheet('orc', './assets/sprites/enemy/orc/default.png', { frameWidth: 64, frameHeight: 64 })
        this.load.spritesheet('skeleton', './assets/sprites/enemy/skeleton/default.png', { frameWidth: 64, frameHeight: 64 })
        this.load.spritesheet('gaurd', './assets/sprites/npc/gaurd/default.png', { frameWidth: 64, frameHeight: 64 })

        this.load.image('terrain', './assets/maps/terrain.png')
        this.load.tilemapTiledJSON('cawold', './assets/maps/cawold.json')
    }

    create() {
        console.log('LoadScene: create()')
        this.scene.start('MenuScene')
    }

}