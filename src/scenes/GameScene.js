import Phaser from 'phaser'
import Champion from '../sprites/Champion'
export default class GameScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'GameScene'
        })
    }

    init() {
        console.log('GameScene: init()')
    }

    preload() {
        console.log('GameScene: preload()')

        this.controls = this.input.keyboard.createCursorKeys()

        this.champion = new Champion(this, this.game.renderer.width / 2, this.game.renderer.height / 2, 'champion')

        const tilemap = this.add.tilemap('cawold')

        const terrain = tilemap.addTilesetImage('terrain')

        const layers  = [
            tilemap.createStaticLayer('ground', [terrain], 0, 0).setDepth(0),
            tilemap.createStaticLayer('pond-1', [terrain], 0, 0).setDepth(1),
            tilemap.createStaticLayer('pond-2', [terrain], 0, 0).setDepth(2),
            // tilemap.createStaticLayer('tree-1', [terrain], 0, 0).setDepth(4),
            // tilemap.createStaticLayer('tree-2', [terrain], 0, 0).setDepth(5),
            // tilemap.createStaticLayer('tree-3', [terrain], 0, 0).setDepth(6),
            // tilemap.createStaticLayer('tree-4', [terrain], 0, 0).setDepth(7),
            // tilemap.createStaticLayer('tree-5', [terrain], 0, 0).setDepth(8),
            // tilemap.createStaticLayer('tree-6', [terrain], 0, 0).setDepth(9)
        ]

        layers.forEach(layer => {
            this.physics.add.collider(this.champion, layer)
            layer.setCollisionByProperty({ collide: true })
        })

        this.champion.setDepth(3)

        this.cameras.main.startFollow(this.champion)

        this.physics.world.setBounds(tilemap.widthInPixels, tilemap.heightInPixels)

    }

    create() {
        console.log('GameScene: create()')
    }

    update() {
        let sprint = false
        
        if (this.controls.space.isDown) {
            sprint = true
        }

        if (this.controls.up.isUp && this.controls.down.isUp && this.controls.left.isUp && this.controls.right.isUp) {
            this.champion.idleHere()
        }
        else if (this.controls.up.isDown) {
            this.champion.walkInDirection('n', sprint)
        }
        else if (this.controls.down.isDown) {
            this.champion.walkInDirection('s', sprint)
        }
        else if (this.controls.left.isDown) {
            this.champion.walkInDirection('w', sprint)
        }
        else if (this.controls.right.isDown) {
            this.champion.walkInDirection('e', sprint)
        }
    }

}