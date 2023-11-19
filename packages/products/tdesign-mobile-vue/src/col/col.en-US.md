:: BASE_DOC ::

## API

### Col Props

name | type | default | description | required
-- | -- | -- | -- | --
flex | String / Number | - | \- | N
offset | Number | 0 | \- | N
offset | String / Number | - | \- | N
order | Number | 0 | \- | N
pull | Number | 0 | \- | N
push | Number | 0 | \- | N
span | Number | - | \- | N
span | String / Number | - | \- | N
tag | String | div | \- | N

### Row Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | top | options: start/end/center/stretch/baseline/top/middle/bottom | N
gutter | Number / Object / Array | 0 | Typescript：`number \|  GutterObject \| Array<GutterObject \| number>` `interface GutterObject { xs?: number; sm?: number; md?: number; lg?: number, xl?: number; xxl?: number; } `。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/grid/type.ts) | N
gutter | String / Number | - | \- | N
justify | String | start | options: start/end/center/space-around/space-between | N
tag | String | div | \- | N
