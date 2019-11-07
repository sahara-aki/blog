import React, { Component } from 'react'
import './index.less'
export default class Css extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  componentDidMount(){
    this.initHana();
  }


  initHana = ()=>{
    var VW = window.innerWidth;
      var VH = window.innerHeight;

      var canva1 = document.getElementById('canva1');
      var canva2 = document.getElementById('canva2');
      var canva3 = document.getElementById('canva3');
      var role = document.getElementById('role');

      [canva1, canva2, canva3].forEach(canva => {
        canva.width = VW
        canva.height = VH
      })

      var context1 = canva1.getContext('2d')
      var context2 = canva2.getContext('2d')
      var context3 = canva3.getContext('2d')

      var PI = Math.PI
      var sin = Math.sin
      var cos = Math.cos
      var random  = Math.random
      var FULL_ANG = 360
      var HALF_ANG = 180

      var colorList1 = [
        '#f0f0f0', '#c9c9c9', '#d9d9d9',
        '#dfdfdf', '#bfbfbf', '#b5b5b5'
      ]
      // 浅 -> 深
      var colorList2 = [
        '#f0f0f0', '#ccc', '#c9c9c9',
        '#d9d9d9', '#dddddd', '#d0d0d0',
        '#bfbfbf', '#b5b5b5',
        '#bbb', '#8f8f8f', '#767676'
      ]

      var colorList3 = [
        '#f2e1c7', '#f9e7c3', '#fdd6af',
        '#fadcb6', '#e9b8ae', '#f7bcda',
        '#eb7bcf', '#d82066'
      ]

      var colorList4 = [
        '#fadcb6', '#fc766d', '#f7bdd6',
        '#f694e7', '#eb7bcf', '#cf60c7',
        '#eb5998', '#d82066', '#e1337a'
      ]

      // 半径、与偏移角度计算相对坐标即相对于原点的偏移量
      // 因为在后面的 ctx.translate(this.x, this.y) 会将坐标原点设置为圆心所在位置
      function createPoint(ang, radius, offset = 0) {
        const rad = PI * (ang + offset) / HALF_ANG
        return {
          x: radius * sin(rad),
          y: radius * cos(rad)
        }
      }

      function getRandomColor (colorList){
        return colorList[random() * colorList.length | 0]
      }

      // 画板的宽度高度、 坐标、半径、花瓣的数量
      function Flower (cw, ch, radius, colors, alpha, vy, vr) {
        var count = 5
        var halfRadius = radius / 2
        var cacheCanvas = document.createElement('canvas')
        cacheCanvas.width = radius * 2
        cacheCanvas.height = radius * 2
        this.halfRadius = halfRadius
        this.x = random() * cw + halfRadius
        this.y = random() * ch + halfRadius
        this.vy = vy
        this.vx = random() * 1 - 0.5
        this.vr = vr
        this.cw = cw
        this.ch = ch
        this.alpha = alpha
        this.scale = 1
        this.radius = radius
        this.color = '#fff'
        this.colors = colors
        this.count = count
        this.rotate = 0
        this.points = []
        this.canva = cacheCanvas
        this.ctx = cacheCanvas.getContext('2d')
        this.vertical = 1 // 换飘落的方向 1 向下 0 静止 -1 向上
        this.setColor()
        this.createPath()
        this.cache()
      }

      Flower.prototype.setColor = function setColor () {
        if (this.vertical === 1) {
          this.color = this.colors[0]
        } else {
          this.color = this.colors[1]
        }
      }

      Flower.prototype.zoom = function zoom () {
        this.vertical = 0
        this.setColor()
        this.cache()
      }

      Flower.prototype.reverse = function reverse () {
        this.vertical = -1
      }

      // 用于生成花瓣的路径
      Flower.prototype.createPath = function createPath () {
        var radius = this.radius
        var count = this.count
        // 单个花瓣的所占的角度
        var singleAng = 360 / count
        var halfAng = singleAng / 2
        var r3 = radius
        var r2 = radius * 0.9
        var r1 = radius * 0.3
        var r2Offset = r2 * 0.2
        var ponits = []
        for (var i = 0; i < this.count; i++) {
          ponits.push(createPoint(singleAng * i, r1))
          ponits.push(createPoint(singleAng * i, r2 + (random() * r2Offset - r2Offset / 2)))
          ponits.push(createPoint(singleAng * i, r3, halfAng))
          ponits.push(createPoint(singleAng * (i + 1), r2 + (random() * r2Offset - r2Offset / 2)))
        }
        // 首尾路径闭合
        ponits.push(ponits[0])
        this.ponits = ponits
      }

      // 先在自身的离屏 canvas 缓存绘制出花瓣图案
      Flower.prototype.cache = function cache () {
        var ctx = this.ctx
        var ponits = this.ponits
        var radius = this.radius
        ctx.clearRect(0, 0, radius * 2, radius * 2)
        ctx.save()
        ctx.translate(radius, radius)
        ctx.beginPath()
        ctx.globalAlpha = this.alpha
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.color
        ctx.moveTo(ponits[0].x, ponits[0].y)
        for (var i = 2; i < ponits.length; i += 2) {
          var target = ponits[i]
          var cp = ponits[i - 1]
          ctx.quadraticCurveTo(cp.x, cp.y, target.x, target.y)
        }
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        ctx.restore()
      }

      // 绘制花瓣
      Flower.prototype.drow = function drow (context) {
        context.save()
        context.translate(this.x, this.y)
        context.rotate(this.rotate)
        context.scale(this.scale, this.scale)
        context.drawImage(this.canva, -this.radius, -this.radius)
        context.restore()
      }

      // 更新路径判断边界
      Flower.prototype.update = function update () {
        if (!this.vertical && this.scale >= 0.9) {
          this.scale *= 0.99
          return
        }
        var halfRadius = this.halfRadius + 10
        this.rotate += this.vr * this.vertical
        this.x += this.vx * this.vertical
        this.y += this.vy * this.vertical
        if (this.x < -halfRadius || this.x > this.cw + halfRadius) {
          this.x = this.x > 0 ? -halfRadius : this.cw + halfRadius
        }
        if (this.y < -halfRadius || this.y > this.ch + halfRadius) {
          this.y = this.y > 0 ? -halfRadius : this.ch + halfRadius
          this.x = random() * this.cw + this.halfRadius
        }
      }


      function Layer (options) {
        var context = options.ctx
        var count = options.count
        var size = options.size
        var alpha = options.alpha
        var vy = options.vy
        var vr = options.vr
        var colors1 = options.colors1
        var colors2 = options.colors2
        var flowers = []
        for (var i = 0; i < count; i++) {
          var rsize = (random() * (size.max - size.min) + size.min) | 1
          var ralpha = random() * (alpha.max - alpha.min) + alpha.min
          var rvy = random() * (vy.max - vy.min) + vy.min
          var rvr = random() * (vr.max - vr.min) + vr.min
          var colors = [getRandomColor(colors1), getRandomColor(colors2)]
          flowers.push(new Flower(VW, VH, rsize, colors, ralpha, rvy, rvr))
        }
        // var scale = 2
        this.zoomTransform = false
        this.context = context
        this.flowers = flowers
        // this.scale = scale
        // this.context.scale(scale, scale)
      }

      Layer.prototype.zoom = function boom () {
        // this.zoomTransform = true
        this.flowers.forEach(flower => {
          flower.zoom()
        })
      }

      Layer.prototype.reverse = function reverse () {
        // this.zoomTransform = false
        this.flowers.forEach(flower => {
          flower.reverse()
        })
      }

      Layer.prototype.tick = function tick () {
        this.flowers.forEach(flower => {
          flower.update()
          flower.drow(this.context)
        })
      }

      Layer.prototype.clear = function clear () {
        // if (this.zoomTransform) return
        this.context.clearRect(0, 0, VW, VH)
      }

      var layers = [
        {
          ctx: context1,
          count: 1000, // 2000 个在其他浏览器上比较卡，推荐 chrome 
          size: { max: 20, min: 4 },
          alpha: { max: 0.6, min: 0.2 },
          vy: { max: 4, min: 2 },
          vr: { max: 0.04, min: 0.01 },
          colors1: colorList1,
          colors2: colorList3
        },
        {
          ctx: context2,
          count: 200,
          size: { max: 30, min: 10 },
          alpha: { max: 0.9, min: 0.2 },
          vy: { max: 2, min: 1 },
          vr: { max: 0.03, min: 0.01 },
          colors1: colorList2,
          colors2: colorList3
        },
        {
          ctx: context3,
          count: 10,
          size: { max: 100, min: 40 },
          alpha: { max: 1, min: 0.8 },
          vy: { max: 1, min: 0.5 },
          vr: { max: 0.03, min: 0.02 },
          colors1: colorList2,
          colors2: colorList4
        }
      ].map(opt => (new Layer(opt)))

      function drawFrame () {
        window.requestAnimationFrame(drawFrame)
        layers.forEach(layer => {
          layer.clear()
          layer.tick()
        })
      }

      drawFrame()

      // 6 秒后静止画面，缩放花瓣
      this.timer1 = setTimeout(() => {
        layers.forEach(layer => { layer.zoom() })
      }, 6000)

      // 往后 1 秒花瓣方向运动
      this.timer2 = setTimeout(() => {
        layers.forEach(layer => { layer.reverse() })
      }, 7000)
  }

  componentWillUnmount = ()=>{
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }



  render(){
    return <div className="css-container">
      <canvas width="800" height="600" id="canva1"></canvas>
      <canvas width="800" height="600" id="canva2"></canvas>
      <canvas width="800" height="600" id="canva3"></canvas>
    </div>
  }
  
}