import Phaser from 'phaser'
export default class MenuScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'MenuScene'
        })
    }

    init() {
        console.log('MenuScene: init()')
    }

    preload() {
        console.log('MenuScene: preload()')
    }

    create() {
        console.log('MenuScene: create()')
        this.scene.start('GameScene')
    }

}