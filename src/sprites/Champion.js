// import Phaser from 'phaser'
import _Entity from './_Entity'
export default class Champion extends _Entity {
    onMounted() {
        this.speed = 128
        this.setSize(32, 32).setOffset(16.166, 36.666)
    }
}