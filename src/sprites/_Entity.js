import Phaser from 'phaser'
export default class _Entity extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene, x, y, texture, frame) {

        super(scene, x, y, texture, frame)

        scene.physics.world.enable(this)
        scene.add.existing(this)

        this.scene   = scene
        this.texture = texture
        this.status  = 'idle'
        this.facing  = 's'
        this.weapon  = null
        this.speed   = 64
        this.stats   = {}

        this.setAnimations()

        if (typeof this['onMounted'] === 'function') {
            this.onMounted()
        }

    }

    setAnimations() {
        this.scene.anims.create({
            key: 'idle-n',
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 0, end: 0 })
        })
        this.scene.anims.create({
            key: 'idle-s',
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 26, end: 26 })
        })
        this.scene.anims.create({
            key: 'idle-e',
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 39, end: 39 })
        })
        this.scene.anims.create({
            key: 'idle-w',
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 13, end: 13 })
        })
        this.scene.anims.create({
            key: 'walk-n',
            repeat: -1,
            frameRate: 8,
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 105, end: 112 })
        })
        this.scene.anims.create({
            key: 'walk-s',
            repeat: -1,
            frameRate: 8,
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 131, end: 138 })
        })
        this.scene.anims.create({
            key: 'walk-e',
            repeat: -1,
            frameRate: 8,
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 143, end: 150 })
        })
        this.scene.anims.create({
            key: 'walk-w',
            repeat: -1,
            frameRate: 8,
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 117, end: 124 })
        })
        this.scene.anims.create({
            key: 'bow-w',
            frameRate: 12,
            frames: this.scene.anims.generateFrameNames(this.texture, { start: 221, end: 234 })
        })
    }

    idleHere() {
        this.status = 'idling'
        this.body.velocity.x = 0
        this.body.velocity.y = 0
        this.play(`idle-${this.facing}`, false)
    }

    walkInDirection(direction, sprint) {
        this.status = 'walking'
        let speed = this.speed
        if (sprint) {
            speed = speed * 2
        }
        switch (direction) {
            case 'n':
                this.facing = 'n'
                this.body.velocity.x = 0
                this.body.velocity.y = speed * -1
                break
            case 's':
                this.facing = 's'
                this.body.velocity.x = 0
                this.body.velocity.y = speed
                break
            case 'e':
                this.facing = 'e'
                this.body.velocity.x = speed
                this.body.velocity.y = 0
                break
            case 'w':
                this.facing = 'w'
                this.body.velocity.x = speed * -1
                this.body.velocity.y = 0
                break
        }
        this.play(`walk-${this.facing}`, true)
    }

    attackWith(weapon) {
        this.status = 'attacking'
        this.play(`${weapon}-${this.facing}`, true)
    }
}