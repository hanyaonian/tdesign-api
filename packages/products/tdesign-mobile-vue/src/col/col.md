:: BASE_DOC ::

## API

### Col Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
flex | String / Number | - | flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px' | N
offset | Number | 0 | 栅格左侧的间隔格数，间隔内不可以有栅格 | N
offset | String / Number | - | 列的偏移量（默认单位px） | N
order | Number | 0 | 栅格顺序，flex 布局模式下有效 | N
pull | Number | 0 | 栅格向左移动格数 | N
push | Number | 0 | 栅格向右移动格数 | N
span | Number | - | 栅格占位格数，为 0 时相当于 display: none | N
span | String / Number | - | 列的宽度（默认单位px） | N
tag | String | div | 自定义元素标签 | N

### Row Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | top | 纵向对齐方式，CSS 属性 `align-items` 值。其中 `top` 和 `start` 等效；`middle` 和 `center` 等效；`bottom` 和 `end` 等效。可选项：start/end/center/stretch/baseline/top/middle/bottom | N
gutter | Number / Object / Array | 0 | 栅格间隔，示例：`{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`。当数据类型为 Number 和 Object 时，用于指定横向间隔。当数据类型为数组时，第一个参数为横向间隔，第二个参数为纵向间隔， [水平间隔, 垂直间隔]。TS 类型：`number \|  GutterObject \| Array<GutterObject \| number>` `interface GutterObject { xs?: number; sm?: number; md?: number; lg?: number, xl?: number; xxl?: number; } `。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/grid/type.ts) | N
gutter | String / Number | - | 列之间的间距（默认单位px） | N
justify | String | start | flex 布局下的水平排列方式。可选项：start/end/center/space-around/space-between | N
tag | String | div | 自定义元素标签 | N
